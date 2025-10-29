import Layout from "../../components/Layout";
import SkillIcon from "../../components/SkillIcon";
import {
  frontEndSkills,
  backEndSkills,
  databaseSkills,
  toolsSkills,
} from "../../data";
import { FaCode, FaServer, FaDatabase, FaTools } from "react-icons/fa";

const Skills = () => {
  const skillCategories = [
    { title: "Frontend", skills: frontEndSkills, icon: FaCode },
    { title: "Backend", skills: backEndSkills, icon: FaServer },
    { title: "Bases de datos", skills: databaseSkills, icon: FaDatabase },
    { title: "Herramientas", skills: toolsSkills, icon: FaTools },
  ];

  return (
    <Layout>
      <section className="py-12 px-6">
        <h1 className="text-3xl font-bold text-center mb-8">Habilidades</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="shadow-md rounded-xl p-6 flex flex-col hover:shadow-xl transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <category.icon className="text-blue-500 text-2xl" />
                {category.title}
              </h2>

              <ul className="flex flex-wrap gap-4">
                {category.skills.map((skill, idx) => (
                  <li
                    key={idx}
                    className="text-center p-2 flex flex-col items-center"
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
