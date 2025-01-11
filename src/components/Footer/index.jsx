import {
  FaFacebook,
  FaTwitter,
  FaTwitch,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const colorFacebook = "#3b5998";
const colorTwitter = "#55acee";
const colorInstagram = "#ac2bac";
const colorTwitch = "#a970ff";
const colorGithub = "#333333";

function Footer() {
  return (
    <footer>
      <div className="bg-gray-900 w-full">
        <div className="flex flex-col gap-4 items-center justify-center p-2">
          <div className="flex gap-11 justify-center items-center mt-2">
            <a
              href="https://www.facebook.com/joaquinbravo2000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook color={colorFacebook} size={28} />
            </a>
            <a
              href="https://twitter.com/Joaacooo___"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter color={colorTwitter} size={28} />
            </a>
            <a
              href="https://www.twitch.tv/1tsjoaco"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitch color={colorTwitch} size={28} />
            </a>
            <a
              href="https://github.com/jcruzbravo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                color={colorGithub}
                style={{ filter: "invert(1)" }}
                size={28}
              />
            </a>
            <a
              href="https://www.instagram.com/1tsjoaco/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram color={colorInstagram} size={28} />
            </a>
          </div>
          <div className="text-center text-white">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} JB. Todos los derechos reservados.
            </p>
            <span className="text-xs font-medium bg-gray-700 text-gray-300 rounded-full px-4 py-1 inline-block mt-2 shadow-md">
              <strong>Versión 2.0</strong> | Última actualización: 11 de enero de 2025
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
