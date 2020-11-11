import React from "react";
import { social } from "../assets/data";

export default function Social() {
  return (
    <div className="bg-teal-200 h-screen">
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
                <h1>
                  <a
                    className="flex items-center ml-4"
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {icon} <span className="ml-4">{titel}</span>
                  </a>
                </h1>
              </div>
            );
          })}
        </div>
      </article>
    </div>
  );
}
