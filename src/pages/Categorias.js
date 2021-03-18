import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategoria } from "../http/api";
//Endpoint Listo ✔️

export default function Categorias() {
  const [categoria, setCategoria] = useState([]);
  useEffect(() => {
    getCategoria().then((categoria) => {
      setCategoria(categoria.data);
    });
  }, []);

  return (
    <div>
      <h1>Categorias</h1>
      {categoria.map((value) => {
        return (
          <Link key={value.idCategoria} to={`/Categoria/${value.idCategoria}`}>
            <h1 key={value.idCategoria}>{value.nombre}</h1>
          </Link>
        );
      })}
    </div>
  );
}
