import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

export const FormLogin = () => {
  const {handleChange, handleLogin} = useLogin()
  return (
    <FormControl width={"360px"} style={{ color: "white" }}>
      <Heading style={{ marginBottom: 50, fontSize: 28, textAlign: "center" }}>
        Login To Your Account
      </Heading>
      <FormLabel>Email address</FormLabel>
      <Input type="email" name="email" onChange={handleChange} />
      <FormLabel>Password</FormLabel>
      <Input type="password" name="password" onChange={handleChange} />
      <Button
        width={"100%"}
        backgroundColor={"blue.800"}
        colorScheme="green"
        color={"white"}
        marginTop={5}
        onClick={handleLogin}
      >
        Login
      </Button>
      <Box textAlign="center" display="flex" gap={2}>

      <Text>Don't have account?</Text>
      <Link to={"/register"}>
        <Text _hover={{ color: "blue.800" }}>Create account</Text>
      </Link>
      </Box>
    </FormControl>
  );
};
