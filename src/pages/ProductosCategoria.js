import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductosCategorias } from "../http/api";
export default function ProductosCategoria() {
  const { idCategoria } = useParams();
  const [productosCategorias, setProductosCategorias] = useState([]);

  useEffect(() => {
    getProductosCategorias(idCategoria).then((value) => {
      setProductosCategorias(value);
    });
  }, [idCategoria]);
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
            <p key={value.descripcion}>{value.descripcion}</p>
            <b key={value.precio}>{value.precio}€</b>
          </div>
        );
      })}
    </div>
  );
}
