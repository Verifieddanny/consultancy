import Spotlight1 from "/svgs/spotlight-1.svg";
import Spotlight2 from "/svgs/spotlight-2.svg";
import Spotlight3 from "/svgs/spottlight-3.svg";

function ConsultantSpotlight() {
  return (
    <div className="py-8 md:pt-10 w-full px-5 md:px-16 lg:px-48  bg-[#F1F8FF]">
      <p className=" text-secondary poppins-bold">Our Services</p>
      <hr className="w-[4rem] border-primary border-[0.09rem] rounded-md mb-10" />
      <div className="w-full flex md:flex-row flex-col gap-y-12 md:gap-x-8">
        <div className="p-5 rounded-sm bg-white">
          <div className="flex gap-x-2 items-center">
            <img src={Spotlight1} className="w-[3rem] h-[3rem]" />
            <div className="text-left">
              <p className="text-[0.9rem]  text-secondary poppins-semibold">
                Wunmi Adeola
              </p>
              <p className="text-primary mt-0 text-[0.675rem] poppins-medium">
                VP Sales
              </p>
            </div>
          </div>

          <p className="text-[#32363a] poppins-thin text-xs mt-3">
            &quot; Working with TH Consultants has been a game-changer for our
            sales team. Their expertly crafted travel packages have allowed us
            to impress clients and close deals like never before. Their
            attention to detail and commitment to excellence make them an
            invaluable partner in driving our sales efforts. &quot;
          </p>
        </div>{" "}
        <div className="p-5 rounded-sm bg-white">
          <div className="flex gap-x-2 items-center">
            <img src={Spotlight2} className="w-[3rem] h-[3rem]" />
            <div className="text-left">
              <p className="text-[0.9rem]  text-secondary poppins-semibold">
                Florence Lawrence
              </p>
              <p className="text-primary mt-0 text-[0.675rem] poppins-medium">
                Manager
              </p>
            </div>
          </div>

          <p className="text-[#32363a] poppins-thin text-xs mt-3">
            &quot; As a manager, I&apos;m constantly looking for ways to reward
            and motivate my team. TH Consultants&apos; incentive travel programs
            have been instrumental in boosting morale and driving performance.
            Our team members return from their trips refreshed, motivated, and
            ready to take on new challenges.&quot;
          </p>
        </div>{" "}
        <div className="p-5 rounded-sm bg-white">
          <div className="flex gap-x-2 items-center">
            <img src={Spotlight3} className="w-[3rem] h-[3rem]" />
            <div className="text-left">
              <p className="text-[0.9rem]  text-secondary poppins-semibold">
                Babalola Babs
              </p>
              <p className="text-primary mt-0 text-[0.675rem] poppins-medium">
                Director
              </p>
            </div>
          </div>

          <p className="text-[#32363a] poppins-thin text-xs mt-3">
            &quot; TH Consultants has been instrumental in helping us achieve
            our business objectives. Their strategic approach to travel planning
            has allowed us to strengthen client relationships, expand our market
            reach, and drive revenue growth. I highly recommend TH Consultants
            to any company looking to elevate their sales and marketing efforts.
            &quot;
          </p>
        </div>
      </div>
    </div>
  );
}

export default ConsultantSpotlight;
