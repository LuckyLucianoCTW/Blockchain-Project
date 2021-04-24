import create from "zustand";

const emptyProfile = {
  accountKey: "",
  isAdmin: false,
  isAuth: false,
};

const ownerAddress = "0x6392570c47c6893ace024Bb68A4ca13cC0189859";

const useAuth = create((set) => ({
  setProfile: (accountKey) => {
    const newUser = {
      accountKey,
      isAdmin: accountKey === ownerAddress,
      isAuth: true,
    };
    return set(newUser);
  },
  resetProfile: () => {
    localStorage.clear();
    return set({ ...emptyProfile });
  },
}));

export default useAuth;
