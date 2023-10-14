import { NavLink } from "react-router-dom";

const MenuMobile = () => {
  return (
    <div className="bg-gray-900 w-full p-2 box-border absolute top-14 left-0 z-10 border-t">
      <div className="flex items-center justify-center">
        <ul className="list-none p-0 flex items-center justify-center gap-2">
          <li>
            <NavLink to="/" className={"hover:bg-gray-700 text-white"}>Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={"hover:bg-gray-700 text-white"}>Sobre mí</NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={"hover:bg-gray-700 text-white"}>Proyectos</NavLink>
          </li>
          <li>
            <NavLink to="/public/resume.pdf" className={"hover:bg-gray-700 text-white"} target="_blank">Ver cv</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuMobile;