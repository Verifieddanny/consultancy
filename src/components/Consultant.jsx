import Map from "/svgs/map.svg";
import OrangeArrow from "/svgs/OrangeArrow.svg";

function Consultant() {
  return (
    <>
      <div className="py-8 md:px-16 lg:px-48  px-5 flex md:flex-row flex-col gap-y-5 md:gap-x-8">
        <img src={Map} className="md:w-1/2 w-full object-cover" />
        <div>
          <p className=" text-secondary poppins-bold">Talk to a Consultant</p>
          <hr className="w-[4rem] border-primary border-[0.09rem] rounded-md" />
          <p className="text-secondary text-xs mt-3 poppins-medium">
            Select Your Region
          </p>
          <p className="text-[#32363a] poppins-thin text-xs mt-3">
            At Consultants Connect, we take pride in our achievements and
            milestones, as they reflect our unwavering commitment to excellence
            and dedication to providing exceptional hospitality and tourism
            experiences. Join us as we celebrate our accomplishments and the
            journey that has brought us to where we are today.
          </p>

          <div className="flex gap-2 items-center mt-5">
            <p className="text-secondary poppins-semibold text-xs">Read More</p>
            <img src={OrangeArrow} className="w-[0.5rem] h-[0.5rem]" />
          </div>
        </div>
      </div>

      <div className="bg-secondary md:px-16 px-5 py-4 flex justify-center flex-wrap gap-y-5 md:flex-nowrap  gap-x-32">
        <div className="text-white text-center">
          <p className="text-2xl poppins-bold">2400</p>
          <p className="uppercase text-xs">combined certificate</p>
        </div>

        <div className="text-white text-center">
          <p className="text-2xl poppins-bold">640</p>
          <p className="uppercase text-xs">project completed</p>
        </div>
        <div className="text-white text-center">
          <p className="text-2xl poppins-bold">12</p>
          <p className="uppercase text-xs">Awards & Recognition</p>
        </div>
        <div className="text-white text-center">
          <p className="text-2xl poppins-bold">1024</p>
          <p className="uppercase text-xs">ongoing projects</p>
        </div>
      </div>
    </>
  );
}

export default Consultant;
