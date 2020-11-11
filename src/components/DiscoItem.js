import React from "react";
import { Link } from "react-router-dom";
import { lineAnim, fade, photoAnim } from "../animation";
import { motion } from "framer-motion";

export default function DiscoItem({ id, title, img }) {
  return (
    <Link to={`/disco/${id}`}>
      <article>
        <motion.h1
          variants={fade}
          className="md:text-6xl md:font-bold text-2xl font-semibold mt-2"
        >
          {title}
        </motion.h1>
        <motion.div
          variants={lineAnim}
          className="w-full h-2 bg-purple-400 mb-6"
        ></motion.div>
        <div className="overflow-hidden">
          <motion.img variants={photoAnim} src={img} alt={title} />
        </div>
      </article>
    </Link>
  );
}
