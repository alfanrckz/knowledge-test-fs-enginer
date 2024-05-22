import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import { useRegister } from "../hooks/useRegister";
import { Link } from "react-router-dom";

export const FormRegister = () => {
  const { handleChange, handleRegister } = useRegister();
  return (
    <FormControl width={"350px"} style={{ color: "white" }}>
      <Heading style={{ marginBottom: 50, fontSize: 28, textAlign: "center" }}>
        Create Your Account
      </Heading>
      <FormLabel>Your name</FormLabel>
      <Input type="text" name="name" onChange={handleChange} />
      <FormLabel>Email address</FormLabel>
      <Input type="email" name="email" onChange={handleChange} />
      <FormLabel>Password</FormLabel>
      <Input type="password" name="password" onChange={handleChange} />
      <FormLabel>Gender</FormLabel>
      <Select name="gender" onChange={handleChange}>
        <option style={{ backgroundColor: "#242424" }} value="male">
          Male
        </option>
        <option style={{ backgroundColor: "#242424" }} value="female">
          Female
        </option>
      </Select>
      <Button
        width={"100%"}
        backgroundColor={"blue.800"}
        colorScheme="green"
        color={"white"}
        marginTop={5}
        onClick={handleRegister}
      >
        Create
      </Button>
      <Box textAlign="center" display="flex" gap={2}>
        <Text>Have an account?</Text>
        <Link to={"/login"}>
          <Text _hover={{ color: "blue.800" }}>Login</Text>
        </Link>
      </Box>
    </FormControl>
  );
};
