import { ChangeEvent, useEffect, useRef, useState } from "react";
import { API } from "../../../libs/api";
import { IProduct } from "../../../interface/product";
import { useFetchProduct } from "./useFetchProduct";
import { useNavigate } from "react-router-dom";
import { useToast } from '@chakra-ui/react'

export function useProducts() {
  const toast = useToast()
  const [form, setForm] = useState({
    name: "",
    price: 0,
    description: "",
    image: "",
  });
  const [products, setProducts] = useState<IProduct[]>([]);
  const [productUser, setProductUser] = useState<IProduct[]>([])
  const {refetch} = useFetchProduct()
  const navigate = useNavigate()

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value, files } = event.target;
    console.log(event.target.value)
    if (files) {
      setForm({
        ...form,
        [name]: files[0],
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  }

  async function getProducts() {
    try {
      const response = await API.get("/products");
      setProducts(response.data);
      // console.log('getData', response);
    } catch (error) {
      console.log(error);
    }
  }

  async function getProduct(id: number){
    try {
      const response = await API.get(`/product/${id}`);
      setProductUser(response.data);
      console.log("ini product user",response.data)
    } catch (error) {
      console.log(error);
    }
  }

  async function handlePost(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const formdata = new FormData();
      formdata.append("name", form.name);
      formdata.append("price", form.price.toString());
      formdata.append("description", form.description);
      formdata.append("image", form.image);
      const response = await API.post("/product", formdata, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(response);
      setForm({
        name: "",
        price: 0,
        description: "",
        image: "",
      });
      getProducts();
      toast({
        title: 'Product Created',
        description: "Product has been created.",
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: "bottom-left"
      })
      navigate("/")
    } catch (error) {
      toast({
        title: 'Create Product Error',
        description: "Something went wrong. Please try again.",
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: "bottom-left"
      })
      console.log(error);
    }
  }

  async function deleteProduct(id: number) {
    try {
      const response = await API.delete(`/product/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      toast({
        title: 'Delete Product Success',
        description: "Product has been deleted.",
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: "bottom-left"
      })
      console.log(response);
      refetch(); 
    } catch (error) {
      console.log(error); 
    }
  }
  useEffect(() => {
    getProducts();
  }, []);

  async function updateProduct(id: number, form: { name: string; price: number; description: string; image: File }) {
    try {
      if (!form.name) {
        return alert('Input name');
      } else if (!form.price) {
        return alert('Input price');
      } else if (!form.description) {
        return alert('Input description');
      } else if (!form.image) {
        return alert('Input image');
      }
  
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("price", form.price.toString());
      formData.append("description", form.description);
      formData.append("image", form.image);
  
      console.log('Form Data:', formData);
  
       await API.patch(`/product/${id}`, formData, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      toast({
        title: 'Product Updated',
        description: "Product has been Updated.",
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: "bottom-left"
      })
      // console.log('Response:', response);
    
      refetch();
  
    } catch (error) {
      console.error('Error:', error);
      
    }
  }
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleButtonClick() {
    fileInputRef.current?.click();
  }

  return {
    handleChange,
    handlePost,
    form,
    fileInputRef,
    handleButtonClick,
    deleteProduct,
    getProducts,
    products,
    getProduct,
    productUser,
    updateProduct
  };
}
