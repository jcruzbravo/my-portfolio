import PropTypes from 'prop-types';

const SkillIcon = ({ name, image }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl overflow-hidden flex items-center justify-center">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-contain"
        />
      </div>
      <span className="text-sm text-gray-600 mt-2 text-center">{name}</span>
    </div>
  );
};

SkillIcon.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default SkillIcon;