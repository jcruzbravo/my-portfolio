import PropTypes from 'prop-types';
import { useState, useEffect } from "react";


const SkillIcon = ({ name, image }) => {

  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    import(`${image.toLowerCase()}`)
      .then((image) => {
        setImageSrc(image.default);
      })
      .catch((error) => {
        console.error(`Error loading image for ${name}:`, error);
      });
  }, [image, name]);


  return (
    <div className="skill-icon text-center">
      {imageSrc && <img src={imageSrc} alt={name} className='w-20'/>}
    </div>
  );

};

SkillIcon.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default SkillIcon;
