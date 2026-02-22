import {RiInfoI, RiReactjsLine} from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { SiCplusplusbuilder } from "react-icons/si";
import { SiPytorch, SiRust } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
//make sure you import the rest 

import { motion } from "motion/react";

const iconVariants = (duration) => ({
    inital: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Techstack = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2 
        className="my-20 text-center text-4xl"
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1.5}}
        >Tech Stack</motion.h2>
        <motion.div 
        className="flex flex-wrap items-center justify-center gap-4"
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 1.5}}
        >
            <motion.div 
            className="rounded-2xl border-4 border-neutral-800 p-4"
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            whileHover={{
                scale: 1.1,
                boxShadow: "0 0 20px rgba(192, 132, 252, 0.6)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
            >
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div 
            className="rounded-2xl border-4 border-neutral-800 p-4"
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            whileHover={{
                scale: 1.1,
                boxShadow: "0 0 20px rgba(192, 132, 252, 0.6)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
            >
                <TbBrandReactNative className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div 
            className="rounded-2xl border-4 border-neutral-800 p-4"
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            whileHover={{
                scale: 1.1,
                boxShadow: "0 0 20px rgba(192, 132, 252, 0.6)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
            >
                <FaPython className="text-7xl text-purple-500"/>
            </motion.div>
            <motion.div 
            className="rounded-2xl border-4 border-neutral-800 p-4"
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            whileHover={{
                scale: 1.1,
                boxShadow: "0 0 20px rgba(192, 132, 252, 0.6)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
            >
                <IoLogoJavascript className="text-7xl text-yellow-300"/>
            </motion.div>
            <motion.div 
            className="rounded-2xl border-4 border-neutral-800 p-4"
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            whileHover={{
                scale: 1.1,
                boxShadow: "0 0 20px rgba(192, 132, 252, 0.6)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
            >
                <FaJava className="text-7xl text-orange-400"/>
            </motion.div>
            <motion.div 
            className="rounded-2xl border-4 border-neutral-800 p-4"
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            whileHover={{
                scale: 1.1,
                boxShadow: "0 0 20px rgba(192, 132, 252, 0.6)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
            >
                <FaFlutter className="text-7xl text-blue-500"/>
            </motion.div>
            <motion.div 
            className="rounded-2xl border-4 border-neutral-800 p-4"
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            whileHover={{
                scale: 1.1,
                boxShadow: "0 0 20px rgba(192, 132, 252, 0.6)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
            >
                <RiTailwindCssFill className="text-7xl text-blue-300"/>
            </motion.div>
            <motion.div 
            className="rounded-2xl border-4 border-neutral-800 p-4"
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            whileHover={{
                scale: 1.1,
                boxShadow: "0 0 20px rgba(192, 132, 252, 0.6)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
            >
                <SiCplusplusbuilder className="text-7xl text-blue-800"/>
            </motion.div>
            <motion.div 
            className="rounded-2xl border-4 border-neutral-800 p-4"
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            whileHover={{
                scale: 1.1,
                boxShadow: "0 0 20px rgba(192, 132, 252, 0.6)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
            >
                <SiPytorch className="text-7xl text-orange-600"/>
            </motion.div>
            <motion.div 
            className="rounded-2xl border-4 border-neutral-800 p-4"
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            whileHover={{
                scale: 1.1,
                boxShadow: "0 0 20px rgba(192, 132, 252, 0.6)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
            >
                <FaHtml5 className="text-7xl text-red-600"/>
            </motion.div>
            <motion.div 
            className="rounded-2xl border-4 border-neutral-800 p-4"
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            whileHover={{
                scale: 1.1,
                boxShadow: "0 0 20px rgba(192, 132, 252, 0.6)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
            >
                <SiRust className="text-7xl text-orange-500"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Techstack