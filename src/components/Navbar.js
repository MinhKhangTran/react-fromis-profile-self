import React from "react";
import { navbar } from "../assets/data";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="md:w-1/2 w-full fixed text-sm md:text-lg md:mt-8 md:mr-8 mt-4 top-0 right-0 flex justify-between  z-20">
      {navbar.map((navlink) => {
        return (
          <button
            className="ml-4 mr-4 bg-red-500 md:px-4 px-2 rounded-full text-red-100 md:font-semibold capitalize py-1 hover:bg-red-100 hover:text-red-500 transition transition-all duration-300 ease-in-out"
            key={navlink.id}
          >
            <Link to={navlink.url}>{navlink.text}</Link>
          </button>
        );
      })}
    </nav>
  );
}
