import create from "zustand";
import { setLocalStorage, getLocalStorage } from "../utils";

const emptyProfile = {
  accountKey: "",
  isAdmin: false,
  isAuth: false,
};

const defaultProfile = getLocalStorage("User.Auth") || emptyProfile;

const useAuth = create((set) => ({
  ...defaultProfile,
  setProfile: (profile) => {
    setLocalStorage("User.Auth", { ...profile, isAuth: true });
    return set({ ...profile, isAuth: true });
  },
  resetProfile: () => {
    localStorage.clear();
    return set({ ...emptyProfile });
  },
}));

export default useAuth;
