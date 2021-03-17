import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

export default function SingleProduct() {
  const { idCategoria, idAnuncio } = useParams();
  const [productoEspecifico, setProductoEspecifico] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:3001/comprar/${idCategoria}/${idAnuncio}`).then(
      (response) => {
        setProductoEspecifico(response.data.data);
      }
    );
  }, []);
  return (
    <div>
      {productoEspecifico.map((value) => {
        return (
          <div key={value.idAnuncio}>
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
