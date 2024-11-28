import React from "react";

function Experience() {
  return (
    <div>
      <div className="border-b border-neutral-900 pb-4" id="experience">
        <h2 className="md:my-20 my-2 text-center text-4xl" style={{ opacity: 1, transform: "none", willChange: "auto" }}>
          Work Experience
        </h2>

        <div>
          <div className="mb-8 flex flex-wrap md:justify-center gap-2 md:p-0 p-5">
            <div className="w-full md:w-1/4" style={{ opacity: 1, transform: "none", willChange: "auto" }}>
              <p className="mb-2 md:text-sm text-neutral-400">April 2024 - November 2024</p>
            </div>
            <div className="w-full max-w-xl md:w-3/4" style={{ opacity: 1, transform: "none", willChange: "auto" }}>
              <h6 className="mb-2 font-semibold">
                MERN Stack Development Intern - 
                <span className="text-sm text-purple-100">Luminar Technolab</span>
              </h6>
              <p className="mb-4 text-neutral-400">
                • Crafted web applications using React.js, ensuring seamless interaction with REST APIs through Axios, serving over 500 daily users.<br />
                • Enhanced application performance and security by integrating JWT for user authentication, reducing security incidents by 30%.<br />
                • Implemented responsive design principles to ensure the application functions well on both desktop and mobile devices.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="mr-2 my-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500">React.js</span>
                <span className="mr-2 my-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500">Axios</span>
                <span className="mr-2 my-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500">JWT</span>
                <span className="mr-2 my-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500">Responsive Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
