import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const PaymentForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [cart, refetch] = useCart();
  const navigate = useNavigate();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  useEffect(() => {
   if(totalPrice > 0) {
    axiosSecure
    .post("/create-payment-intent", { price: totalPrice })
    .then((res) => {
      // console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    })
    }
  }, [axiosSecure, totalPrice]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: card,
    });

    if (error) {
      //   console.log("[error]", error);
      setError(error.message);
    } else {
      // console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.name || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("[confirmEerror]", confirmError);
    } else {
      // console.log("[paymentIntent]", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        // console.log("transaction id;", paymentIntent.id);
        setTransactionId(paymentIntent.id);
        // now save the transaction in the database
        const payment = {
          email: user.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(),
          cartIds: cart.map((item) => item._id),
          menuItemIds: cart.map((item) => item.menuId),
          status: "panding",
        };
        const res = await axiosSecure.post("/payments", payment);
        // console.log(res.data);
        refetch();
        if(res.data?.paymentResult?.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Thank you for the payment",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/dashboard/paymentHistory')
        }
      }
    }
  };
  //   console.log(clientSecret);
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          iconStyle: "solid",
          style: {
            base: {
              fontSize: "20px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            // padding: "10px 14px", // Custom padding
            // border: "2px solid #970808", // Border styling
            // borderRadius: "4px", // Rounded corners
            // backgroundColor: "#180dae", // Light background color
            invalid: {
              color: "#9e2146",
            },
          },
          hidePostalCode: true, // Hides the postal code field if not needed
        }}
      />
      <div className="my-6 text-center">
        <button
          className="btn btn-md bg-[#570DF8] text-white px-32"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </div>
      <p className="text-red-600 text-center">{error}</p>
      {transactionId && (
        <div className="text-center text-green-600">
          <p>Your transaction ID: {transactionId}</p>
        </div>
      )}
    </form>
  );
};

export default PaymentForm;
