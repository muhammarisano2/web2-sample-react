import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from '../../pages/auth/Login'
import Register from '../../pages/auth/Register'
import Counter from '../../pages/Counter'
import DetailProduct from '../../pages/DetailProduct'
import Home from '../../pages/Home'
import Page404 from '../../pages/Page404'
import Product from '../../pages/Product'
import ProductList from '../../pages/ProductList'
import RequireAuth from '../../components/base/RequireAuth'
import Todo from '../../pages/Todo'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace="true"/>}/>
      <Route path="/productlist" element={<ProductList/>} />
      <Route path="/home" element={<RequireAuth> <Home/></RequireAuth>}/>
      <Route path="/product" element={ <RequireAuth><Product/></RequireAuth>}/>
      <Route path="/product/:id" element={<DetailProduct/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/counter" element={<Counter/>}/>
      <Route path="/todo" element={<Todo/>}/>
      <Route path="*" element={<Page404/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default Router