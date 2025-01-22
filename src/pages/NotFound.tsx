import React from "react";
import HeaderOne from "../componets/HeaderOne";
import HeadComponetOne from "../componets/HeadComponetOne";
import HeadComponetTwo from "../componets/HeadComponetTwo";

const NotFound = () => {
  return (
    <div className="flex flex-col items-start">
      <HeaderOne head={<HeadComponetOne text="404 NOT FOUND" />} />
      <div className="self-end pr-40">
        <HeadComponetTwo text="PAGE NOT FOUND" />
        <p className="text-xl w-3/5">
          The page you’re looking for doesn’t exist or something went wrong{" "}
        </p>
      </div>
    </div>
  );
};

export default NotFound;
