import create from "zustand";

const useContract = create((set) => ({
  contract: undefined,
  setContract: (contract) => set({ contract }),
}));

export default useContract;
