import create from "zustand";

const useProducts = create((set) => ({
  products: [],
  setProducts: (products) => set((state) => ({ ...state, products })),
}));

export default useProducts;
