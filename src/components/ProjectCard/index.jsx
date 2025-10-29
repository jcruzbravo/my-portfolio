import PropTypes from "prop-types";

const ProjectCard = ({
  imgSrc,
  imgAlt,
  title,
  description,
  repoLink,
  productionLink,
  tags,
}) => {
  return (
    <div className="max-w-md rounded-xl overflow-hidden shadow-lg bg-gray-900 transition-transform transform hover:scale-105 hover:shadow-2xl">
      <img className="w-full h-48 object-cover" src={imgSrc} alt={imgAlt} />

      <div className="px-6 py-4">
        <h3 className="font-bold text-2xl mb-2 text-white text-center">{title}</h3>
        <p className="text-gray-300 text-base mb-4 text-justify">{description}</p>

        <div className="flex justify-center gap-4">
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1 border border-white rounded-md text-white hover:bg-white hover:text-gray-900 transition-colors"
          >
            Repositorio
          </a>
          <a
            href={productionLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1 border border-white rounded-md text-white hover:bg-white hover:text-gray-900 transition-colors"
          >
            Producción
          </a>
        </div>
      </div>

      {/* Tags */}
      <div className="px-6 pb-4 pt-2 flex flex-wrap justify-center gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-linear-to-r from-blue-500 to-purple-500 text-white rounded-full px-3 py-1 text-sm font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  repoLink: PropTypes.string.isRequired,
  productionLink: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectCard;