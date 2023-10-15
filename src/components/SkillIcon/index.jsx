import PropTypes from 'prop-types';


const SkillIcon = ({ name, image }) => {

  return (
    <div className="skill-icon text-center">
      <img src={image} alt={name} className='w-20'/>
    </div>
  );

};

SkillIcon.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default SkillIcon;
