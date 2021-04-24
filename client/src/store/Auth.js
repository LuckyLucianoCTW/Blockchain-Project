import create from "zustand";
import { setLocalStorage, getLocalStorage } from "../utils";

const emptyProfile = {
  accountKey: "",
  isAdmin: false,
  isAuth: false,
};

const defaultProfile = getLocalStorage("User.AccountKey") || emptyProfile;

const useAuth = create((set) => ({
  ...defaultProfile,
  setProfile: (accountKey) => {
    console.log("AccountKey", accountKey);
    setLocalStorage("User.AccountKey", accountKey);
    const newUser = { accountKey, isAdmin: false, isAuth: true };
    return set(newUser);
  },
  resetProfile: () => {
    localStorage.clear();
    return set({ ...emptyProfile });
  },
}));

export default useAuth;
