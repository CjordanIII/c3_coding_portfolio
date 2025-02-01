import HeadComponetOne from "../componets/HeadComponetOne";
import SubComponetOne from "../componets/SubComponetOne";
import arrow from "../assets/svg/prime_arrow-up.svg";
import Line from "../componets/Line";

const Home = () => {
  return (
    <>
   
        <div className="flex">
          <hr className="xl:h-[85vh]  ml-14 bg-black w-[1px] mt-10 max-sm:hidden" />
          <div className="w-full xl:mt-36 mt-16 flex justify-center ">
            <div className="flex flex-col items-center justify-center xl:w-11/12 max-md:w-9/12 md:w-5/12  chivo">
              <div className="text-left w-full xl:ml-10 ">
                <HeadComponetOne text="CLARENCE JORDAN" />
              </div>
              {/* TODO continue here */}
              <div className="text-right  ">
                <HeadComponetOne text="SOFTWARE ENGINEER" />
                <sub className="text-center">
                  <SubComponetOne text="Building custom web apps for small businesses" />
                </sub>
              </div>
              <span className="xl:pt-96 pt-5 pr-96 mr-96 flex">
                <img src={arrow} alt="arrow" />
                <a
                  href="https://forms.gle/FW8kV8txFr8L3Dad7"
                  className="self-center"
                >
                  REQUEST PROJECT
                </a>
              </span>
            </div>
          </div>
        </div>
        <Line />
      
    </>
  );
};

export default Home;
