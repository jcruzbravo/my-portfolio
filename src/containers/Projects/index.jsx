import { NavLink } from "react-router-dom";

const Projects = () => {
  return (
    <section className="m-6">
      <div className="mt-3 flex flex-col gap-4">
        <h1 className="font-medium text-xl">Proyectos</h1>
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-black transition-transform ease-in-out hover:scale-105">
          <img
            className="w-full"
            src="https://res.cloudinary.com/dyfmjmdb4/image/upload/v1684695318/fortnite-informer_h2uv1c.png"
            width={150}
            height={150}
            alt="Fortnite Informer"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white">Fortnite Informer</div>
            <p className="text-white text-base">
              This application built with React allows Fortnite players to
              consult mainly the most relevant information, such as the news,
              the item shop, etc.
            </p>
            <div className="flex gap-4">
              <NavLink
                to="http://github.com/jcruzbravo/fortnite-informer"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-white"
              >
                Repository
              </NavLink>
              <a
                href="https://fortnite-info.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-white"
              >
                Production
              </a>
            </div>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #React
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #JavaScript
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #HTML
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #CSS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
