import { PROJECTS } from "../constants";
import { motion } from "motion/react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Projects = () => {
  return (
    <div className="border-b border-neutral-500 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>

      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap gap-6 lg:justify-center">
            
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(192, 132, 252, 0.4)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative block w-full max-w-xs rounded-2xl border border-neutral-800 bg-neutral-900 p-4 shadow-lg"
            >
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="rounded-xl object-cover w-full"
              />
            
              <div className="absolute bottom-4 right-4 flex gap-3 text-purple-300">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-purple-500"
                  aria-label={`${project.title} github repository`}
                >
                  <FiGithub size={24} />
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-purple-500"
                    aria-label={`${project.title} live demo`}
                  >
                    <FiExternalLink size={24} />
                  </a>
                )}
              </div>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>

              {project.technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 12px rgba(192, 132, 252, 0.5)",
                  }}
                  className="mr-2 mt-4 inline-block rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800 transition-transform"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
