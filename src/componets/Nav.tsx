import { nav } from "../constraints/nav";
import exit from "../assets/svg/material-symbols_login-sharp.svg";
import { Link } from "react-router";

const Nav = () => {
    // TODO change dead link to real link
  return (
    <nav className="flex xl:gap-4  chivo w-full justify-between xl:px-10">
        <Link to="/"> <img src="logo.svg" alt="logo" /></Link>
       
   
      <div className="text-xl font-extralight justify-self-center xl:block hidden">
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
