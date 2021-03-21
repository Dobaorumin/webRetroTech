import { useForm } from "react-hook-form";
import { uploadProduct } from "../http/api";
export default function NewProduct() {
  const { handleSubmit, register } = useForm();
  const newProduct = async (data) => {
    uploadProduct(data);
    console.log(data);
  };

  return (
    <section className="page">
      <h1>¡Véndelo!</h1>
      <form onSubmit={handleSubmit(newProduct)}>
        <div>
          <label htmlFor="titulo">titulo</label>
          <input
            type="text"
            name="titulo"
            id="titulo"
            ref={register({
              required: "Este campo es obligatorio",
            })}
          />
        </div>
        <div>
          <label htmlFor="nombre">descripcion:</label>
          <input
            type="text"
            name="descripcion"
            id="descripcion"
            ref={register({
              required: "Este campo es obligatorio",
            })}
          />
        </div>
        <div>
          <label htmlFor="precio">precio:</label>
          <input
            type="number"
            name="precio"
            id="precio"
            ref={register({
              required: "Este campo es obligatorio",
            })}
          />
        </div>
        <div>
          <label htmlFor="ciudad">ciudad:</label>
          <input
            type="text"
            name="provincia"
            id="provincia"
            ref={register({
              required: "Este campo es obligatorio",
            })}
          />
        </div>
        <div>
          <label htmlFor="localidad">localidad</label>
          <input
            type="country"
            name="localidad"
            id="localidad"
            ref={register({
              required: "Este campo es obligatorio",
            })}
          />
        </div>
        <div>
          <label htmlFor="idCategoria">Categoria:</label>
          <select ref={register()} id="idCategoria" name="idCategoria">
            <option value="1" selected>
              Consolas y Videojuegos
            </option>
            <option value="2">Informática</option>
            <option value="3">Teléfonos</option>
            <option value="4">TV y Vídeo</option>
            <option value="5">Sonido</option>
          </select>
        </div>
        <div>
          <label htmlFor="foto1">imagen</label>
          <input type="file" name="foto1" id="foto1" ref={register()} />
        </div>
        <div>
          <button type="submit">Subir Producto</button>
        </div>
      </form>
    </section>
  );
}
