import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../../../libs/api";
import { useToast } from '@chakra-ui/react'

export const useLogin =() => {
    const navigate = useNavigate();
    const toast = useToast()
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    function handleChange(event: ChangeEvent<HTMLInputElement> ) {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        })
    }

    const handleLogin = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
          const response = await API.post('/login', form);
          // console.log('Login response:', response);
          if (response.data && response.data.user && response.data.user.id) {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userId', response.data.user.id);
            localStorage.setItem('name', response.data.user.name);
            localStorage.setItem('email', response.data.user.email);
            localStorage.setItem('gender', response.data.user.gender);
            toast({
              title: 'Login Success',
              description: "We've created your account for you.",
              status: 'success',
              duration: 4000,
              isClosable: true,
              position: "bottom-left"
            })
            navigate('/');
          } else {
            console.error('Invalid response structure:', response);
          }
        } catch (error) {
          toast({
            title: 'Login Error',
            description: "Something went wrong. Please try again.",
            status: 'error',
            duration: 4000,
            isClosable: true,
            position: "bottom-left"
          })
          console.error('Error storing userId in localStorage:', error);
        }
      };

    return {handleChange, handleLogin}

}