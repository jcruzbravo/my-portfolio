import ProjectCard from "../../components/ProjectCard";
import { projectsData } from "../../data";

const Projects = () => {
  return (
    <section className="p-6">
      <div className="mt-3 flex flex-col gap-4 items-center justify-center">
        <h1 className="font-medium text-xl">Proyectos</h1>
        <div className="flex flex-wrap gap-4 lg:flex-col lg:gap-4 lg:justify justify-center">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
