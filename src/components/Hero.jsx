import HeroImage from "/jpegs/Hero Section.jpg";
import Arrow from "/svgs/Arrow.svg";
function Hero() {
  return (
    <div className="w-full md:h-[85dvh] h-screen relative" id="home">
      <img
        src={HeroImage}
        className="w-full h-full object-cover absolute brightness-50 -z-10"
      />

      <div className="w-full flex flex-col justify-center md:items-start items-center md:text-left text-center  h-full text-white md:pl-36">
        <p className=" md:text-[3rem] text-[1.25rem] poppins-bold mb-3">
          Establish, Grow and Scale <br /> the Business with us
        </p>
        <p className="md:text-[0.875rem] text-[0.6rem] poppins-medium mb-12">
          Where Tourism & Hospitality Consultants meet the World.
        </p>

        <button className="bg-primary md:w-[18rem] w-1/4 text-white md:px-8 px-2 md:py-4 py-2 rounded-sm flex items-center md:text-[1rem] text-[0.6rem] justify-center md:gap-x-4 gap-x-1 hover:bg-primary/70 transition-colors duration-300">
          learn more{" "}
          <img
            src={Arrow}
            className="md:w-[1rem] md:h-[1rem] w-[0.6rem] h-[0.6rem]"
          />
        </button>
      </div>
    </div>
  );
}

export default Hero;
