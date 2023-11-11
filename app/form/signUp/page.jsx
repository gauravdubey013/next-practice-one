import Link from "next/link";
import React from "react";

const SignUp = () => {
  const signUpClick = () => {
    container.classList.remove("right-panel-active");
  };
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div className="form-container sign-up-container">
        <form
          action="#"
          className="bg-white flex items-center justify-center  flex-col h-full w-[300%] ml-[-200%] text-center px-[50px] py-0"
        >
          <h1>Create Account</h1>
          <div className="social-container mx-0 my-5">
            <Link
              href="#"
              className={`social {text-[#333] text-sm no-underline mx-0 my-[15px]}`}
            >
              <i className="fa fa-facebook"></i>
            </Link>
            <Link
              href="#"
              className={`social {text-[#333] text-sm no-underline mx-0 my-[15px]}`}
            >
              <i className="fa fa-google-plus"></i>
            </Link>
            <Link
              href="#"
              className={`social {text-[#333] text-sm no-underline mx-0 my-[15px]}`}
            >
              <i className="fa fa-linkedin"></i>
            </Link>
          </div>
          <span className="text-xs">or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button
            onClick={signUpClick}
            className="border bg-[#c778dd] text-[#ffffff] text-xs font-[bold] tracking-[1px] uppercase transition-transform duration-[80ms] ease-[ease-in] px-[45px] py-3 rounded-[20px] border-solid border-[#282C33] active:scale-95 focus:outline-none"
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
