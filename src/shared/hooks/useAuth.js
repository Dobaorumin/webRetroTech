import { AuthContext } from "../context/authContext";
import { useContext } from "react";

//Creo un hook para acceder al context
export default function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
