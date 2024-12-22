import React, { useState } from 'react'

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getAllCategories = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products/categories");
      const categories = await res.json();

      setCategories(categories);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  }

  return {
    categories,
    loadingCategories: loading,
    errorCategories: error,
    getAllCategories,
  }
}

export default useCategories