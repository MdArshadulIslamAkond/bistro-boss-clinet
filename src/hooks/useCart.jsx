import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useCart = (asc) => {
  // tan stack query
  const asiosSecure = useAxiosSecure();
  const {user, loading} = useAuth();
  const {refetch, data: cart = []} = useQuery({
    queryKey: ['cart', user?.email, asc],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const response = await asiosSecure.get(`/carts?email=${user?.email}&sort=${asc ? 'asc' : 'desc'}`);
      return response.data;
    },
  })
  return [cart, refetch];
};

export default useCart;