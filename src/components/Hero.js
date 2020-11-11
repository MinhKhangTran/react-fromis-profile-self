import React from "react";
import { hero } from "../assets/data";
import styled from "styled-components";

export default function Hero() {
  return (
    <header>
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
            <div className="absolute" style={{ left: "10%", top: "10%" }}>
              <div className="overflow-hidden">
                <h1 className="md:text-6xl text-3xl text-red-300 font-bold">
                  {text}
                </h1>
              </div>

              <div className="overflow-hidden">
                <h1 className="md:text-3xl text-xl text-red-100 font-semibold">
                  {desc}
                </h1>
              </div>
              <div className="overflow-hidden">
                <button className="mt-4 md:text-3xl text-xl bg-red-500 px-4 rounded-full text-red-100 font-semibold capitalize py-1 hover:bg-red-100 hover:text-red-500 transition transition-all duration-300 ease-in-out">
                  <a href="#about">{button}</a>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </header>
  );
}

const StyledImage = styled.div`
  .bild::before {
    content: "";
    background: rgba(0, 0, 0, 0.3);
    position: absolute;
    width: 100vw;
    height: 100vh;
  }
`;
