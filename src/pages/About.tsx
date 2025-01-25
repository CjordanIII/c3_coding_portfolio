

import HeadComponetTwo from "../componets/HeadComponetTwo";
import { aboutme } from "../constraints/aboutme.ts";
import Text from "../componets/Text";
import HeaderOne from "../componets/HeaderOne.tsx";

const About = () => {
  return (
    <>
      <div className="flex flex-col items-start  ">
      
        <HeaderOne head={ <HeadComponetTwo text="ABOUT" />} />
        <div className="w-3/4 text-left pl-20 ">
          <Text text={aboutme} />
        </div>
      </div>
    </>
  );
};

export default About;
