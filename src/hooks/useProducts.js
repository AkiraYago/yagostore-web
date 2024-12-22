import { useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getAllProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const products = await res.json();
      setProducts(products);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  const getProductsByCategory = async (category) => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const products = await res.json();
      const filteredProducts = products.filter(product => product.category === category);
      setProducts(filteredProducts);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  }

  return {
    products,
    loadingProducts: loading,
    errorProducts: error,
    getAllProducts,
    getProductsByCategory,
  }
};

export default useProducts;