import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
export default function ProductosCategoria() {
  const { idCategoria } = useParams();
  const [productosCategorias, setProductosCategorias] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:3001/comprar/${idCategoria}`).then(
      (response) => {
        setProductosCategorias(response.data.data);
      }
    );
  }, []);
  return (
    <div>
      <h1>Categorias</h1>
      {productosCategorias.map((value) => {
        return (
          <div>
            <h1 key={value.idAnuncio}>{value.titulo}</h1>
            <p>{value.descripcion}</p>
            <b>{value.precio}€</b>
          </div>
        );
      })}
    </div>
  );
}
