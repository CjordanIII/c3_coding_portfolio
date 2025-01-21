import "./App.css";
import Home from "./pages/Home";
import Nav from "./componets/Nav";
import {Routes,Route}  from "react-router"
import About from "./pages/About";
import Projects from "./pages/Projects";
import WorkTogether from "./pages/WorkTogether";

function App() {
  return (
    <main className="w-screen overflow-hidden  h-screen ">
      <div className="mt-4 w-screen h-screen">
        <Nav />
      
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/portfolio" element={<Projects/>}/>
          <Route path="/devonly" element={<WorkTogether/>}/>
        </Routes>
    
      </div>
    </main>
  );
}

export default App;
