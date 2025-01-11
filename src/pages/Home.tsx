import HeadComponetOne from "../componets/HeadComponetOne";
import SubComponetOne from "../componets/SubComponetOne";
const Home = () => {
  return (
    <div>
      <HeadComponetOne text="CLARENCE JORDAN" />
      <div className="flex flex-col w-7/12">
        <div className="self-end ">
          <HeadComponetOne text="SOFTWARE ENGINEER" />
          <sub className="text-center">
          <SubComponetOne text="Building custom web apps for small businesses" />
          </sub>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
