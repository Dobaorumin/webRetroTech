import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../http/api";

export default function SingleProduct() {
  const { idCategoria, idAnuncio } = useParams();
  const [productoEspecifico, setProductoEspecifico] = useState([]);

  useEffect(() => {
    getSingleProduct(idCategoria, idAnuncio).then((value) => {
      setProductoEspecifico(value);
    });
  }, [idCategoria, idAnuncio]);
  return (
    <div ClassName="page">
      {productoEspecifico.map((value) => {
        return (
          <div ClassName="page" key={value.idAnuncio}>
            <h1>{value.titulo}</h1>
            <p>{value.descripcion}</p>
            <b>{value.precio}</b>
            <p>{value.localidad}</p>
            <p>{value.userName}</p>
            <p>{value.fechaPublicacion}</p>
          </div>
        );
      })}
    </div>
  );
}
