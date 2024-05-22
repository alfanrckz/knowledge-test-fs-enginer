import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../../../libs/api";

export const useLogin =() => {
    const navigate = useNavigate();

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
          console.log('Login response:', response);
      
          if (response.data && response.data.user && response.data.user.id) {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userId', response.data.user.id);
            console.log('userId saved in localStorage:', response.data.user.id);
            navigate('/');
          } else {
            console.error('Invalid response structure:', response);
          }
        } catch (error) {
          console.error('Error storing userId in localStorage:', error);
        }
      };

    return {handleChange, handleLogin}

}