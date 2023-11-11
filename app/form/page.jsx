"use client";

import SignUp from "./signUp/page";
import SignIn from "./signIn/page";
import "../../app/styles/Form.css";

const Form = () => {
  const signUpClick = () => {
    container.classList.add("right-panel-active");
  };
  const signInClick = () => {
    container.classList.remove("right-panel-active");
  };

  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto bg-[#282C33] min-h-screen pt-20 flex items-center justify-center flex-wrap">
        <div
          className="container scale-95 md:scale-100 duration-500 bg-white shadow-[0_14px_28px_rgba(0,0,0,0.25),0_10px_10px_rgba(0,0,0,0.22)] relative overflow-hidden w-[968px] max-w-full min-h-[480px] rounded-[10px]"
          id="container"
        >
          <div className="form-container sign-up-container">
            {/* <!-- Sign Up form code goes here --> */}
            <SignUp />
          </div>
          <div className="form-container sign-in-container">
            {/* <!-- Sign In form code goes here --> */}
            <SignIn />
          </div>
          <div className="overlay-container">
            {/* <!-- The overlay code goes here --> */}
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <h1 className="font-[bold] m-0  lg:text-2xl md:text-1xl">
                    <span className=" underline underline-offset-4 decoration-[#c778dd] text-white">
                      Already have account?
                    </span>
                  </h1>
                  <p className="text-sm font-thin leading-5 tracking-[0.5px] mt-5 mb-[30px] mx-0">
                    Sign In here:
                  </p>
                  <button
                    className={`ghost{border bg-transparent text-[#ffffff] text-[12px] lg:text-xs font-[bold] tracking-[1px] uppercase transition-transform duration-[80ms] ease-[ease-in] px-[25px] md:px-[35px] lg:px-[45px] py-3 rounded-[20px] border-[.5px] border-solid border-[#e68aff] active:scale-95 focus:outline-none}`}
                    id="signIn"
                    onClick={signInClick}
                  >
                    Sign In
                  </button>
                </div>
                <div className="overlay-panel overlay-right">
                  <h1 className="font-[bold] m-0 lg:text-2xl md:text-1xl text-white">
                    Heya! <br />
                    <span className=" underline underline-offset-4 decoration-[#eca7ff] ">
                      New User?
                    </span>
                  </h1>
                  <p className="text-sm font-thin leading-5 tracking-[0.5px] mt-5 mb-[30px] mx-0">
                    Enter required info and start journey with us{":)"}
                  </p>
                  <button
                    className={`ghost{border bg-transparent text-[#ffffff] text-[12px] lg:text-xs font-[bold] tracking-[1px] uppercase transition-transform duration-[80ms] ease-[ease-in] px-[25px] md:px-[35px] lg:px-[45px] py-3 rounded-[20px] border-[.5px] border-solid border-[#e68aff] active:scale-95 focus:outline-none}`}
                    id="signUp"
                    onClick={signUpClick}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
