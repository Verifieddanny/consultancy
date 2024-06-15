import Logo from "/svgs/Logo.svg";
import Arrow from "/svgs/Arrow.svg";
import facebook from "/svgs/facebook.svg";
import twitter from "/svgs/twitter.svg";
import ig from "/svgs/ig.svg";
function Footer() {
  return (
    <div
      className="bg-secondary px-5 md:px-32 py-4 flex justify-center md:flex-row flex-col gap-y-8 md:gap-x-4 pb-4"
      id="contact"
    >
      <div className="text-white  md:w-[35%] w-full">
        <div className="flex gap-x-2 items-center">
          <img src={Logo} className="w-[2rem] h-[2rem]" />

          <p className="text-[1rem] poppins-semibold">Eco Consultancy</p>
        </div>

        <p className="mt-4 text-xs">
          Where Tourism & Hospitality Consultants meets the World, join us to
          make great impact in the world tourism and Hospitality Consultancy.
        </p>
        <p className="mt-2 text-xs">Copyright © 2024</p>
      </div>

      <div className="text-white  md:w-[35%] w-full">
        <p className="text-[1rem] poppins-semibold">Extra Links</p>
        <div className="mt-4 flex gap-x-4 text-xs">
          <ul className="poppins-semibold flex flex-col items-start gap-y-2">
            <li>Home</li>
            <li>About Us</li>
            <li>Service</li>
            <li>Technology</li>
            <li>News & Blogs</li>
          </ul>
          <ul className="flex flex-col items-start gap-y-2">
            <li>Digital innovation</li>
            <li>Career</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Sitemap</li>
          </ul>
        </div>
      </div>
      <div className="text-white md:w-[35%] w-full">
        <p className="text-[1rem] poppins-semibold">Subscribe</p>

        <p className="mt-4 text-xs">
          Sign up for Alerts, Special Offers, Education and Updates
        </p>
        <div className="mt-4 w-full flex item-center">
          <input
            type="email"
            className="w-[80%] bg-white text-xs pl-2 h-[2rem] rounded-l-md"
            placeholder="Enter Your E-mail"
          />
          <div className="w-[20%] h-[2rem] flex justify-center items-center bg-primary rounded-r-md">
            <img src={Arrow} className="w-[0.5rem] h-[0.5rem]" />
          </div>
        </div>

        <div className="mt-4 flex gap-x-4">
          <img src={facebook} className="w-[1rem] h-[1rem]" />
          <img src={twitter} className="w-[1rem] h-[1rem]" />
          <img src={ig} className="w-[1rem] h-[1rem]" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
