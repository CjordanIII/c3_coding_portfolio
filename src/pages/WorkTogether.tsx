import HeadComponetOne from "../componets/HeadComponetOne";
import HeaderOne from "../componets/HeaderOne";
import SubComponetOne from "../componets/SubComponetOne";
import { paragraph } from "../constraints/workingtogether";
import arrow from "../assets/svg/prime_arrow-up.svg";
const WorkTogether = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <HeaderOne head={<HeadComponetOne text="LET'S WORK TOGETHER" />} />
      <div className="w-full h-full flex justify-center ">
        <div className="w-2/4 flex flex-col gap-3 h-3/4 justify-center scale-150">
          <SubComponetOne text={paragraph} />
          <span className="flex ">
            <img src={arrow} alt="arrow" />
            <a href="https://forms.gle/FW8kV8txFr8L3Dad7" className="self-center">
              REQUEST PROJECT
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default WorkTogether;
