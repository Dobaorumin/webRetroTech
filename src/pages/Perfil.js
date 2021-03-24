import useAuth from "../shared/hooks/useAuth";
import { useEffect, useState } from "react";
import { editUserInfo, getUserInfo } from "../http/api";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import Solicitudes from "../components/Solicitudes";
//Endpoint Listo ✔️

export default function Perfil() {
  const { userData, signOut, setIsUserLogged } = useAuth();
  const [userInfo, setUserInfo] = useState([]);
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  useEffect(() => {
    getUserInfo(userData.id).then((value) => {
      setUserInfo(value);
    });
  }, [userData.id]);
  const onSubmit = async (editData) => {
    await editUserInfo(
      userData.id,
      editData.nombre,
      editData.apellidos,
      editData.localidad,
      editData.email,
      editData.pais,
      editData.ciudad
    );
    setIsUserLogged(false);
    signOut();
    history.push("/login");
  };
  return (
    <div className="page">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="nombre">Nombre: </label>
          <input
            id="nombre"
            type="text"
            name="nombre"
            ref={register()}
            placeholder={userInfo.nombre}
          />
          <label htmlFor="apellidos">apellidos: </label>
          <input
            id="apellidos"
            type="text"
            name="apellidos"
            ref={register()}
            placeholder={userInfo.apellidos}
          />
          <label htmlFor="fechaNacimiento">fecha de Nacimiento: </label>
          <input
            id="fechaNacimiento"
            type="text"
            name="fechaNacimiento"
            ref={register()}
            placeholder={userInfo.fechaNacimiento}
          />
          <label htmlFor="codigoPostal">codigo Postal: </label>
          <input
            id="codigoPostal"
            type="text"
            name="codigoPostal"
            ref={register()}
            placeholder={userInfo.codigoPostal}
          />
          <label htmlFor="ciudad">ciudad: </label>
          <input
            id="ciudad"
            type="text"
            name="ciudad"
            ref={register()}
            placeholder={userInfo.ciudad}
          />
          <label htmlFor="email">email: </label>
          <input
            id="email"
            type="text"
            name="email"
            ref={register()}
            placeholder={userInfo.email}
          />
        </div>
        <button type="submit">Cambiar información</button>
      </form>
      <div>
        <Link to="/solicitudes">Solicitudes</Link>
      </div>
    </div>
  );
}
