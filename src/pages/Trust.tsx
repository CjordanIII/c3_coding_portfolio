import HeaderOne from "../componets/HeaderOne";
import HeadComponetTwo from "../componets/HeadComponetTwo";
// TODO finish later
const Trust = () => {
  return (
    <div className="flex flex-col">
      <div>
        <HeaderOne
          head={<HeadComponetTwo text="TRUSTED BY SUCCESSFUL ORGANIZATIONS" />}
        />
      </div>
    </div>
  );
};

export default Trust;
