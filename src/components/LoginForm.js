import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../shared/hooks/useAuth";

export default function LoginForm() {
  const { signIn } = useAuth();
  const { handleSubmit, errors, register } = useForm();

  const onSubmitLogin = (data) => {
    signIn(data.email, data.contraseña);
  };

  return (
    <section className="page">
      <h1>Inicia Sesión</h1>
      <form onSubmit={handleSubmit(onSubmitLogin)}>
        <label htmlFor="email">Email:</label>
        {Error.email && <p className="error">Usuario incorrecto</p>}
        <input id="email" name="email" type="email" ref={register()} />
        <label htmlFor="contraseña">Contraseña:</label>
        {Error.contraseña && <p className="error">Usuario incorrecto</p>}
        <input
          id="contraseña"
          name="contraseña"
          type="contraseña"
          ref={register()}
        />
        <input type="submit" />
        {/*{statusMessage.length > 0 && (
          <p className="status-ok">{statusMessage}</p>
        )}
        {errorMessage.length > 0 && <p className="error">{errorMessage}</p>}*/}
      </form>
    </section>
  );
}
