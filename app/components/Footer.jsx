import React from "react";
import "../../app/styles/Footer.css";

const Footer = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      {/*GOOGLE FONTS*/}
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Play&display=swap"
        rel="stylesheet"
      />
      <footer>
        <div className="footer">
          <div className="row">
            <a href="#">
              <i className="fa fa-facebook" />
            </a>
            <a href="#">
              <i className="fa fa-instagram" />
            </a>
            <a href="#">
              <i className="fa fa-youtube" />
            </a>
            <a href="#">
              <i className="fa fa-twitter" />
            </a>
          </div>
          <div className="row">
            <ul>
              <li className="text-[2rem]">GDClub</li>
            </ul>
          </div>
          <div className="row">
            Copyright ©GDClub 2023 GD - All rights reserved || Designed By: Gaurav
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
