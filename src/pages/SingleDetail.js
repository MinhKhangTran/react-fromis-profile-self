import React from "react";
import { useParams } from "react-router-dom";
import { movieState } from "../assets/data";
import { pageTransition } from "../animation";
import { motion } from "framer-motion";
import ScrollTop from "../components/ScrollTop";

export default function SingleDetail() {
  const { id } = useParams();
  const uniquePage = [movieState.find((movie) => movie.url === id)];
  // uniquePage.map((item) => console.log(item.title));
  return (
    <motion.div
      className="bg-pink-200"
      variants={pageTransition}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {uniquePage.map((item, index) => {
        const { title, mainImg, secondaryImg, awards } = item;
        return (
          <div key={index}>
            <h1 className="text-center pt-24 text-2xl md:text-4xl font-bold mb-4">
              {title}
            </h1>
            <div className="mx-auto" style={{ width: "75vw", height: "65vh" }}>
              <img
                className="h-full w-full object-cover rounded-lg shadow-xl"
                src={mainImg}
                alt={title}
              />
            </div>
            <div className="my-2 flex md:flex-no-wrap flex-wrap justify-between md:w-4/5 w-11/12 mx-auto">
              {awards.map((award, index) => {
                const { title, description } = award;
                return (
                  <article
                    className="border-2 border-pink-600 rounded-lg md:p-4 md:m-4 p-2 m-2 flex flex-col justify-center items-center"
                    key={index}
                  >
                    <h1 className="font-bold">{title}</h1>
                    <div className="w-11/12 bg-pink-600 h-1 mx-auto"></div>
                    <p className="p-4">{description}</p>
                  </article>
                );
              })}
            </div>

            <img
              className="w-screen object-cover"
              src={secondaryImg}
              alt={title}
            />
          </div>
        );
      })}
      <ScrollTop />
    </motion.div>
  );
}
