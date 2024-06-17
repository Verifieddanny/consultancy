import Register from "./RegistrationComponent/Register";

function Registration() {
  return (
    <div
      className="bg-primary flex justify-center md:items-start md:flex-row flex-col gap-y-12 md:gap-x-7 md:px-8 lg:px-36  px-5 py-5 md:py-12 "
      id="registeration"
    >
      <div className="bg-[#FCDED7] p-4 poppin-regular md:w-1/2 w-full ">
        <form action="#" className="w-full flex items-center flex-col gap-y-4">
          <p className="poppins-medium text-center text-xl"> Login form</p>
          <input
            type="text"
            placeholder="Enter Email Id"
            className="w-full h-[1.5rem] text-xs placeholder:text-gray-500 pl-2 rounded-md border-[1px] border-black"
          />
          <input
            type="text"
            placeholder="Enter Password"
            className="w-full h-[1.5rem] text-xs placeholder:text-gray-500 pl-2 rounded-md border-[1px] border-black"
          />

          <button className="py-2 px-4 bg-[#F05836] flex justify-center items-center w-1/2 mt-3 rounded-md">
            Login
          </button>
          <p className="text-[0.75rem] ">
            Don&apos;t have an account? <a href="#register">Register</a>
          </p>
        </form>
      </div>

      <Register />
    </div>
  );
}

export default Registration;
