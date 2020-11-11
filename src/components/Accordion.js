import React from "react";
import { accordion } from "../assets/data";
import { useScroll } from "../hook/useScroll";
import { scrollReveal } from "../animation";
import { motion } from "framer-motion";
import AccordionItem from "./AccordionItem";

export default function Accordion() {
  const [element, controls] = useScroll();

  return (
    <motion.section
      className="w-screen bg-red-100 flex flex-col items-center h-screen justify-around "
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <h1 className="justify-self-start text-red-900 md:text-6xl text-3xl mt-24">
        Die neusten <span className="text-red-500 font-bold">Alben</span>
      </h1>
      <article className="mb-24">
        {accordion.map((item) => {
          return <AccordionItem key={item.id} {...item} />;
        })}
      </article>
    </motion.section>
  );
}
