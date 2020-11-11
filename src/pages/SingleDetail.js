import React from "react";
import { useParams } from "react-router-dom";
import { MovieState } from "../assets/data";

export default function SingleDetail() {
  const { id } = useParams();
  return (
    <div>
      {MovieState.map((item) => {
        return console.log(item);
      })}
    </div>
  );
}
