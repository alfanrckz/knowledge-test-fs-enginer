import {
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
import { IProduct } from "../../../interface/product";

const ProductCard = (props: IProduct) => {
  return (
    <Card w={"340px"} bg={"gray.900"} color={"white"}>
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
          <Text ml={2} textTransform="capitalize" color="gray.500">Created By: {props.created_by.name}</Text>
      <CardFooter>
     
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
