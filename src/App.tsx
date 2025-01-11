import "./App.css";
import Home from "./pages/Home";
import Nav from "./componets/Nav";

function App() {
  return (
    <main className="w-full">
      <div className=" gap-28 ">
        <Nav />

        <div className="flex ">
          <hr className="h-[88vh] ml-14 bg-black w-[1px] mt-10" />
          <div className="w-full mt-36">
            <Home />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
