import logo from "../static/Images/logo.png";
function SignUp() {
  return (
    <>
      <div className="bg-[#F9FAFB] h-[100vh] flex justify-center">
        <div>
          <div className="flex items-center justify-center mt-40">
            <img src={logo} alt="" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-xl font-bold">create new account</h2>
            <p>
              Or{" "}
              <span className="text-[#6875F5] font-semibold">
                log into your existing account
              </span>
            </p>
          </div>
          <form className="bg-white py-5 my-10 sm:w-[448px] sm:rounded-md shadow-[-10px_1px_20px_10px_rgba(0,0,0,0.1)]">
            <div className="flex flex-col items-start  mx-[10px] my-3">
              <p className="text-left text-md font-medium">Email</p>
              <input
                type="text"
                name="email"
                className="w-[100%] focus:ring-0 border-[1px] decoration-0 outline-none py-2 px-4 rounded-md border-gray-300"
              />
            </div>
            <div className="flex flex-col items-start  mx-[10px] my-3">
              <p className="text-left text-lg font-medium">repeat email</p>
              <input
                type="text"
                name="email"
                className="w-[100%] focus:ring-0 border-[1px] decoration-0 outline-none py-2 px-4 rounded-md border-gray-300"
              />
            </div>
            <div className="flex flex-col items-start  mx-[10px] my-3">
              <p className="text-left text-lg font-medium">Password</p>
              <input
                type="text"
                name="password"
                className="w-[100%] focus:ring-0 border-[1px] decoration-0 outline-none py-2 px-4 rounded-md border-gray-300"
              />
            </div>
            <div className="flex  mx-[10px]">
              <div className="w-[15%] bg-lightColor flex justify-center pt-5">
                <input
                  type="checkbox"
                  className="h-5 w-5  border-none focus:ring-0  rounded-md"
                />
              </div>
              <div className="w-[85%]">
                <p className="font-text text-sm font-semibold my-4">
                  I have read and accept Kiwify's{" "}
                  <span className="underline">
                    terms of use software license terms, content policy.
                  </span>
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center w-full">
              <button
                // onClick={SubmitHandler}
                className="bg-[#5262ec] text-white w-[90%] py-[6px] rounded-[4px]"
              >
                Create an account
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
