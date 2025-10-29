import { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuMobile from "../MenuMobile";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuClick = () => setShowMenu(!showMenu);

  return (
    <header className="bg-gray-900 flex items-center justify-between sticky top-0 z-10 px-2 py-2">
      <div
        className="block md:hidden p-2 cursor-pointer filter invert"
        onClick={handleMenuClick}
      >
        <GiHamburgerMenu size={24} />
      </div>

      <div className="w-12 filter invert">
        <img
          src="https://res.cloudinary.com/dubztfhgv/image/upload/v1697405827/logo_jgsodu.png"
          alt="Logo"
        />
      </div>

      <nav className="hidden md:flex items-center gap-4">
        <NavLink
          to="/"
          className="text-white hover:bg-gray-700 hover:rounded-md px-3 py-1"
        >
          Inicio
        </NavLink>
        <NavLink
          to="/about"
          className="text-white hover:bg-gray-700 hover:rounded-md px-3 py-1"
        >
          Habilidades
        </NavLink>
        <NavLink
          to="/projects"
          className="text-white hover:bg-gray-700 hover:rounded-md px-3 py-1"
        >
          Proyectos
        </NavLink>
        <NavLink
          to="/CV_2025.pdf"
          target="_blank"
          className="text-white hover:bg-gray-700 hover:rounded-md px-3 py-1"
        >
          Ver CV
        </NavLink>
      </nav>

      {showMenu && (
        <div className="absolute top-full left-0 w-full md:hidden z-20">
          <MenuMobile />
        </div>
      )}
    </header>
  );
};

export default Header;
