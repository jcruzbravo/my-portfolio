import ProjectCard from "../../components/ProjectCard";
import { projectsData } from "../../data";

const Projects = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Proyectos personales
        </h2>

        <p className="text-center text-gray-600 mb-12 max-w-2xl">
          Antes de incorporarme al ámbito profesional, desarrollé estos
          proyectos personales para experimentar y aprender. Hoy en día, mis
          esfuerzos se centran en proyectos reales, priorizando el impacto y la
          calidad en entornos laborales.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
