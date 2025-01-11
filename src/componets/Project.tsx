import React from "react";
import { Projects } from "../constraints/projects.ts";
const Project: React.FC<Projects> = ({
  name,
  photo,
  linkToLiveWebsite,
  desc,
}) => {
  return (
    <div className="chivo flex w-full justify-around  h-full">
      <div className="w-6/12 h-6/12">
        <img src={photo} alt={name} />
      </div>
      <div className="font-normal w-1/3">
        <h6 className="text-3xl  pb-4">{name}</h6>
        <p className="text-xl w-3/4">{desc}</p>
        <a href={linkToLiveWebsite}>VIEW MORE</a>
      </div>

    </div>
  );
};

export default Project;
