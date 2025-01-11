import "./App.css";
import Home from "./pages/Home";
import Nav from "./componets/Nav";
import {Routes,Route}  from "react-router"
import About from "./pages/About";

function App() {
  return (
    <main className="w-full">
      <div className="mt-4">
        <Nav />
      
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
    
      </div>
    </main>
  );
}

export default App;
