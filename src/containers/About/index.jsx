import SkillIcon from "../../components/SkillIcon";
import {
  frontEndSkills,
  backEndSkills,
  databaseSkills,
  toolsSkills,
} from "../../data";

const About = () => {
  return (
    <section>
      <div className="mt-3">
        <h1 className="font-medium text-xl">Habilidades</h1>
        <div className="front-end-technologies">
          <p>Tecnologías front end</p>
          <ul className="flex items-center gap-4">
            {frontEndSkills.map((skill, index) => (
              <li key={index}>
                <SkillIcon name={skill.name} image={skill.image} />
              </li>
            ))}
          </ul>
        </div>
        <div className="back-end-technologies">
          <p>Tecnologías back end</p>
          <ul className="flex items-center gap-4">
            {backEndSkills.map((skill, index) => (
              <li key={index}>
                <SkillIcon name={skill.name} image={skill.image} />
              </li>
            ))}
          </ul>
        </div>
        <div className="data-base-technologies">
          <p>Tecnologías de bases de datos</p>
          <ul className="flex items-center gap-4">
            {databaseSkills.map((skill, index) => (
              <li key={index}>
                <SkillIcon name={skill.name} image={skill.image} />
              </li>
            ))}
          </ul>
        </div>
        <div className="tools-technologies">
          <p>Tecnologías de herramientas</p>
          <ul className="flex items-center gap-4">
            {toolsSkills.map((skill, index) => (
              <li key={index}>
                <SkillIcon name={skill.name} image={skill.image} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
