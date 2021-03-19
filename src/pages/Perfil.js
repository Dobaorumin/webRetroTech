import useAuth from "../shared/hooks/useAuth";
import { useEffect, useState } from "react";
import { getUserInfo } from "../http/api";
//Endpoint Listo ✔️

export default function Categorias() {
  const { userData } = useAuth();
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    getUserInfo(userData.id).then((value) => {
      setUserInfo(value);
    });
  }, [userData.id]);
  return (
    <div>
      <h3>{userInfo.nombre}</h3>
      <h3>{userInfo.pais}</h3>
      <h3>{userInfo.email}</h3>
      <h3>{userInfo.rol}</h3>
      <h3>{userInfo.fechaNacimiento}</h3>
      <h3>{userInfo.codigoPostal}</h3>
      <h3>{userInfo.ciudad}</h3>
      <h3>{userInfo.apellidos}</h3>
    </div>
  );
}
