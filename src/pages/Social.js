import React from "react";
import { social } from "../assets/data";
import { pageTransition, titleAnim } from "../animation";
import { motion } from "framer-motion";
import ScrollTop from "../components/ScrollTop";

export default function Social() {
  return (
    <motion.div
      className="bg-teal-200 h-screen"
      variants={pageTransition}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <article className="md:w-4/5 w-11/12 mx-auto">
        <h1 className="pt-24 italic font-semibold text-teal-500 md:text-5xl text-3xl">
          Social Media
        </h1>
        <div
          className="w-full mt-8 grid place-items-center"
          style={{ height: "64vh" }}
        >
          {social.map((sns, index) => {
            const { icon, url, titel } = sns;
            return (
              <div
                key={index}
                className="justify-self-start text-3xl md:text-5xl hover:text-teal-500 transition transition-all duration-300 ease-in-out"
              >
                <motion.div className="overflow-hidden">
                  <motion.h1 variants={titleAnim}>
                    <a
                      className="flex items-center ml-4"
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {icon} <span className="ml-4">{titel}</span>
                    </a>
                  </motion.h1>
                </motion.div>
              </div>
            );
          })}
        </div>
      </article>
      <ScrollTop />
    </motion.div>
  );
}
