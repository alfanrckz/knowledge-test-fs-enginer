import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../../../libs/api";
import { useToast } from '@chakra-ui/react'

export function useRegister() {
  const toast = useToast()
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
  });

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  async function handleRegister() {
    try {
      const response = await API.post("/register", form);
      console.log("register done!!", response);
      toast({
        title: 'Register Success',
        description: "We've created your account for you.",
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: "bottom-left"
      })
      navigate("/login");
    } catch (error) {
      toast({
        title: 'Register Error',
        description: "Something went wrong. Please try again.",
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: "bottom-left"
      })
      console.log(error);
    }
  }
  return { handleChange, handleRegister };
}
