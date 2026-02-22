import { HERO_CONTENT } from "../constants"; 
import profilePic from "../assets/rumethHerathProfile.jpg";

import { FiDownload } from "react-icons/fi";
import { motion } from "motion/react";

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay}
    }
})

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className="pb-16 text-6xl font-thin tracking-tight lg:mt-16
                    lg:text-8xl">
                        Rumeth Herath
                    </motion.h1>
                    <motion.span 
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className="bg-gradient-to-r from-pink-300 via-slate-500 
                    to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                        Software Engineer
                    </motion.span>
                    <motion.p 
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className="my-2 max-w-xl py-6 font-light tracking-tighter">
                        {HERO_CONTENT}
                    </motion.p>

                    
                    <motion.a
                    href={`${import.meta.env.BASE_URL}RumethHerath_resume.pdf`}
                    download="Rumeth_Herath_resume.pdf"
                    variants={container(1.5)}
                    initial="hidden"
                    animate="visible"
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl border border-purple-400 bg-gradient-to-br from-violet-500/40 to-indigo-500/20 px-8 py-3 text-lg font-medium text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-violet-600/50 hover:shadow-xl"
                    >
                    Download Resume
                    <FiDownload className="text-xl" />
                    </motion.a>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img 
                    initial={{x: 100, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 1, delay: 1.2}}
                    src={profilePic} 
                    alt="profile picture" 
                    className="rounded-3xl transition-transform duration-300 hover:scale-105"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About