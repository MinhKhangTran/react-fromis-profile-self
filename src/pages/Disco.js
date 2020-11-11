import React from "react";
import { discography } from "../assets/data";
import DiscoItem from "../components/DiscoItem";

export default function Disco() {
  return (
    <section className="bg-purple-200">
      <article className="w-11/12 md:w-4/5 mx-auto pt-16 pb-8">
        {discography.map((disco) => {
          return <DiscoItem key={disco.id} {...disco} />;
        })}
      </article>
    </section>
  );
}
