import { X } from "lucide-react";
import { useState } from "react";
import { projects } from "../constants";
import UseInView from "../hooks/UseInView";
import { motion } from "framer-motion";
const Projects = () => {
    const [projectOpen, setProjectOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [ref, inView] = UseInView();
    const popUp = (project) => {
        setSelectedProject(project);
        setProjectOpen(!projectOpen);
    };

    return (
        <div className="md:p-0 font-medium p-5" id="projects">
        <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: -30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 1, ease: "linear" }}
            className="text-3xl sm:text-5xl md:text-6xl text-center tracking-wider"
        >
            Projects
        </motion.h2>
        <div className="flex flex-wrap sm:p-8 md:p-0 mt-5">
            {projects.map((project, index) => (
                <motion.div
                    key={index}
                    className="w-full sm:w-1/2 md:w-1/3 p-2"
                    initial={{ x: -100 }}  // Start from the right (side view)
                    animate={{ x: 0 }}  // Move to its original position
                    exit={{ x: 100 }}  // Exit to the left (side view)
                    transition={{
                        duration: 0.7,
                        ease: "easeOut",
                        delay: index * 0.1,
                    }}
                    onClick={() => popUp(project)}
                >
                    <motion.div
                        className="p-5 mt-5 mb-5 border border-neutral-700 rounded-xl"
                        whileHover={{
                            rotateY: 10,
                            scale: 1.05, 
                            transition: { duration: 0.3, ease: "easeOut" }
                        }}
                        style={{
                            transformStyle: "preserve-3d",
                            perspective: "1000px",
                        }}
                    >
                        <img
                            src={project.image}
                            className="w-full h-56 object-cover rounded-lg"
                            alt={project.title}
                        />
                        <div className="flex flex-wrap mt-5 justify-between">
                            {project.tags?.map((tag, index) => (
                                <h6
                                    key={index}
                                    className="border border-blue-700 text-sm rounded-lg p-1 mt-3 text-blue-400"
                                >
                                    {tag}
                                </h6>
                            ))}
                        </div>
                        <h1 className="text-2xl text-gray-400 mt-3">{project.title}</h1>
                        <p className="text-gray-500">{project.description.slice(0, 100)}...</p>
                    </motion.div>
                </motion.div>
            ))}
        </div>
            {projectOpen && selectedProject && (
                <div className=" fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-90">

                    <div className="bg-gray-900 w-full max-w-2xl p-6  rounded-lg shadow-lg">
                        <div className="flex justify-end mb-5">
                            <button onClick={() => setProjectOpen(false)} className="text-white"><X size={32} /></button>
                        </div>
                        <img src={selectedProject.image} className="w-full h-72" alt="" />
                        <h1 className="mt-5 text-2xl">{selectedProject.title}</h1>
                        <p className="text-neutral-400 mt-2 text-justify">{selectedProject.description}</p>
                        <div className="flex space-x-5 mt-5">
                            <a href={selectedProject.github} target="_blank" className="w-1/2 bg-gray-800 hover:bg-violet-700 text-gray-100 font-semibold py-2 px-4 border border-gray-400 rounded text-center">View Code</a>
                            <a href={selectedProject.live} target="_blank" className="w-1/2 bg-gray-800 hover:bg-violet-700 text-gray-100 font-semibold py-2 px-4 border border-gray-400 rounded text-center">Demo</a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;
