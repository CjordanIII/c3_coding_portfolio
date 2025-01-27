import "./App.css";
import Home from "./pages/Home";
import Nav from "./componets/Nav";
import {Routes,Route}  from "react-router"
import About from "./pages/About";
import Projects from "./pages/Projects";
import WorkTogether from "./pages/WorkTogether";
import Mail from "./componets/Mail";
import NotFound from "./pages/NotFound";
import CommingSoon from "./pages/CommingSoon";
import Index from "./pages/Index";

function App() {
  return (
    <main className="w-screen overflow-x-hidden  h-screen background chivo">
      <div className="mt-4 w-screen h-screen">
        <Nav />

        <Routes>
          <Route index element={<Index/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/portfolio" element={<Projects/>}/>
          <Route path="/contact" element={<Mail/>}/>
          <Route path="/commingsoon" element={<CommingSoon/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    
      </div>
    </main>
  );
}

export default App;
