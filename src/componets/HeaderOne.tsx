import React from "react";

import Line from "./Line";

const HeaderOne:React.FC<{head:React.ReactElement<{text:string}>}> = ({head}) => {
  return (
    <>
      <span className="pl-20 w-full mt-32">
        {head}
      </span>
      <Line />
    </>
  );
};

export default HeaderOne;
