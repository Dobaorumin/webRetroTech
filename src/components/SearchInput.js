import { Button, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import { useEffect, useState } from "react";
import { getSearch } from "../http/api";
export default function SearchInput() {
  const history = useHistory();
  const [input, setInput] = useState();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { handleSubmit, register } = useForm();

  useEffect(() => {
    getSearch(input).then((data) => {
      setFilteredProducts(data);
      history.push(`/busqueda?search=${input}`);
    });
  }, [input, history]);
  console.log(filteredProducts);
  const onSubmit = async (value) => {
    console.log(value);
  };

  return (
    <>
      <h1>Busca tu producto</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          type="text"
          htmlFor="search"
          name="search"
          id="search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          label="¿Qué buscas?"
          inputRef={register()}
        ></TextField>
        <br />
        <Button type="submit" variant="contained" color="primary">
          Buscar
        </Button>
      </form>
      <div>
        {filteredProducts.map((data) => {
          return (
            <>
              <h1>{data.titulo}</h1>
              <p>{data.descripcion}</p>
              <p>{data.localidad}</p>
              <p>{data.fechaPublicacion}</p>
            </>
          );
        })}
      </div>
    </>
  );
}
