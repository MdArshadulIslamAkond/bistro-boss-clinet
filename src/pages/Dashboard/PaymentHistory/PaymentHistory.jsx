import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";
import moment from "moment";

const PaymentHistory = () => {
  const { user } = useAuth();
  const [asc, setAsc] = useState(true);
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email, asc],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/payments?email=${user?.email}&sort=${asc ? "asc" : "desc"}`
      );
      return res.data;
    },
  });
  return (
    <div className="mx-40">
      <div className="text-center">
        <button
          onClick={() => {
            setAsc(!asc);
            // refetch();
          }}
          className="my-4 btn bg-[#E8E8E8] border-0 border-b-4 border-[#D1A054] text-[#D1A054]"
        >
          {asc ? "Price: High to Low" : "Price: Low to High"}
        </button>
      </div>
      <h2 className="text-3xl my-6">Total Payments: {payments.length}</h2>
      <section>
        <div className="overflow-x-auto w-full rounded-t-lg">
          <table className="table table-zebra ">
            {/* head */}
            <thead className="bg-[#D1A054] text-white border-black">
              <tr>
                <th>EMAIL</th>
                <th>CATEGORY</th>
                <th>TOTAL PRICE</th>
                <th>PAYMENT DATE</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => {
                return (
                  <tr key={payment._id}>
                    <td>{payment.email}</td>
                    {/* <td>{payment.category}</td> */}
                    <td>$ {payment.price}</td>
                    <td>{moment(payment.date).format('dddd MMM DD YYYY')}</td>
                    <td>{payment.status}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default PaymentHistory;
