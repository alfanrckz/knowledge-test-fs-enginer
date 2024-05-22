import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../../../libs/api";

export function useRegister() {
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
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }
  return { handleChange, handleRegister };
}
