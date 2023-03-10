import logo from "../static/Images/logo.png";
function SignIn() {
  return (
    <>
      <div className="bg-[#F9FAFB] h-[100vh] flex justify-center">
        <div className="w-[100%] sm:w-[448px]">
          <div className="flex items-center justify-center mt-40">
            <img src={logo} alt="" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-xl font-bold">Login to your account</h2>
            <p>
              Or <span className="text-[#6875F5] font-semibold">register</span>
            </p>
          </div>
          <form className="bg-white py-8 my-10 sm:w-[448px] sm:rounded-md shadow-[-10px_1px_20px_10px_rgba(0,0,0,0.01)]">
            <div className="flex flex-col items-start  mx-[10px] my-3">
              <p className="text-left text-md font-medium">Email</p>
              <input
                type="text"
                name="lastName"
                className="w-[100%] focus:ring-0 border-[1px] decoration-0 outline-none py-2 px-4 rounded-md border-gray-300"
              />
            </div>
            <div className="flex flex-col items-start  mx-[10px] my-3">
              <p className="text-left text-lg font-medium">Password</p>
              <input
                type="text"
                name="lastName"
                className="w-[100%] focus:ring-0 border-[1px] decoration-0 outline-none py-2 px-4 rounded-md border-gray-300"
              />
            </div>
            <div className="flex flex-col items-end  mx-[10px] mb-3">
              <p className="text-right text-sm text-[#5262ec] font-medium">
                Forgot password?
              </p>
            </div>
            <div className="flex items-center justify-center w-full">
              <button
                // onClick={SubmitHandler}
                className="bg-[#5262ec] text-white w-[90%] py-[6px] rounded-[4px]"
              >
                To enter
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignIn;
