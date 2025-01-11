import HeadComponetOne from "../componets/HeadComponetOne";
import SubComponetOne from "../componets/SubComponetOne";
const Home = () => {
  return (
    <div className="flex flex-col items-center w-11/12">
      <div className="text-left w-full ml-10">
        <HeadComponetOne text="CLARENCE JORDAN" />
      </div>

      <div className="text-right">
        <HeadComponetOne text="SOFTWARE ENGINEER" />
        <sub className="text-center">
          <SubComponetOne text="Building custom web apps for small businesses" />
        </sub>
      </div>
    </div>
  );
};

export default Home;
