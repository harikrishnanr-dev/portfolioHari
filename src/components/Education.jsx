import React from "react";
import { education } from "../constants";
import { motion } from "framer-motion";
import UseInView from "../hooks/UseInView";
function Education(){
  const [ref, inView] = UseInView();

  return (
    <div className="md:p-0 font-medium p-5" id="education">
    <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: -30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 1, ease: "linear" }}
        className="text-3xl sm:text-5xl md:text-6xl text-center tracking-wider"
    >
        Education
    </motion.h2>

      <div className="flex flex-wrap mt-2 justify-center gap-4">
        {education.map((education, index) => (
          <motion.div
            key={index}
            ref={ref}
            className="w-full md:p-8 p-8"
            initial={{ opacity: 0, y:-20 }}
            animate={ inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 } }
            transition={{ duration: 1, delay: index * 0.5 }}
          >
            <div className="p-5 mt-2 border border-neutral-700 rounded-xl">
              <h3 className="text-sm md:text-lg font-semibold">
                {education.role} -{" "}
                <span className="text-purple-500">{education.company}</span>
              </h3>
              <p className="text-sm text-neutral-400">
                {education.duration} | {education.location}
              </p>
              <ul className="mt-2 list-disc list-inside text-neutral-400">
                {education.responsibilities.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {education.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;

