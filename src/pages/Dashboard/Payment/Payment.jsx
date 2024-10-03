import { loadStripe } from "@stripe/stripe-js";
import SectionTaitle from "../../../components/SectionTaitle/SectionTaitle";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";


// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    return (
        <div>
            <SectionTaitle heading='PAYMENT' subHeading='Please pay to eat' />
            <div>
                <Elements stripe={stripePromise}>
                    <PaymentForm />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;