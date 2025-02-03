import { nav } from "../constraints/nav";
import exit from "../assets/svg/material-symbols_login-sharp.svg";
import { Link } from "react-router-dom";

const Nav = ({scrollToElements }) => {
  
  return (
    <nav className="flex xl:gap-4  chivo w-full xl:justify-between max-md:justify-evenly items-center xl:px-10">
      <button
        
        
        className="flex justify-center items-center"
      >
        {" "}
        <img src="logo.svg" className="w-full" alt="logo" />
      </button>

      <div className="max-md:text-sm font-extralight max-md:justify-self-center  min-xl:text-xl max-md:absolute ">
        {nav.map((data, index) => (
          
          <span key={data.label}>
            <button onClick={() => scrollToElements(index)} >
              {data.label} 
            </button>

            <span>/</span>
          </span>
        ))}
      </div>
      <div className="flex gap-2 ">
        <Link className="flex-none self-center" to="/commingsoon">
          SIGN IN
        </Link>
        <img src={exit} alt="exit" />
      </div>
    </nav>
  );
};

export default Nav;
