import { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuMobile from "../MenuMobile";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="bg-gray-900 flex justify-between sticky top-0 p-2 z-10">
      <div
        className="md:invert md:block md:m-2 md:p-2 md:cursor-pointer hidden"
        onClick={() => handleMenuClick()}
      >
        <GiHamburgerMenu />
      </div>
      <div className="hidden md:block">{showMenu && <MenuMobile />}</div>
      <div className="w-12 invert">
        <img src="https://res.cloudinary.com/dubztfhgv/image/upload/v1697405827/logo_jgsodu.png" alt="Logo" />
      </div>
      <div className="flex justify-between items-center md:hidden">
        <nav className="m-2 ">
          <ul className="list-none flex items-center gap-4">
            <li>
              <NavLink to="/" className={"hover:bg-gray-700 text-white hover:rounded"}>
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={"hover:bg-gray-700 text-white hover:rounded"}>
                Habilidades
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={"hover:bg-gray-700 text-white hover:rounded"}
              >
                Proyectos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/CV_2025.pdf"
                className={"hover:bg-gray-700 text-white"}
                target="_blank"
              >
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
