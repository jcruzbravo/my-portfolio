import { NavLink } from "react-router-dom";

const MenuMobile = () => {
  return (
    <div className="bg-blue-900 w-full p-4 box-border absolute top-16 left-0 transition-transform duration-1000 z-10">
      <div className="flex items-center justify-center">
        <ul className="list-none p-0 flex items-center justify-center gap-2">
          <li>
            <NavLink to="/" className="hover:bg-gray-700 text-white font-bold">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/about" className="hover:bg-gray-700 text-white font-bold">Sobre mí</NavLink>
          </li>
          <li>
            <NavLink to="/projects" className="hover:bg-gray-700 text-white font-bold">Proyectos</NavLink>
          </li>
          <li>
            <a href="/public/resume.pdf" className="hover:bg-gray-700 text-white font-bold" target="_blank">Ver cv</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuMobile;