import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

/* ALL PAGES */
import Home from "../pages/home";
import Products from "../pages/products";
import Info from "../pages/info";
import Dynamic from "../pages/dynamic";
import Basket from "../pages/basket";
import Login from "../pages/login";

function Router() {
  const [sepetData, setSepetData] = useState([])
  const [sepetGetir, setSepetGetir] = useState([])

  const change = (deger) => {
    setSepetData(deger)
  }


  const sepet = (urun) => {
    setSepetGetir(urun)
  }
  
  console.log("sepetGetir",sepetGetir);




  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products sepett={sepet} change={change}/>} />
        <Route path="/info" element={<Info />} />
        <Route path="/products/:id" element={<Dynamic />} /> 
        <Route path="/basket" element={<Basket sepetData={sepetData}/>} />    
        <Route path="/login" element={<Login />} />     
        <Route path="*" element={<div>böyle bir sayfa yok</div>} />
      </Routes>
    </>
  );
}

export default Router;
