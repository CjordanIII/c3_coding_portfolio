import { nav } from "../constraints/nav";
import exit from "../assets/svg/material-symbols_login-sharp.svg";
import { Link } from "react-router";

const Nav = () => {
    
  return (
    <nav className="flex xl:gap-4  chivo w-full xl:justify-between justify-evenly xl:px-10">
        <Link to="/" className="flex justify-center items-center"> <img src="logo.svg" className="w-full" alt="logo" /></Link>
       
   
      <div className="max-md:text-sm font-extralight max-md:justify-self-center min-xl:text-xl max-md:absolute ">
        {nav.map((data) => (
          <span key={data.label}>
            <Link to={data.href}>{data.label}</Link>
          
            <span>/</span>
          </span>
        ))}
      </div>
      <div className="flex gap-2 ">
        <a className="flex-none self-center" href="/commingsoon">SIGN IN</a>
        <img src={exit} alt="exit" />
      </div>
      
    </nav>
  );
};

export default Nav;
