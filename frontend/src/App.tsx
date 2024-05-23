import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import { ProductForm } from './features/products/components/ProductForm';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import MyProduct from './pages/MyProduct';
import Profile from './pages/Profile';
import { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const toast = useToast();

  const checkLogin = () => {
    const authData = localStorage.getItem("token");
    const protectedPaths = ['/add-product', '/my-product', '/my-profile'];
    if (!authData && protectedPaths.includes(location.pathname)) {
      toast({
        title: 'Please Login First',
        description: "You need to be logged in to access this page.",
        status: 'warning',
        duration: 3000,
        isClosable: true,
        position: "bottom-left"
      });
      navigate("/login");
    }
  };

  useEffect(() => {
    checkLogin();
  },); 

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-product' element={<ProductForm />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/my-product' element={<MyProduct />} />
        <Route path='/my-profile' element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
