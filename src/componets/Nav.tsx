import { nav } from "../constraints/nav";
import exit from "../assets/svg/material-symbols_login-sharp.svg";

const Nav = () => {
    // TODO change dead link to real link
  return (
    <nav className="flex gap-4 chivo w-full justify-between px-10">
      
        <img src="logo.svg" alt="logo" />
   
      <div className="text-xl font-extralight justify-self-center">
        {nav.map((data) => (
          <>
            <a href={data.href}>{data.label}</a>
            <span>/</span>
          </>
        ))}
      </div>
      <div className="flex gap-2 ">
        <a className="flex-none self-center" href="#">SIGN IN</a>
        <img src={exit} alt="exit" />
      </div>
    </nav>
  );
};

export default Nav;
