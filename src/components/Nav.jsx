import Logo from "/svgs/Logo.svg";
import Email from "/svgs/Icon_Email.svg";
import Address from "/svgs/Icon_Address.svg";
import Phone from "/svgs/Icon_Phone.svg";
import Search from "/svgs/SearchIcon.svg";
import { GoXCircleFill } from "react-icons/go";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="bg-white w-full hidden md:flex justify-between py-2 px-16">
        <div className="flex gap-x-2 items-center">
          <img src={Logo} className="w-[2rem] h-[2rem]" />
          <div className="text-left">
            <p className="text-[1rem] text-secondary poppins-semibold">
              Consultant connect
            </p>
            <p className="text-[#6c747c] mt-0 text-[0.875rem] poppins-medium">
              TOURISM & HOSPITALITY
            </p>
          </div>
        </div>

        <ul className="text-[#6c747c] text-[0.875rem] poppins-medium text-left flex gap-8">
          <li className="flex gap-x-2 items-center">
            <img src={Email} className="w-[1rem] h-[1rem]" />
            <div>
              <p>1010 Tourism & Hospital,</p>
              <p>Nigeria.</p>
            </div>
          </li>
          <li className="flex gap-x-2 items-center">
            <img src={Address} className="w-[1rem] h-[1rem]" />
            <div>
              <p>write us</p>
              <p>hospitalitybabalola@gmail.com</p>
            </div>
          </li>
          <li className="flex gap-x-2 items-center">
            <img src={Phone} className="w-[1rem] h-[1rem]" />
            <div>
              <p>212 456 879</p>
              <p>Free Call</p>
            </div>
          </li>
        </ul>
      </nav>
      <header className="w-full sticky top-0 z-50 ">
        <nav className="bg-secondary w-full h-10 flex  justify-between items-center px-3 md:px-[4rem] text-white text-[0.8rem] z-50 relative">
          <div className="flex gap-x-2 items-center md:hidden">
            <img
              src={Logo}
              className="md:w-[2rem] md:h-[2rem] w-[1.8rem] h-[1.8rem]"
            />

            <p className="md:text-[1rem] text-[0.5rem] poppins-semibold">
              Eco Consultancy
            </p>
          </div>
          <div
            className={`w-full md:h-full h-dvh md:justify-center md:items-center gap-x-8 uppercase flex flex-col text-white md:static md:flex-row justify-start gap-y-[2rem]  absolute left-0 top-0  z-[-20]  md:overflow-visible  overflow-scroll md:py-0 bg-secondary md:pl-0 pl-[2rem]  pt-[4rem] pb-[3rem] md:bg-transparent transition-all 
            ${
              isOpen
                ? "top-0 opacity-100"
                : "top-[-1000%] md:opacity-100 pointer-events-none md:pointer-events-auto opacity-0"
            }
            `}
          >
            <a href="#home" onClick={() => setIsOpen(false)}>
              Home
            </a>
            <a href="#about" onClick={() => setIsOpen(false)}>
              About Us
            </a>
            <a href="" onClick={() => setIsOpen(false)}>
              Find A consultant
            </a>
            <a href="#blog" onClick={() => setIsOpen(false)}>
              News & Blogs
            </a>
            <a href="#registeration" onClick={() => setIsOpen(false)}>
              Register
            </a>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact us
            </a>
            <img src={Search} className="w-[1rem] h-[1rem] hidden md:block" />
          </div>

          <button
            className=" py-[6px] md:py-[0.5rem] w-1/12 flex justify-center items-center hover:opacity-75 bg-primary rounded-md md:hidden transition-colors duration-300  text-white 
"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <GoXCircleFill /> : <CiMenuFries />}
          </button>
        </nav>
      </header>
    </>
  );
}

export default Nav;
