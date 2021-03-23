import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct, reserveProduct } from "../http/api";
import { useForm } from "react-hook-form";
import useAuth from "../shared/hooks/useAuth";

export default function SingleProduct() {
  const { idCategoria, idAnuncio } = useParams();
  const [productoEspecifico, setProductoEspecifico] = useState([]);
  const { handleSubmit, register } = useForm();
  const { userData } = useAuth();

  const onSubmit = async (mensajeCompra) => {
    await reserveProduct(idCategoria, idAnuncio, mensajeCompra);
    console.log(mensajeCompra);
  };

  useEffect(() => {
    getSingleProduct(idCategoria, idAnuncio).then((value) => {
      setProductoEspecifico(value);
    });
  }, [idCategoria, idAnuncio]);
  console.log(productoEspecifico);
  return (
    <div className="page">
      {productoEspecifico.map((value) => {
        return (
          <div className="page" key={value.idAnuncio}>
            <h1>{value.titulo}</h1>
            <p>{value.descripcion}</p>
            <b>{value.precio}</b>
            <p>{value.localidad}</p>
            <p>{value.userName}</p>
            <p>{value.fechaPublicacion}</p>
          </div>
        );
      })}
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="mensajeCompra">Mensaje de Propuesta:</label>
          <textarea
            type="text"
            id="mensajeCompra"
            name="mensajeCompra"
            ref={register()}
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}
