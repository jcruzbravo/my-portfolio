import SkillIcon from "../../components/SkillIcon";
import {
  frontEndSkills,
  backEndSkills,
  databaseSkills,
  toolsSkills,
} from "../../data";

const Skills = () => {
  return (
    <section className="p-6">
      <div className="mt-3 flex flex-col gap-4">
        <h1 className="font-medium text-xl">Habilidades</h1>
        <div className="front-end-technologies sm:flex sm:flex-col sm:gap-4">
        <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 text-center">FrontEnd</span>
          <ul className="flex items-center gap-4 sm:flex-col ">
            {frontEndSkills.map((skill, index) => (
              <li key={index}>
                <SkillIcon name={skill.name} image={skill.image} />
              </li>
            ))}
          </ul>
        </div>
        <div className="back-end-technologies sm:flex sm:flex-col sm:gap-4">
        <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 text-center">BackEnd</span>
          <ul className="flex items-center gap-4 sm:flex sm:flex-col">
            {backEndSkills.map((skill, index) => (
              <li key={index}>
                <SkillIcon name={skill.name} image={skill.image} />
              </li>
            ))}
          </ul>
        </div>
        <div className="data-base-technologies sm:flex sm:flex-col sm:gap-4">
        <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 text-center">Bases de datos</span>
          <ul className="flex items-center gap-4 sm:flex-col">
            {databaseSkills.map((skill, index) => (
              <li key={index}>
                <SkillIcon name={skill.name} image={skill.image} />
              </li>
            ))}
          </ul>
        </div>
        <div className="tools-technologies sm:flex sm:flex-col sm:gap-4">
        <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 text-center">Herramientas</span>
          <ul className="flex items-center gap-4 sm:flex-col">
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

export default Skills;
