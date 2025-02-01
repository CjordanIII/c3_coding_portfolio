import  { useEffect, useRef } from "react";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Mail from "../componets/Mail";


const Index = () => {
  

  const divRef = useRef();

const scrollToElement = () => {
  const {current} = divRef
   if (current !== null){
     current.scrollIntoView({behavior: "smooth"})
   }
}

useEffect(scrollToElement, [])



  return (
    <div className="overflow-y-scroll">
      <div className="h-screen w-full  ">
        <Home />
      </div>
      <div className="h-screen w-full" id="about" ref={divRef}>
        <About />
      </div>
      <div className="h-screen w-full flex items-center" id="projects" ref={divRef}>
        <Projects />
      </div>
      <div className="h-screen w-full flex items-center" id="contact" ref={divRef}>
        <Mail />
      </div>
    </div>
  );
};

export default Index;
