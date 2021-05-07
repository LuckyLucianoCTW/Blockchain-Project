import create from "zustand";

const emptyProfile = {
  accountKey: "",
  isAdmin: false,
  isAuth: false,
};

const ownerAddress = "0x4A0cc881d57b786E7F0B4AA0ac6E057f415648E6";

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
