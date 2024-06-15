import BusinessAnalysis from "/svgs/BusinessAnalysis.svg";
import BusinessTransformation from "/svgs/BusinessTransformation.svg";
import Sale from "/svgs/Sales.svg";
import OrangeArrow from "/svgs/OrangeArrow.svg";

function Service() {
  return (
    <div className="py-8 w-full md:px-16 lg:px-48  px-5 bg-[#F1F8FF]">
      <p className=" text-secondary poppins-bold">Our Services</p>
      <hr className="w-[4rem] border-primary border-[0.09rem] rounded-md" />
      <div className="w-full flex md:flex-row flex-col gap-y-8 md:gap-x-8">
        <div>
          <img src={BusinessAnalysis} className="w-[3rem] h-[3rem] mb-2 mt-2" />

          <p className="text-secondary poppins-meduim mb-2">
            Business Analysis
          </p>

          <p className="text-[#32363a] poppins-thin text-xs mt-3">
            Consultants Connects has been operating in the hospitality industry
            for several years. This business analysis aims to provide an
            overview of the company&apos;s current performance, identify areas
            of strength and improvement, and outline strategic recommendations
            for future growth and success.
          </p>

          <div className="flex gap-2 items-center mt-5">
            <p className="text-secondary poppins-semibold text-xs">Read More</p>
            <img src={OrangeArrow} className="w-[0.5rem] h-[0.5rem]" />
          </div>
        </div>
        <div>
          <img
            src={BusinessTransformation}
            className="w-[3rem] h-[3rem] mb-2 mt-2"
          />

          <p className="text-secondary poppins-meduim mb-2">
            Business Transformation
          </p>

          <p className="text-[#32363a] poppins-thin text-xs mt-3">
            Before embarking on this transformational journey, we conducted a
            comprehensive assessment of TH Consultants&apos; current state. This
            involved analyzing our operations, assessing market trends, and
            gathering feedback from clients and stakeholders. Through this
            process, we identified areas....
          </p>

          <div className="flex gap-2 items-center mt-5">
            <p className="text-secondary poppins-semibold text-xs">Read More</p>
            <img src={OrangeArrow} className="w-[0.5rem] h-[0.5rem]" />
          </div>
        </div>
        <div>
          <img src={Sale} className="w-[3rem] h-[3rem] mb-2 mt-2" />

          <p className="text-secondary poppins-meduim mb-2">
            Marketing and Sales
          </p>

          <p className="text-[#32363a] poppins-thin text-xs mt-3">
            Welcome to TH Consultants, your premier destination for
            unforgettable hospitality and tourism experiences. With a passion
            for excellence and a commitment to innovation, we are dedicated to
            exceeding your expectations and creating memories that last a
            lifetime.
          </p>

          <div className="flex gap-2 items-center mt-5">
            <p className="text-secondary poppins-semibold text-xs">Read More</p>
            <img src={OrangeArrow} className="w-[0.5rem] h-[0.5rem]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
