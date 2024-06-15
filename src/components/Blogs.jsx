import Community from "/jpegs/community_spotlight.jpg";
import HotelReview from "/jpegs/hotel_review.jpg";
import TravelTip from "/jpegs/travel_tips.jpg";
import OrangeArrow from "/svgs/OrangeArrow.svg";
function Blogs() {
  return (
    <div className="py-8 md:pt-10 w-full md:px-16 lg:px-48 px-5" id="blog">
      <p className=" text-secondary poppins-bold">Our Blogs & Social Media</p>
      <hr className="w-[4rem] border-primary border-[0.09rem] rounded-md" />
      <div className="w-full flex md:flex-row flex-col gap-y-12 md:gap-x-8">
        <div>
          <img
            src={Community}
            className="w-full h-[12rem] object-cover mb-2 mt-2"
          />

          <p className="text-secondary poppins-meduim mb-2">
            Community Spotlight
          </p>

          <p className="text-[#32363a] poppins-thin text-xs mt-3">
            In our community spotlight series, we&apos;ll shine a light on the
            incredible people and organizations who are making a difference in
            the communities where we operate. From local artisans and
            entrepreneurs to conservationists and activists, we&apos;ll
            celebrate the unsung heroes who are shaping the future of travel.
          </p>

          <div className="flex gap-2 items-center mt-5">
            <p className="text-secondary poppins-semibold text-xs">Read More</p>
            <img src={OrangeArrow} className="w-[0.5rem] h-[0.5rem]" />
          </div>
        </div>
        <div>
          <img
            src={HotelReview}
            className="w-full h-[12rem] object-cover mb-2 mt-2"
          />

          <p className="text-secondary poppins-meduim mb-2">
            Hotel Reviews and Recommendations
          </p>

          <p className="text-[#32363a] poppins-thin text-xs mt-3">
            Looking for the perfect place to stay? Our hotel reviews and
            recommendations will help you find the ideal accommodation for your
            next adventure. Whether you&apos;re seeking luxury and indulgence or
            charm and character, we&apos;ll help you find the perfect home away
            from home.
          </p>

          <div className="flex gap-2 items-center mt-5">
            <p className="text-secondary poppins-semibold text-xs">Read More</p>
            <img src={OrangeArrow} className="w-[0.5rem] h-[0.5rem]" />
          </div>
        </div>
        <div>
          <img
            src={TravelTip}
            className="w-full h-[12rem] object-cover mb-2 mt-2"
          />

          <p className="text-secondary poppins-meduim mb-2">
            Travel Tips and Tricks
          </p>

          <p className="text-[#32363a] poppins-thin text-xs mt-3">
            Planning a trip can be overwhelming, but fear not! Our travel
            experts are here to share their insider tips and tricks to help you
            plan the perfect getaway. From packing hacks to budget-friendly
            travel advice, we&apos;ve got you covered every step of the way
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

export default Blogs;
