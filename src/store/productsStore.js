import { create } from "zustand";

const useProductsStore = create((set, get) => ({
  products: [],
  productFound: {},
  loading: true,
  error: null,
  searching: false,
  getAllProducts: async () => {
    try {
      set({ loading: true });
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      set({
        products: data,
        loading: false,
      });
    } catch (error) {
      set({
        error: error,
      })
    }
  },
  getProductsByCategory: async (category) => {
    try {
      set({ loading: true });
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      const filteredProducts = data.filter(product => product.category === category);
      set({
        products: filteredProducts,
        loading: false,
      });
    } catch (error) {
      set({
        error: error,
      })
    }
  },
  sort: (order) => {
    const productsAux = get().products.map(product => ({ ...product, price: Number(product.price) }));
    let sortedProducts = [];

    if (order === "asc") {
      sortedProducts = productsAux.sort((productA, productB) => productA.price - productB.price);
    } else {
      sortedProducts = productsAux.sort((productA, productB) => productB.price - productA.price);
    }

    set({
      products: sortedProducts
    })
  },
  findProductsByKeyword: async (keyword) => {
    try {
      set({ loading: true, searching: true });
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      const productsFound = data.filter(product => product.title.toLowerCase().includes(keyword));

      set({
        products: productsFound,
        loading: false,
        searching: false,
      });
    } catch (error) {
      set({
        error: error,
      })
    }
  },
  findProductById: async (id) => {
    try {
      set({ loading: true });
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      const productFound = data.find(product => product.id === id);

      set({
        productFound: productFound,
        loading: false,
      });
    } catch (error) {
      set({
        error: error,
      })
    }
  },
  clearProductFound: () => set({ productFound: {} })
}));

export default useProductsStore;