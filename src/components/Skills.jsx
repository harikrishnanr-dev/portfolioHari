import React from "react";
import { skills } from "../constants";
import UseInView from "../hooks/UseInView";
import { motion } from "framer-motion";

const Skills = () => {
  const [ref, inView] = UseInView();

  return (
    <motion.div
      ref={ref}
      className="lg:mt-5 lg:p-0 font-medium p-8">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 1, ease: "linear" }}
        className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wider"
        id="skills"
      >
        Skills
      </motion.h2>

      <div className="flex flex-wrap mt-2 justify-center gap-4">
        <motion.div
          className="w-full p-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="p-5 mt-2 border border-neutral-700 rounded-xl">
            <div className="flex flex-wrap justify-center gap-4"> 
              {skills.flatMap((category) => category.skills).map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  className="flex items-center border rounded-lg p-3 justify-center" 
                  initial={{ y: 0 }}
                  animate={{
                    y: inView
                      ? skillIndex % 2 === 0 
                        ? 10
                        : -10 
                      : 0,
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                >
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-20 h-20 sm:w-16 sm:h-24 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" // Responsive image sizes
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;