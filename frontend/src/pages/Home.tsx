import { Box } from "@chakra-ui/react";
import SideBar from "../components/SideBar";
import ProductCard from "../features/products/components/PoductCard";
// import { useProducts } from "../features/products/hooks/useProduct";
import { useFetchProduct } from "../features/products/hooks/useFetchProduct";
import { IProduct } from "../interface/product";

const Home = () => {
  const { data, isFetched } = useFetchProduct();
  return (
    <Box display="flex">
      <SideBar />
      <Box mt={20} mb={5} flex="1" display="flex" flexWrap="wrap" gap={5}>
        {isFetched &&
          data.map((item: IProduct) => {
            return (
              <ProductCard
                key={item.id}
                id={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                created_by={item.created_by}
              />
            );
          })}
      </Box>
    </Box>
  );
};

export default Home;
