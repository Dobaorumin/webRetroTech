import { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

//Endpoint Listo ✔️

export default function Categorias() {
  const [categoria, setCategoria] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/comprar").then((response) => {
      setCategoria(response.data.data);
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
