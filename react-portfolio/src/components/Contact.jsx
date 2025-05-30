import { useState } from "react";
import { CONTACT } from "../constants"

import axios from "axios";

import { motion } from "motion/react";

const Contact = () => {
  const [sender, setSender] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  const sendMail = (e) => {
    e.preventDefault(); 

    axios
      .post("https://react-portfolio-server-zeta.vercel.app", {
        sender,
        email,
        subject,
        message,
      })
      .then(() => {
        alert("Message sent successfully!");
        setSender("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch(() => {
        console.log("Failure");
      });
  };

  return (
  <div className="border-b border-neutral-900 pb-20">
  <motion.h2 
    whileInView={{opacity: 1, y: 0}}
    initial={{opacity: 0, y: -100}}
    transition={{duration: 0.5}}
    className="my-10 text-center text-4xl"
  >
    Get in Touch
  </motion.h2>

  
    <div className="flex justify-center px-4">
      <div className="w-full max-w-2xl">
        <form className="flex flex-col gap-4 w-full bg-neutral-900/50 p-8 rounded-2xl shadow-xl backdrop-blur-md">

          <input
            type="text"
            placeholder="Enter your name"
            required
            className="w-full bg-transparent border-0 border-b border-neutral-500 focus:border-purple-400 focus:outline-none placeholder-neutral-400 text-white py-2"
            onChange={(e) => setSender(e.target.value)}
          />

          <input
            type="email"
            placeholder="Enter your email"
            required
            className="w-full bg-transparent border-0 border-b border-neutral-500 focus:border-purple-400 focus:outline-none placeholder-neutral-400 text-white py-2"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="text"
            placeholder="Subject"
            required
            className="w-full bg-transparent border-0 border-b border-neutral-500 focus:border-purple-400 focus:outline-none placeholder-neutral-400 text-white py-2"
            onChange={(e) => setSubject(e.target.value)}
          />

          <textarea
            placeholder="Enter your message"
            required
            className="w-full bg-transparent border-0 border-b border-neutral-500 focus:border-purple-400 focus:outline-none placeholder-neutral-400 text-white py-2"
            onChange={(e) => setMessage(e.target.value)}
          />

          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl border border-purple-400 bg-gradient-to-br from-violet-500/40 to-indigo-500/20 px-8 py-3 text-lg font-medium text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-violet-600/50 hover:shadow-xl"
            onClick={sendMail}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Contact