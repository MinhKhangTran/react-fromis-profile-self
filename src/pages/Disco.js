import React from "react";
import { discography } from "../assets/data";
import DiscoItem from "../components/DiscoItem";
import { pageTransition } from "../animation";
import { motion } from "framer-motion";
import ScrollTop from "../components/ScrollTop";

export default function Disco() {
  return (
    <motion.section
      className="bg-purple-200"
      variants={pageTransition}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <article className="w-11/12 md:w-4/5 mx-auto pt-16 pb-8">
        {discography.map((disco) => {
          return <DiscoItem key={disco.id} {...disco} />;
        })}
      </article>
      <ScrollTop />
    </motion.section>
  );
}
