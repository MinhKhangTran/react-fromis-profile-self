import React from "react";
import { Hero, About, Accordion } from "../components";
import { pageTransition } from "../animation";
import { motion } from "framer-motion";
import ScrollTop from "../components/ScrollTop";

export default function Home() {
  return (
    <motion.section
      variants={pageTransition}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Hero />
      <About />
      <Accordion />
      <ScrollTop />
    </motion.section>
  );
}
