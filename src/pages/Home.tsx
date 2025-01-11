import HeadComponetOne from "../componets/HeadComponetOne";
import SubComponetOne from "../componets/SubComponetOne";
import arrow from "../assets/svg/prime_arrow-up.svg";
const Home = () => {
  return (
    <>
      <div className="flex ">
        <hr className="h-[85vh] ml-14 bg-black w-[1px] mt-10" />
        <div className="w-full mt-36">
          <div className="flex flex-col items-center w-11/12 chivo">
            <div className="text-left w-full ml-10">
              <HeadComponetOne text="CLARENCE JORDAN" />
            </div>

            <div className="text-right">
              <HeadComponetOne text="SOFTWARE ENGINEER" />
              <sub className="text-center">
                <SubComponetOne text="Building custom web apps for small businesses" />
              </sub>
            </div>
            <span className="pt-96 pr-96 mr-96 flex">
              <img src={arrow} alt="arrow" />
              <a href="# " className="self-center">
                REQUEST PROJECT
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="ml-12 flex items-center justify-center w-11/12">
        <span className="text-2xl text-center mr-1 mb-1">+</span>
        <hr className="flex-grow bg-black h-[2px] " />
      </div>
    </>
  );
};

export default Home;
