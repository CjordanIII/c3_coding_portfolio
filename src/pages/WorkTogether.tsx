import HeadComponetOne from "../componets/HeadComponetOne";
import HeaderOne from "../componets/HeaderOne";
import SubComponetOne from "../componets/SubComponetOne";
import { paragraph } from "../constraints/workingtogether";
import arrow from "../assets/svg/prime_arrow-up.svg";
const WorkTogether = () => {
  return (
    <div className="flex flex-col">
      <HeaderOne head={<HeadComponetOne text="LET'S WORK TOGETHER" />} />
      <div className="w-full h-full flex justify-center just">
        <div className="w-2/4">
          <SubComponetOne text={paragraph} />
          <span className="flex ">
            <img src={arrow} alt="arrow" />
            <a href="#" className="self-center">
              REQUEST PROJECT
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default WorkTogether;
