import { create } from "zustand";
import LOCAL_STORAGE_KEY from "../utils/consts/localStorageKey";
import mergeObjects from "../helpers/mergeObjects";
import truncValue from "../helpers/truncValue";

const useCartProductsStore = create((set, get) => ({
  cartProducts: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [],
  subtotal: 0,
  addProductsOnCart: (newProduct) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(mergeObjects([...get().cartProducts, newProduct])));
    set({
      cartProducts: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    })
  },
  updateQuantity: (productId, newQuantity) => {
    const productsOnCartUpdated = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)).map(product => product.id === productId ? { ...product, quantity: newQuantity } : product)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(productsOnCartUpdated))
    set({
      cartProducts: productsOnCartUpdated
    })
  },
  setSubtotal: () => {
    const productsOnStorage = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (productsOnStorage) {
      const productsFinalPrices = JSON.parse(productsOnStorage).map(product => product.quantity * product.price);
      const subtotal = truncValue(productsFinalPrices.reduce((accum, currentValue) => accum + currentValue, 0));
      set({
        subtotal: subtotal
      })
    } else {
      set({
        subtotal: 0
      })
    }
  },
  deleteProductById: (productId) => {
    const productsOnStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    const newCartProducts = productsOnStorage.filter(product => product.id !== productId);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newCartProducts));
    set({
      cartProducts: newCartProducts
    })
  },
  deleteAllProducts: () => {
    localStorage.clear();
    set({
      cartProducts: []
    })
  },
}));

export default useCartProductsStore;