import React from "react";
import { SKILLS } from "../constants/constants";
import UseInView from "../hooks/UseInView";
import { motion } from "framer-motion";

const Skills = () => {
  const [ref, inView] = UseInView();

  return (
    <motion.div
      ref={ref}
      className="md:mt-5 md:p-0 font-medium p-8"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 1, ease: "linear" }}
        className="text-3xl sm:text-5xl md:text-6xl text-center tracking-wider"
        id="skills"
      >
        Skills
      </motion.h2>

      <div className="flex flex-wrap mt-2 justify-center gap-4">
        <motion.div
          className="w-full p-2 lg:p-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="p-5 mt-2 border border-neutral-700 rounded-xl">
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
              {SKILLS.flatMap((category) => category.skills).map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  className="flex items-center border rounded-lg p-4 justify-center"
                  initial={{ y: 0 }}
                  animate={{
                    y: inView ? (skillIndex % 2 === 0 ? 10 : -10) : 0,
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                >
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain"
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
