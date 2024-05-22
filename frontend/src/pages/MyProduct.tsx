import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import MyProductCard from "../features/products/components/MyProductCard";
import { useFetchProduct } from "../features/products/hooks/useFetchProduct";
import { IProduct } from "../interface/product";

const MyProduct = () => {
  const { data, isFetched } = useFetchProduct();
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      setUserId(userId);
    } else {
      console.error('User ID not found in localStorage');
    }
  }, []);

  return (
    <>
      <SideBar />
      <Box display="flex" flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
        <Text fontSize={30}>My Product</Text>
        {isFetched && userId && (
          <Box mt={20} mb={5} flex="1" display="flex" flexWrap="wrap" gap={5}>
            {data
              .filter((item: IProduct) => item.created_by.id.toString() === userId)
              .map((item: IProduct) => (
                <MyProductCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                  created_by={item.created_by}
                />
              ))}
            {data
              .filter((item: IProduct) => item.created_by.id.toString() === userId)
              .length === 0 && <Text fontSize={30}>You don't have a product yet!</Text>}
          </Box>
        )}
      </Box>
    </>
  );
};

export default MyProduct;
