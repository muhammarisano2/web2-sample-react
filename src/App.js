import React, {Fragment} from "react";
import {BrowserRouter, Routes, Route, NavLink, Link, Navigate} from 'react-router-dom'
import Button from "./components/ButtonCounter";
import Counter from "./components/Counter";
import DetailProduct from "./pages/DetailProduct";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";


function App() {
  // let nilaiSaya = 80
  const hanldeClick = ()=>{
    alert('hello world')
  }
  return (
    <BrowserRouter>
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/product">Product</NavLink></li>
        <li><NavLink to="/productlist">Product List</NavLink></li>
        <li><NavLink to="/product/1">product detail</NavLink></li>
      </ul>
    </nav>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace="true"/>}/>
        <Route path="/productlist" element={<ProductList/>} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/product/:id" element={<DetailProduct/>}/>
        <Route path="*" element={<Page404/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
