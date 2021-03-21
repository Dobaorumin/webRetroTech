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
    <div className="page">
      <h1>Categorias</h1>
      {categoria.map((value) => {
        return (
          <Link key={value.idCategoria} to={`/Categoria/${value.idCategoria}`}>
            <button key={value.idCategoria}>{value.nombre}</button>
          </Link>
        );
      })}
    </div>
  );
}
