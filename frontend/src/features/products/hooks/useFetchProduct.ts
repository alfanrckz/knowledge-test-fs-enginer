import { useQuery } from "react-query";
import { API } from "../../../libs/api";

export const useFetchProduct = () => {
  return useQuery({
    queryFn: async () => {
      const response = await API.get("/products");
      // console.log('react-query',response.data)
      return response.data;
    },
  });
};

// export const useFetchProductById = (id: number) => {
//   return useQuery({
//     queryFn: async () => {
//       const response = await API.get(`/product/${id}`);
//       return response.data;
//     },
//   });
// };
