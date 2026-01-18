// frontend/src/hooks/useAuth.js
import { useAuth } from "../contexts/AuthContext";

export default function useAuthHook() {
  const { user, login, logout } = useAuth();

  return {
    user,
    isLoggedIn: !!user,
    login,
    logout
  };
}
