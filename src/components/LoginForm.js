import { useForm } from "react-hook-form";
export default function LoginForm({ signIn }) {
  const { handleSubmit, register } = useForm();
  const onSubmit = ({ email, contraseña }) => {
    signIn(email, contraseña);
  };
  return (
    <section className="page">
      <h1>Inicia Sesión</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" />
        <label htmlFor="contraseña">Contraseña:</label>
        <input id="contraseña" name="contraseña" type="contraseña" />
        <input type="submit" />
      </form>
    </section>
  );
}
