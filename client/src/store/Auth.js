import create from "zustand";

const defaultProfile = {
  accountKey: "",
  role: "",
  isAuth: false,
};

const useAuth = create((set) => ({
  accountKey: "",
  role: "",
  isAuth: false,
  setProfile: (profile) => set({ ...profile, isAuth: true }),
  resetProfile: () => set({ ...defaultProfile }),
}));

export default useAuth;
