import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  IconButton,
} from "@chakra-ui/react";
import { FaUpload } from "react-icons/fa";
import SideBar from "../../../components/SideBar";
import { useProducts } from "../hooks/useProduct";

export const ProductForm = () => {
  const { handleChange, handlePost, form, fileInputRef } = useProducts();
  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

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
            <Box display="flex" alignItems="center">
              <Input
                type="file"
                name="image"
                onChange={handleChange}
                ref={fileInputRef}
                display="none"
              />
              <IconButton
                icon={<FaUpload />}
                aria-label="Upload Image"
                onClick={handleFileClick}
                border="1px solid"
                borderColor="gray.200"
                borderRadius="md"
                _hover={{ bg: "gray.100" }}
              />
              <Input
                type="text"
                value={form.image}
                readOnly
                ml={2}
                placeholder="No file chosen"
              />
            </Box>
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
