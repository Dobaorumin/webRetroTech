import { Link } from "react-router-dom";
import "../css/Nav.css";
export default function Nav() {
  return (
    <nav>
      <div className="header-item">
        <Link to="/">Inicio</Link>
      </div>
      <div className="header-item">
        <Link to="/Categoria">Categoria</Link>
      </div>
      <div className="header-item">
        <Link to="/Login">Login</Link>
      </div>
      <div className="header-item">
        <Link to="/Registrate">Regístrate</Link>
      </div>
      <div className="header-item">
        <Link to="/Perfil">Perfil</Link>
      </div>
      <div className="header-item">
        <Link to="/SubirProducto">+</Link>
      </div>
      <div className="header-item">
        <Link to="/MisAnuncios">Mis Anuncios</Link>
      </div>
    </nav>
  );
}
