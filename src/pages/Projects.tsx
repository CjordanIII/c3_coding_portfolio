import HeadComponetOne from "../componets/HeadComponetOne";
import HeaderOne from "../componets/HeaderOne";
import Project from "../componets/Project";
import { projects } from "../constraints/projects";

const Projects = () => {
 
  return (
    <>
      <div className="flex flex-col overflow-hidden w-screen h-screen">
        <HeaderOne head={<HeadComponetOne text="PROJECTS" />} />
        <div className="self-center overflow-y-scroll w-screen h-screen overflow-x-hidden no-scrollbar">
          {projects.map((data) => (
            <Project
            key={data.name}
              name={data.name}
              photo={data.photo}
              linkToLiveWebsite={data.linkToLiveWebsite}
              desc={data.desc}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
