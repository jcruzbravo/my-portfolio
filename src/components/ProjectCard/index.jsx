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
    <div className="max-w-lg rounded overflow-hidden shadow-lg bg-black transition-transform ease-in-out hover:scale-105">
      <div className="md:max-w-xs lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
        <img className="w-full" src={imgSrc} alt={imgAlt} />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white text-center">{title}</div>
        <p className="text-white text-base text-justify">{description}</p>
        <div className="flex gap-4">
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-white"
          >
            Repository
          </a>
          <a
            href={productionLink}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-white"
          >
            Production
          </a>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
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
