import React from "react";
import decodeTokenData from "../utils/decodeToken";
import { useState } from "react";
import { login, signUpApi } from "../../http/api";
import { useHistory } from "react-router-dom";

// 1 Creamos el contexto y exportamos para usar en el hook
export const AuthContext = React.createContext();
const AuthContextProvider = AuthContext.Provider;

// 2 Recuperamos el token del localStorage
const token = localStorage.getItem("token");
const tokenObject = decodeTokenData(token);

// 3 Creamos un custom provider
export function AuthProvider({ children }) {
  const [userData, setUserData] = useState(tokenObject);
  const [isUserLogged, setIsUserLogged] = useState(!!tokenObject);
  const history = useHistory();

  // Método para hacer log in desde los componentes
  const signIn = async (email, contraseña) => {
    const loginData = await login(email, contraseña);
    localStorage.setItem("token", loginData);
    const tokenObject = decodeTokenData(loginData);
    setUserData(tokenObject);
    if (tokenObject === 1) {
      setIsUserLogged(true);
    } else {
      setIsUserLogged(false);
    }
    history.push("/");
  };

  //Método para registrarte
  const signUp = async (data) => {
    const signUpData = await signUpApi(data);
    console.log(signUpData);
    history.push("/");
  };

  // Método que borra las credenciales del localStorage y del state
  const logOut = () => {
    localStorage.removeItem("token");
    history.push("/login");
    setUserData(null);
  };

  // 4 devolvemos el provider metiendole dentro los children
  return (
    <AuthContextProvider
      value={{ isUserLogged, userData, signIn, logOut, signUp }}
    >
      {children}
    </AuthContextProvider>
  );
}
