import logo from "../assets/rumethHerathLogo.png"
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";


const navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center relative group overflow-hidden rounded-lg">
        <img 
        className="mx-2 w-15 object-cover transition-transform duration-300 group-hover:scale-105" 
        src={logo} 
        alt="logo"/>
        <div
        className="absolute inset-0 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 opacity-0 group-hover:opacity-70 transition-opacity duration-300"
        ></div>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/rumeth-herath/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-blue-600 transition-colors duration-300 text-3xl"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/RumethH"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-black transition-colors duration-300 text-3xl"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.instagram.com/rumeth.h/?igsh=MTFlOXp2eDVmYnJ2cg%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-pink-500 transition-colors duration-300 text-3xl "
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  )
}

export default navbar