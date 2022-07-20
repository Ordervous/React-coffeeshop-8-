import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'
import ProductList from './ProductList'
import NewProduct from './NewProduct'
import EditProduct from './EditProduct'
import ProductDetail from './ProductDetail'



// yay my code is back that was scary
function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
      <Route index element={<h1>Welcome</h1>} />
          <Route path="products" element={<ProductList />} >
            <Route index element={<p>Select a product for more details</p>} />
            <Route path="new" element={<NewProduct />} />
            <Route path=":productId/edit" element={<EditProduct />} />
            <Route path=":productId" element={<ProductDetail />} />
            <Route path="*" element={<h1>Productct Not Found</h1>} />
          </Route>
      </Route>
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
