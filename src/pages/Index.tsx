import { useRef } from "react";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Mail from "../componets/Mail";

const Index = ({refs}) => {
;

  return (
    <div className="overflow-y-scroll">
      <div className="h-screen w-full" >
        <Home />
      </div>
      <div className="h-screen w-full" ref={refs[0]}  id="about">
        <About />
      </div>
      <div className="h-screen w-full flex items-center" ref={refs[1]}  id="projects">
        <Projects />
      </div>
      <div className="h-screen w-full flex items-center" ref={refs[2]} id="contact">
        <Mail />
      </div>
    </div>
  );
};

export default Index;
