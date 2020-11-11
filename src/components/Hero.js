import React from "react";
import { hero } from "../assets/data";
import styled from "styled-components";
import { titleAnim } from "../animation";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <header className="">
      {hero.map((held, index) => {
        const { heroImg, text, desc, button } = held;
        return (
          <div className="relative" key={index}>
            <StyledImage>
              <div className="w-screen h-screen bild overflow-hidden relative">
                <img
                  className="h-full w-full object-cover"
                  src={heroImg}
                  alt={text}
                />
              </div>
            </StyledImage>
            <motion.div
              className="absolute"
              style={{ left: "10%", top: "15%" }}
            >
              <div className="overflow-hidden">
                <motion.h1
                  variants={titleAnim}
                  className="md:text-6xl text-3xl text-red-300 font-bold"
                >
                  {text}
                </motion.h1>
              </div>

              <div className="overflow-hidden">
                <motion.h1
                  variants={titleAnim}
                  className="md:text-3xl text-xl text-red-100 font-semibold"
                >
                  {desc}
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.button
                  variants={titleAnim}
                  className="mt-4 md:text-3xl text-xl bg-red-500 px-4 rounded-full text-red-100 font-semibold capitalize py-1 hover:bg-red-100 hover:text-red-500 transition transition-all duration-300 ease-in-out"
                >
                  <a href="#about">{button}</a>
                </motion.button>
              </div>
            </motion.div>
          </div>
        );
      })}
    </header>
  );
}

const StyledImage = styled.div`
  .bild::before {
    content: "";
    background: rgba(0, 0, 0, 0.7);
    position: absolute;
    width: 100vw;
    height: 100vh;
  }
`;
