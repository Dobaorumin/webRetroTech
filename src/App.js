import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Registrate from "./pages/Registrate";
import Login from "./pages/Login";
import Categorias from "./pages/Categorias";
import Nav from "./components/Nav";
import { AuthProvider } from "./shared/context/authContext";
import ProductosCategoria from "./pages/ProductosCategoria";
import SingleProduct from "./pages/SingleProduct";
import Perfil from "./pages/Perfil";
import SubirProducto from "./pages/SubirProducto";
import MisAnuncios from "./pages/MisAnuncios";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Nav></Nav>
        <Switch>
          <Route exact path="/Categoria/:idCategoria/:idAnuncio">
            <SingleProduct></SingleProduct>
          </Route>
          <Route exact path="/Categoria/:idCategoria">
            <ProductosCategoria></ProductosCategoria>
          </Route>
          <Route exact path="/">
            <Inicio></Inicio>
          </Route>
          <Route exact path="/MisAnuncios">
            <MisAnuncios></MisAnuncios>
          </Route>
          <Route exact path="/SubirProducto">
            <SubirProducto></SubirProducto>
          </Route>
          <Route exact path="/Perfil">
            <Perfil></Perfil>
          </Route>
          <Route exact path="/Categoria">
            <Categorias></Categorias>
          </Route>
          <Route exact path="/Login">
            <Login></Login>
          </Route>
          <Route exact path="/Registrate">
            <Registrate></Registrate>
          </Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
