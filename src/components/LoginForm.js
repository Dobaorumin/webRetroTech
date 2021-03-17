import { useState } from "react";
import { useForm } from "react-hook-form";
export default function LoginForm(props) {
  const { handleSubmit, errors } = useForm();
  const onSubmit = async (data) => {
    await props.onSubmit(data.email, data.contraseña);
  };
  return (
    <section className="page">
      <h1>Inicia Sesión</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email:</label>
        {errors.email && <p className="error">Usuario incorrecto</p>}
        <input id="email" name="email" />
        <label htmlFor="contraseña">Contraseña:</label>
        {errors.contraseña && <p className="error">Usuario incorrecto</p>}
        <input id="contraseña" name="contraseña" type="contraseña" />
        <input type="submit" />
      </form>
    </section>
  );
}
