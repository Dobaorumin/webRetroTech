import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
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
            <Link
              key={value.idCategoria}
              to={`/Categoria/${value.idCategoria}/${value.idAnuncio}`}
            >
              <h1 key={value.idAnuncio}>{value.titulo}</h1>
            </Link>
            <p>{value.descripcion}</p>
            <b>{value.precio}€</b>
          </div>
        );
      })}
    </div>
  );
}
