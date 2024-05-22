import {
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    Divider,
    Flex,
    Heading,
    Image,
    Stack,
    Text
  } from "@chakra-ui/react";
  import { FaTrash } from "react-icons/fa";
  import { IProduct } from "../../../interface/product";
  import { useProducts } from "../hooks/useProduct";
  import ModalUpdateProduct from "./ModalUpdateProduct";
  
  const MyProductCard = (props: IProduct) => {
    const { deleteProduct } = useProducts();
  
    const handleDeleteClick = async (id: number) => {
      await deleteProduct(id);
    };
  
    return (
      <Card maxW="sm" bg={"gray.900"} color={"white"}>
        <CardBody>
          <Flex alignContent="center" justifyContent="center">
            <Image
              src={props.image}
              alt="Product Image"
              borderRadius="lg"
              h="250px"
              w="300px"
              alignContent="center"
              
            />
          </Flex>
          <Stack mt="1" spacing="3">
            <Heading size="md">{props.name}</Heading>
            <Text>{props.description}</Text>
            <Text color="blue.600" fontSize="2xl">
              ${props.price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
        <Flex justifyContent="center" alignItems="center" width="100%">
            <ButtonGroup gap={5}>
              <ModalUpdateProduct data={props}/>
              <Button
                variant="solid"
                colorScheme="red"
                leftIcon={<FaTrash />}
                onClick={() => handleDeleteClick(props.id)}
              >
                Delete
              </Button>
            </ButtonGroup>
          </Flex>
        </CardFooter>
      </Card>
    );
  };
  
  export default MyProductCard;
  