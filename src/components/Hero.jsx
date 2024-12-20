import { motion } from "framer-motion";
import hero from "../assets/hero.mp4";
import UseInView from "../hooks/UseInView";
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
const Hero = () => {
    const [ref, inView] = UseInView();
    return (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-10 md:mt-10 md:p-10 overflow-hidden p-5">
            {/* left Section  */}
            <div className="md:w-1/2 text-center md:text-start" >
                <motion.h1
                    ref={ref}
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 1, ease: "linear" }}
                    className="text-4xl sm:text-6xl md:text-7xl tracking-wide">
                    Hello, I'm<br />
                    <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">Harikrishnan</span>
                </motion.h1>
                <p className="mt-4 md:mt-4 lg:mt-4 text-base text-neutral-500 max-w-4xl p-4 md:p-0 lg:px-0 text-justify">
                    A passionate <span className="text-4xl">full-stack developer</span><br />
                    with a strong focus on building robust and scalable web applications. With 6 months of hands-on experience, I have sharpened my skills in front-end technologies like React and back-end technologies such as Node.js, MySQL, and MongoDB.
                    My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user EXPERIENCES.
                </p>


                <div className="flex md:justify-start justify-center my-4 md:my-10">
                    <motion.a
                        ref={ref}
                        initial={{ opacity: 0, y: -30 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
                        transition={{ duration: 1, ease: "linear" }}
                        href="#" className="py-3 px-4 mx-3 rounded-md border">LinkedIn</motion.a>
                    <motion.a initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 1, ease: "linear" }}
                        href="https://drive.google.com/file/d/1eifTX_pWSoVUnyqoxpIJuDwYqEO_mXgR/view?usp=sharing" target="_blank" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 border rounded">Resume</motion.a>
                </div>
            </div>


            {/* right section */}
            <motion.div
    ref={ref}
    initial={{ opacity: 0, x: 80 }}
    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
    transition={{ duration: 1, ease: "linear" }}
    className="flex justify-center md:justify-end mt-5 md:mt-0"
>
    <DotLottieReact
        src="https://lottie.host/5c608f77-4d34-41a2-82e5-1d6dd848c5c0/fnBv6GRuqf.lottie"
        loop
        autoplay
        style={{ width: "480px", height: "480px" }} // Add inline styles for size control
    />
</motion.div>

        </div>

    );
};

export default Hero;






