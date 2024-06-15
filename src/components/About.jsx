import AboutConsultant from "/jpegs/about_consultant.jpg";
import OrangeArrow from "/svgs/OrangeArrow.svg";

function About() {
  return (
    <div
      className="py-8 md:pt-10 md:px-16 lg:px-48 px-5 w-full h-auto flex md:flex-row flex-col gap-y-4 md:gap-x-8"
      id="about"
    >
      <img
        src={AboutConsultant}
        className="md:w-1/2 md:h-auto h-[16rem] w-full object-contain"
      />
      <div>
        <p className=" text-secondary poppins-bold">About Consultant Connect</p>
        <hr className="w-[4rem] border-primary border-[0.09rem] rounded-md" />
        <p className="text-secondary text-xs mt-3 poppins-medium">
          Welcome to Consultant Connect, your premier partner in tourism and
          hotel management. We are dedicated to crafting exceptional experiences
          for travelers and maximizing the potential of hospitality businesses.
        </p>
        <p className="text-[#32363a] poppins-thin text-xs mt-3">
          At TH Consultants, our mission is to elevate the standard of tourism
          and hotel management through innovation, sustainability, and
          unparalleled service. We strive to create memorable moments for our
          guests while fostering growth and success for our partners.
        </p>

        <div className="flex gap-2 items-center mt-5">
          <p className="text-secondary poppins-semibold text-xs">Read More</p>
          <img src={OrangeArrow} className="w-[0.5rem] h-[0.5rem]" />
        </div>
      </div>
    </div>
  );
}

export default About;
