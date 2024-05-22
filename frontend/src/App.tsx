import { Route, Routes } from 'react-router-dom'
import './App.css'
import { ProductForm } from './features/products/components/ProductForm'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import MyProduct from './pages/MyProduct'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/add-product' element={<ProductForm/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/my-product' element={<MyProduct/>}/>
    </Routes>
    </>
  )
}

export default App
