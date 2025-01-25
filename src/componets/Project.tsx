import React from "react";
import { Projects } from "../constraints/projects.ts";
import arrow from "../assets/svg/prime_arrow-up.svg"
const Project: React.FC<Projects> = ({
  name,
  photo,
  linkToLiveWebsite,
  desc,
}) => {
  return (
    <div className="chivo flex w-full justify-around max-md:flex-col items-center h-full max-md:justify-evenly">
      <div className="w-6/12 h-6/12 max-md:w-10/12 max-md:h-10/12">
        <img src={photo} alt={name} />
      </div>
      <div className="font-normal w-1/3 flex flex-col gap-5 max-md:w-11/12 max-md:text-center">
        <h6 className="text-3xl  pb-4">{name}</h6>
        <p className="text-xl w-3/4 max-md:w-full">{desc}</p>
        <a href={linkToLiveWebsite} className="flex gap-1 max-md:justify-center"><img src={arrow}/>VIEW MORE</a>
      </div>

    </div>
  );
};

export default Project;
