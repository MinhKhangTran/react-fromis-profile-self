import React from "react";

export default function AccordionItem({ year, song, album, id }) {
  const [toggle, setToggle] = React.useState(false);

  return (
    <div
      className=" flex flex-col items-center md:my-12 my-5 cursor-pointer overflow-hidden"
      onClick={() => {
        setToggle(!toggle);
      }}
    >
      <h1 className="text-xl md:text-3xl md:font-semibold text-red-500">
        {album}
      </h1>

      {toggle && (
        <div className="h-auto text-center transition transition-all duration-700 ease-in-out">
          <h1 className="">
            <span className="underline">Jahr:</span> {year}
          </h1>
          <h1 className="">
            <span className="underline">Main Song:</span>
            {song}
          </h1>
        </div>
      )}

      <div className="bg-red-300 w-screen h-1"></div>
    </div>
  );
}
