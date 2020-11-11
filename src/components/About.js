import React from "react";
import { aboutus } from "../assets/data";
import { aboutPic } from "../assets/data";
import { useScroll } from "../hook/useScroll";
import { scrollReveal } from "../animation";
import { motion } from "framer-motion";

export default function About() {
  const [element, controls] = useScroll();
  return (
    <motion.section
      className="h-screen w-screen bg-red-200 grid place-items-center"
      id="about"
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <article className="grid md:w-2/3 w-11/12 mx-auto">
        <div className="flex md:flex-row flex-col justify-between items-center">
          {aboutus.map((about) => {
            const { id, icon, text } = about;
            return (
              <div
                className="bg-red-300 md:p-4 p-2 my-2 rounded text-red-600 md:my-4 md:text-xl w-64 text-center"
                key={id}
              >
                <div className="flex justify-center">
                  <h1 className="text-5xl mb-2">{icon}</h1>
                </div>
                <h1>{text}</h1>
              </div>
            );
          })}
        </div>
        <div>
          <img className="rounded-lg" src={aboutPic} alt="fromis9" />
        </div>
      </article>
    </motion.section>
  );
}
