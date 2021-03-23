import { useEffect, useState } from "react";
import { listarSolicitudes } from "../http/api";
import useAuth from "../shared/hooks/useAuth";
export default function Solicitudes() {
  const { userData } = useAuth();
  const [userSolicitudes, setUserSolicitudes] = useState([]);
  useEffect(() => {
    listarSolicitudes(userData.id).then((value) => {
      setUserSolicitudes(value.data);
    });
  }, [userData.id]);
  console.log(userSolicitudes);
  return (
    <div>
      {userSolicitudes.map((value) => {
        return (
          <div>
            <h1>{value.comprador} quiere comprar tu producto!</h1>
            <p>{value.mensajeCompra}</p>
          </div>
        );
      })}
    </div>
  );
}
