import Line from "../componets/Line";

import HeadComponetTwo from "../componets/HeadComponetTwo";
import { aboutme } from "../constraints/aboutme.ts";
import Text from "../componets/Text";

const About = () => {
  return (
    <>
      <div className="flex flex-col items-start  ">
        <span className="pl-20 w-full">
          <HeadComponetTwo text="ABOUT" />
        </span>
        <Line />
        <div className="w-3/4 text-left pl-20">
          <Text text={aboutme} />
        </div>
      </div>
    </>
  );
};

export default About;
