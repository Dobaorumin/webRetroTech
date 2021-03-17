import { useState } from "react";
import { useForm } from "react-hook-form";
import "../css/App.css";
export default function RegisterForm() {
  const { handleSubmit, register, errors } = useForm();
  const [enviando, setEnviando] = useState(false);
  const [serverError, setServerError] = useState([]);
  const [message, setMessage] = useState([]);
  return (
    <section className="page">
      <h1>Regístrate</h1>
      <form
        onSubmit={handleSubmit(async (formData) => {
          setEnviando(true);
          setServerError([]);
          const response = await fetch("http://localhost:3001/usuarios", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userName: formData.userName,
              nombre: formData.nombre,
              apellidos: formData.apellidos,
              ciudad: formData.ciudad,
              pais: formData.pais,
              codigoPostal: formData.codigoPostal,
              fechaNacimiento: formData.fechaNacimiento,
              email: formData.email,
              contraseña: formData.contraseña,
            }),
          });
          const data = await response.json();
          if (data.errors) {
            setServerError(data.errors);
          } else {
            console.log("succes,redirect to home page");
          }
          setMessage(data);
          setEnviando(false);
          console.log(serverError);
        })}
      >
        {message ? (
          <ul>
            {message.map((value) => (
              <li>
                {console.log(value)}
                {value.message}
              </li>
            ))}
          </ul>
        ) : null}
        {serverError ? (
          <ul>
            {serverError.map((error) => (
              <li className="error" key={error}>
                {error}
              </li>
            ))}
          </ul>
        ) : null}
        <div>
          <label htmlFor="userName">Nombre de Usuario:</label>
          <input
            type="text"
            name="userName"
            id="userName"
            ref={register({
              required: "Este campo es obligatorio",
            })}
          />
          {errors.userName ? (
            <div className="error">{errors.userName.message}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            ref={register({
              required: "Este campo es obligatorio",
            })}
          />
          {errors.nombre ? (
            <div className="error">{errors.nombre.message}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="apellidos">Apellido:</label>
          <input
            type="text"
            name="apellidos"
            id="apellidos"
            ref={register({
              required: "Este campo es obligatorio",
            })}
          />
          {errors.apellidos ? (
            <div className="error">{errors.apellidos.message}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="ciudad">Ciudad:</label>
          <input
            type="text"
            name="ciudad"
            id="ciudad"
            ref={register({
              required: "Este campo es obligatorio",
            })}
          />
          {errors.ciudad ? (
            <div className="error">{errors.ciudad.message}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="pais">País</label>
          <input
            type="country"
            name="pais"
            id="pais"
            ref={register({
              required: "Este campo es obligatorio",
            })}
          />
          {errors.pais ? (
            <div className="error">{errors.pais.message}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="codigoPostal">Código Postal:</label>
          <input
            type="text"
            name="codigoPostal"
            pattern="[0-9]{5}"
            id="codigoPostal"
            ref={register({
              required: "Este campo es obligatorio",
            })}
          />
          {errors.codigoPostal ? (
            <div className="error">{errors.codigoPostal.message}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
          <input
            type="date"
            name="fechaNacimiento"
            id="fechaNacimiento"
            ref={register({
              required: "Este campo es obligatorio",
            })}
          />
          {errors.fechaNacimiento ? (
            <div className="error">{errors.fechaNacimiento.message}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="email">Correo:</label>
          <input
            type="email"
            name="email"
            id="email"
            ref={register({
              required: "Este campo es obligatorio",
            })}
          />
          {errors.email ? (
            <div className="error">{errors.email.message}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="contraseña">Contraseña:</label>
          <input
            type="password"
            name="contraseña"
            id="contraseña"
            ref={register({
              required: "Este campo es obligatorio",
            })}
          />
          {errors.contraseña ? (
            <div className="error">{errors.contraseña.message}</div>
          ) : null}
        </div>
        <div>
          <button type="submit" disabled={enviando}>
            Registrate
          </button>
        </div>
      </form>
    </section>
  );
}
