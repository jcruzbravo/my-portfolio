import Layout from "../../components/Layout";
import SkillIcon from "../../components/SkillIcon";
import {
  frontEndSkills,
  backEndSkills,
  databaseSkills,
  toolsSkills,
} from "../../data";
import {FaCode, FaServer, FaDatabase, FaTools} from "react-icons/fa";

const Skills = () => {
  const skillCategories = [
    { title: "Frontend", skills: frontEndSkills, icon: FaCode },
    { title: "Backend", skills: backEndSkills, icon: FaServer },
    { title: "Bases de datos", skills: databaseSkills, icon: FaDatabase },
    { title: "Herramientas", skills: toolsSkills, icon: FaTools },
  ];

  return (
      <Layout>
        <section className="p-6 mt-8">
          <h1 className="font-medium text-2xl text-center mb-8">Habilidades</h1>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
            {skillCategories.map((category, index) => (
                <div
                    key={index}
                    className="bg-white shadow-lg rounded-lg p-6"
                >
                  <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                    <category.icon className="inline-block mr-2" />
                    {category.title}
                  </h2>
                  <ul className="flex flex-wrap justify-center gap-4">
                    {category.skills.map((skill, idx) => (
                        <li
                            key={idx}
                            className="text-center p-2"
                        >
                          <SkillIcon name={skill.name} image={skill.image} />
                        </li>
                    ))}
                  </ul>
                </div>
            ))}
          </div>
        </section>
      </Layout>
  );
};

export default Skills;
