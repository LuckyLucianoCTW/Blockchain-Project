import create from "zustand";
import { setLocalStorage, getLocalStorage } from "../utils";

const defaultProfile = getLocalStorage("User.Auth") || {
  accountKey: "",
  isAdmin: false,
  isAuth: false,
};

const useAuth = create((set) => ({
  ...defaultProfile,
  setProfile: (profile) => {
    setLocalStorage("User.Auth", { ...profile, isAuth: true });
    return set({ ...profile, isAuth: true });
  },
  resetProfile: () => {
    localStorage.clear();
    return set({ ...defaultProfile });
  },
}));

export default useAuth;
