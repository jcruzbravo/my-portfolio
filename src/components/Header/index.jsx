import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <header className="bg-gray-900 w-full">
      <div className="flex justify-between items-center">
        <div className="w-12 m-2 invert">
          <img src={logo} alt="Logo" />
        </div>
        <nav className="m-2">
          <ul className="list-none flex items-center gap-4">
            <li>
              <NavLink to="/" className={"hover:bg-gray-700 text-white"}>
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={"hover:bg-gray-700 text-white"}>
                Sobre mí
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className={"hover:bg-gray-700 text-white"}>
                Proyectos
              </NavLink>
            </li>
            <li>
              <NavLink to="/public/resume.pdf" className={"hover:bg-gray-700 text-white"} target="_blank">
                Ver cv
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
