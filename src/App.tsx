import "./App.css";
import Home from "./pages/Home";
import Nav from "./componets/Nav";

function App() {
  return (
    <main className="w-full">
      <div className="mt-4">
        <Nav />
        <Home/>
  
      </div>
    </main>
  );
}

export default App;
