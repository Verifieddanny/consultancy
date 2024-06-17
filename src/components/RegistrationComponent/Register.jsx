import { useState } from "react";
import { country_list, state_list } from "../../utils/Countries-State";

function Register() {
  const [userCountryCode, setUserCountryCode] = useState("");
  const [userStateCode, setUserStateCode] = useState("");

  const selectCountry = (e) => {
    setUserCountryCode(e.target.value);
    setUserStateCode("");
  };
  const selectState = (e) => {
    setUserStateCode(e.target.value);
  };
  return (
    <div
      id="register"
      className="bg-[#FCDED7] p-4 poppin-regular md:w-1/2 w-full
      "
    >
      <form action="#" className="w-full flex items-center flex-col gap-y-4">
        <p className="poppins-medium w-full text-xl"> Registration form</p>
        <div className="w-full flex gap-x-8">
          <div className="w-full">
            <label className="text-xs" htmlFor="first-name">
              First Name
            </label>
            <input
              id="first-name"
              type="text"
              className="w-full h-[1.5rem] text-xs placeholder:text-gray-500 pl-2 rounded-md border-[1px] border-black"
            />
          </div>
          <div className="w-full">
            <label className="text-xs" htmlFor="last-name">
              Last Name
            </label>
            <input
              id="last-name"
              type="text"
              className="w-full h-[1.5rem] text-xs placeholder:text-gray-500 pl-2 rounded-md border-[1px] border-black"
            />
          </div>
        </div>
        <div className="w-full flex gap-x-8">
          <div className="w-full">
            <label className="text-xs" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full h-[1.5rem] text-xs placeholder:text-gray-500 pl-2 rounded-md border-[1px] border-black"
            />
          </div>
          <div className="w-full">
            <label className="text-xs" htmlFor="tel">
              Phone Number
            </label>
            <input
              id="tel"
              type="tel"
              className="w-full h-[1.5rem] text-xs placeholder:text-gray-500 pl-2 rounded-md border-[1px] border-black"
            />
          </div>
        </div>
        <div className="w-full flex gap-x-8">
          <div className="w-full">
            <label className="text-xs" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full h-[1.5rem] text-xs placeholder:text-gray-500 pl-2 rounded-md border-[1px] border-black"
            />
          </div>
          <div className="w-full">
            <label className="text-xs" htmlFor="c-passowrd">
              Confirm Password
            </label>
            <input
              id="c-passowrd"
              type="text"
              className="w-full h-[1.5rem] text-xs placeholder:text-gray-500 pl-2 rounded-md border-[1px] border-black"
            />
          </div>
        </div>
        <div className="w-full flex gap-x-8">
          <div className="w-full">
            <label className="text-xs" htmlFor="gender">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              className="w-full placeholder:text-gray-500 text-xs pl-2 rounded-md border-[1px] border-black h-[1.5rem] bg-white"
            >
              <option value=""></option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="w-full">
            <label className="text-xs" htmlFor="country">
              Country
            </label>
            <select
              id="country"
              name="country"
              className="w-full placeholder:text-gray-500 text-xs pl-2 rounded-md border-[1px] border-black h-[1.5rem] bg-white"
              onChange={(e) => selectCountry(e)}
            >
              <option value=""></option>
              {Object.entries(country_list || {}).map(
                ([countryCode, countryName]) => (
                  <option
                    key={countryCode}
                    value={countryCode}
                    selected={countryCode === userCountryCode}
                  >
                    {countryName}
                  </option>
                )
              )}
            </select>
          </div>
        </div>
        <div className="w-full flex gap-x-8">
          <div className="w-full">
            <label className="text-xs" htmlFor="state">
              State
            </label>
            <select
              id="state"
              name="state"
              className="w-full placeholder:text-gray-500 text-xs pl-2 rounded-md border-[1px] border-black h-[1.5rem] bg-white"
              onChange={(e) => selectState(e)}
            >
              {Object.values(state_list[userCountryCode] || {}).map(
                ({ name, code }) => (
                  <option
                    key={code}
                    value={code}
                    selected={code === userStateCode}
                  >
                    {name}
                  </option>
                )
              )}
            </select>
          </div>
          <div className="w-full">
            <label className="md:text-xs text-[0.6rem]" htmlFor="eduation">
              Educational Qualification
            </label>
            <select
              id="education"
              name="education"
              className="w-full placeholder:text-gray-500 text-xs pl-2 rounded-md border-[1px] border-black h-[1.5rem] bg-white"
            >
              <option value=""></option>
              <option value="high_school">High School Diploma</option>
              <option value="associate">Associate Degree</option>
              <option value="bachelor">Bachelor&apos;s Degree</option>
              <option value="master">Master&apos;s Degree</option>
              <option value="doctorate">Doctorate (PhD)</option>
              <option value="professional">
                Professional Degree (e.g., JD, MD)
              </option>
              <option value="trade">Trade School Certificate</option>
            </select>
          </div>
        </div>

        <button className="py-1 px-4 w-full bg-[#F05836] flex justify-center items-center  mt-3 rounded-md ">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;

// sudo ./xampp-linux-x64-8.0.30-0-installer.run
