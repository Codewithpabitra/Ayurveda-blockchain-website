import React from "react";
import { NavLink,Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div
      initial={{
        top: "0px",
        opacity: 0,
      }}
      animate={{
        top: "30px",
        opacity: 1,
      }}
      transition={{
        duration: 2,
        delay: 1,
      }}
    >
      <nav className="container fixed backdrop-blur-md z-50  mx-auto flex justify-between items-center px-6 py-4 text-lg rounded-xl text-neutral-400 w-full ">
        <NavLink
          className="hover:text-green-400 cursor-pointer transition-colors duration-300"
          to="/"
        >
          <img style={{height: '40px'}} className="rounded-full " src="../public/favicon.ico" alt="website-LOGO" />
        </NavLink>
        <ul className="flex items-center gap-5 ">
          <li className="cursor-pointer ">
            <NavLink
              to="/background"
              className={
                ({ isActive }) =>
                  isActive
                    ? "text-green-600"
                    : "hover:text-green-400 transition-colors duration-300" 
              }
            >
              Background
            </NavLink>
          </li>

          <li className=" cursor-pointer ">
            <NavLink to="/solution" className={
                ({ isActive }) =>
                  isActive
                    ? "text-green-600"
                    : "hover:text-green-400 transition-colors duration-300" 
              }>Solution</NavLink>
          </li>
          <li className=" cursor-pointer ">
            <NavLink to="/features" className={
                ({ isActive }) =>
                  isActive
                    ? "text-green-600"
                    : "hover:text-green-400 transition-colors duration-300" 
              }>Features</NavLink>
          </li>
          <li className=" cursor-pointer ">
            <NavLink to="/farmer-portal" className={
                ({ isActive }) =>
                  isActive
                    ? "text-green-600"
                    : "hover:text-green-400 transition-colors duration-300" 
              }>Farmer Portal</NavLink>
          </li>
          <li className=" cursor-pointer ">
            <NavLink to="/lab-portal" className={
                ({ isActive }) =>
                  isActive
                    ? "text-green-600"
                    : "hover:text-green-400 transition-colors duration-300" 
              } >Lab Portal</NavLink>
          </li>

          <li className=" cursor-pointer ">
            <NavLink to="/manufacturer-portal" className={
                ({ isActive }) =>
                  isActive
                    ? "text-green-600"
                    : "hover:text-green-400 transition-colors duration-300" 
              } >Manufacturer Portal</NavLink>
          </li>

          <li className=" cursor-pointer">
            <NavLink to="/track-product" className={
                ({ isActive }) =>
                  isActive
                    ? "text-green-600"
                    : "hover:text-green-400 transition-colors duration-300" 
              }>Track Product</NavLink>
          </li>
          <li className=" cursor-pointer">
            <NavLink to="/about" className={
                ({ isActive }) =>
                  isActive
                    ? "text-green-600"
                    : "hover:text-green-400 transition-colors duration-300" 
              }>About</NavLink>
          </li>
        </ul>
      </nav>
    </motion.div>
  );
};

export default Navbar;
