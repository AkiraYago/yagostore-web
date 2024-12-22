import { create } from "zustand";

const useCategoriesStore = create((set) => ({
  categories: [],
  categorySelected: "All Products",
  getAllCategories: async() => {
    try {
      const res = await fetch("https://fakestoreapi.com/products/categories");
      const data = await res.json();

      set({
        categories: data
      })
    } catch (error) {
      // No existen categorias
    }
  },
  setCategorySelected: (categorySelected) => set({
    categorySelected: categorySelected
  })
}));

export default useCategoriesStore;