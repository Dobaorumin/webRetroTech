import { useEffect, useState } from "react";
import { listMyProducts } from "../http/api";
import useAuth from "../shared/hooks/useAuth";

export default function MisAnuncios() {
  const { userData } = useAuth();
  const [listaAnuncio, setListaAnuncio] = useState([]);
  useEffect(() => {
    listMyProducts(userData.id).then((value) => {
      setListaAnuncio(value.anuncios);
    });
  }, [userData.id]);
  console.log(listaAnuncio);
  return (
    <div className="page">
      <h1>Anuncios Publicados</h1>
      <br></br>
      {listaAnuncio.map((value) => {
        return (
          <div className="page" key={value.idAnuncio}>
            <h1>{value.titulo}</h1>
            <p>{value.descripcion}</p>
            <h4>{value.precio}€</h4>
            <p>{value.idCategoria}</p>
            <br></br>
          </div>
        );
      })}
    </div>
  );
}
