import "./App.css";

import Nav from "./componets/Nav";
import { Route, Routes } from "react-router-dom";

import NotFound from "./pages/NotFound";
import CommingSoon from "./pages/CommingSoon";
import React, { useRef, useCallback } from "react";

import Index from "./pages/Index";
import { nav } from "./constraints/nav";

function App() {
  const elementsRefs = useRef(nav.map(() => React.createRef()));

  const scrollToElements = useCallback((index) => {
    const targetElement = elementsRefs.current[index].current;
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <main className="w-screen overflow-x-hidden h-screen background chivo">
      <div className="mt-4 w-screen h-screen">
        <Nav scrollToElements={scrollToElements} />

        <Routes>
          <Route path="/" element={<Index refs={elementsRefs.current} />} />
          {/* <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/worktogether" element={<WorkTogether />} />
            <Route path="/mail" element={<Mail />} />*/}
          <Route path="/commingsoon" element={<CommingSoon />} />
          <Route path="*" element={<NotFound />} /> {/* 404 Route */}
        </Routes>
      </div>
    </main>
  );
}

export default App;
