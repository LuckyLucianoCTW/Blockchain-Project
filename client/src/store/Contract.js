import create from "zustand";

const useContract = create((set) => ({
  contract: undefined,
  web3: window.web3,
  setContract: (contract) => set({ contract }),
}));

export default useContract;
