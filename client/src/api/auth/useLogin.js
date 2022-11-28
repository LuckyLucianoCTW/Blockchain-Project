import { useAuth } from "../../store";

export default function useLogin() {
  const { setProfile } = useAuth();

  const login = (accountKey) => {
    const isAdmin = accountKey === "admin";
    setProfile({
      accountKey,
      isAdmin,
      isAuth: true,
    });
  };

  return [login];
}
