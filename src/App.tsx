import "./App.css";
import Home from "./pages/Home";
import Nav from "./componets/Nav";
import {  Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import WorkTogether from "./pages/WorkTogether";
import Mail from "./componets/Mail";
import NotFound from "./pages/NotFound";
import CommingSoon from "./pages/CommingSoon";

import Index from "./pages/Index";






function App() {
  return (
   
      <main className="w-screen overflow-x-hidden h-screen background chivo">
        <div className="mt-4 w-screen h-screen">
          <Nav />
        
            <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/worktogether" element={<WorkTogether />} />
            <Route path="/mail" element={<Mail />} />
            <Route path="/commingsoon" element={<CommingSoon />} />
            <Route path="*" element={<NotFound />} /> {/* 404 Route */}
            </Routes>
          
        </div>
      </main>
   
  );
}

export default App;
