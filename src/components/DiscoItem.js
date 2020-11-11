import React from "react";
import { Link } from "react-router-dom";

export default function DiscoItem({ id, title, img }) {
  return (
    <Link to={`/disco/${id}`}>
      <article>
        <h1 className="md:text-6xl md:font-bold text-2xl font-semibold mt-2">
          {title}
        </h1>
        <div className="w-full h-2 bg-purple-400 mb-6"></div>
        <div>
          <img src={img} alt={title} />
        </div>
      </article>
    </Link>
  );
}
