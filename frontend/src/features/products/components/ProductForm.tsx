import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input
} from "@chakra-ui/react";
import SideBar from "../../../components/SideBar";
import { useProducts } from "../hooks/useProduct";

export const ProductForm = () => {
  const { handleChange, handlePost, form, fileInputRef } = useProducts();
  return (
    <>
      <SideBar />
      <Box
        display={"flex"}
        alignContent={"center"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <form onSubmit={handlePost} encType="multipart/form-data">
          <FormControl width={"360px"} style={{ color: "white" }}>
            <Heading
              style={{ marginBottom: 50, fontSize: 28, textAlign: "center" }}
            >
              Create Your Product
            </Heading>

            <FormLabel>Product Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
            <FormLabel>Price</FormLabel>
            <Input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
            />
            <FormLabel>Description</FormLabel>
            <Input
              type="text"
              name="description"
              value={form.description}
              onChange={handleChange}
            />
            <FormLabel>Image</FormLabel>
     

            <Input
              type="file"
              name="image"
              onChange={handleChange}
              ref={fileInputRef}
              />
   
            <Button
              width={"100%"}
              backgroundColor={"blue.800"}
              colorScheme="green"
              color={"white"}
              marginTop={5}
              type="submit"
            >
              Create
            </Button>
          </FormControl>
        </form>
      </Box>
    </>
  );
};
