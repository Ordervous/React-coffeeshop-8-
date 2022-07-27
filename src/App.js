import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'
import './App.css'
import ProductList from './ProductList'
import ProductForm from './ProductForm'
import ProductDetail from './ProductDetail'
import Navigation from "./Navigation";
import About from "./About";
import ContactUs from "./ContactUs";
import SearchComp from "./SearchComp";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="products" element={<ProductList />} />


          <Route path=":filter/search" element={<SearchComp />} />

          <Route path="view">
            <Route path=":productId" element={<ProductDetail />} />
            <Route path=":productId/edit" element={<ProductForm />} />
          </Route>


          <Route path="new" element={<ProductForm />} />
          {/* <Route path="*" element={<h2>Product Not Found</h2>} /> */}
          <Route path="contactus" element={<ContactUs />} />
        </Route>

        <Route path="*" element={<h1>Adam, where are you?</h1>} />
      </Routes>
    </BrowserRouter>
  );

  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<Home />}>
  //         <Route index element={<h1>Welcome</h1>} />
  //         <Route path="products" element={<ProductList />} >
  //           <Route index element={<p>Select a product for more details</p>} />
  //           <Route path="new" element={<ProductForm />} />
  //           <Route path=":productId/edit" element={<ProductForm />} />
  //           <Route path=":productId" element={<ProductDetail />} />
  //           <Route path="*" element={<h1>Productct Not Found</h1>} />
  //         </Route>
  //       </Route>
  //       <Route path="*" element={<h1>Page Not Found</h1>} />
  //     </Routes>
  //   </BrowserRouter>
  // );
}

export default App;
