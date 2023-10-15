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
        <h1 className="font-medium text-xl text-center">Habilidades</h1>
        <div className="front-end-technologies flex items-center gap-4 flex-col sm:flex-col">
        <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 text-center w-full">FrontEnd</span>
          <ul className="flex items-center gap-4 sm:flex-col ">
            {frontEndSkills.map((skill, index) => (
              <li key={index} className="text-center mt-2">
                <SkillIcon name={skill.name} image={skill.image} />
              </li>
            ))}
          </ul>
        </div>
        <div className="back-end-technologies flex items-center gap-4 flex-col sm:flex-col">
        <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 text-center w-full">BackEnd</span>
          <ul className="flex items-center gap-4 sm:flex sm:flex-col">
            {backEndSkills.map((skill, index) => (
              <li key={index}>
                <SkillIcon name={skill.name} image={skill.image} />
              </li>
            ))}
          </ul>
        </div>
        <div className="data-base-technologies flex items-center gap-4 flex-col sm:flex-col">
        <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 text-center w-full">Bases de datos</span>
          <ul className="flex items-center gap-4 sm:flex-col">
            {databaseSkills.map((skill, index) => (
              <li key={index}>
                <SkillIcon name={skill.name} image={skill.image} />
              </li>
            ))}
          </ul>
        </div>
        <div className="tools-technologies flex items-center gap-4 flex-col sm:flex-col">
        <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 text-center w-full">Herramientas</span>
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
