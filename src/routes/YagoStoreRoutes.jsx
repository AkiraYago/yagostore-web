import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";

const YagoStoreRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/products/:productId" element={ <ProductDetails /> } />
        <Route path="/cart" element={ <Cart /> } />
      </Routes>
    </BrowserRouter>
  );
};

export default YagoStoreRoutes;