import React from "react";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Mail from "../componets/Mail";

const Index = () => {
  return (
    <>
      <div className="h-screen w-full  ">
        <Home />
      </div>
      <div className="h-screen w-full ">
        <About />
      </div>
      <div className="h-screen w-full flex items-center">
        <Projects />
      </div>
      <div className="h-screen w-full flex items-center">
        <Mail />
      </div>
    </>
  );
};

export default Index;
