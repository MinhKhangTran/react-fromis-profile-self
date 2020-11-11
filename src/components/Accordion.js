import React from "react";
import { accordion } from "../assets/data";

export default function Accordion() {
  return (
    <section className="w-screen bg-red-100 flex flex-col items-center h-screen justify-around ">
      <h1 className="justify-self-start text-red-900 md:text-6xl text-3xl mt-24">
        Die neusten <span className="text-red-500 font-bold">Alben</span>
      </h1>
      <article className="mb-24">
        {accordion.map((item) => {
          const { id, year, song, album } = item;
          return (
            <div className=" flex flex-col items-center md:my-12 my-5" key={id}>
              <h1 className="text-xl md:text-3xl md:font-semibold text-red-500">
                {album}
              </h1>
              <h1 className="my-2">Jahr: {year}</h1>
              <h1 className="my-2">Main Song:{song}</h1>
              <div className="bg-red-300 w-screen h-1"></div>
            </div>
          );
        })}
      </article>
    </section>
  );
}
