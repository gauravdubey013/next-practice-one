import Link from "next/link";
import React from "react";

const SignIn = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div className="form-container sign-in-container">
        <form
          // onSubmit={submit}
          action="#"
          className="bg-white flex items-center justify-center  flex-col h-full w-[300%]  text-center px-[50px] py-0"
        >
          <h1>Sign in</h1>
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
          <span className="text-xs">or use your account</span>
          {/* <input type="email" placeholder="Email" required /> */}
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            // autoComplete="off"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            // autoComplete="off"
            required
          />
          <Link
            className="text-[#333] text-sm no-underline mx-0 my-[15px]"
            href="#"
          >
            Forgot your password?
          </Link>
          <Link href={"/"}>
            <button
              type="submit"
              className="border bg-[#c778dd] text-[#ffffff] text-xs font-[bold] tracking-[1px] uppercase transition-transform duration-[80ms] ease-[ease-in] px-[45px] py-3 rounded-[20px] border-solid border-[#282C33] active:scale-95 focus:outline-none"
            >
              Sign In
            </button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default SignIn;
