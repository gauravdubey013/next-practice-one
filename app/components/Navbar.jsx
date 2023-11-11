'use client'

import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineClose } from 'react-icons/ai';
import { CiHome , CiCoffeeCup, CiSatellite1, CiPhone, CiWheat, CiUser } from 'react-icons/ci';
import Image from "next/image";

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className="fixed left-0 top-0 right-0 bg-[#282C33] z-10">    {/* drop-shadow-[0_35px_35px_rgba(199,120,221,0.25)]   */}
      <div className="max-w-[1560px] mx-auto px-5 flex items-center justify-between pt-4 my-2 ">
        <div className="left flex gap-2 items-center font-bold text-[#ffffff] text-base">
          <div onClick={()=>setToggle(true)} className="closeOpenBtn flex mt-[-0.3rem] ml-[-0.3rem]">
            <div className="open block md:hidden w-7 ">
              <div className="w-full h-[1px] my-2 rounded-r-3xl bg-[#d9d9d9] hover:bg-[#c778dd]"></div>
              <div className="w-full h-[1px] my-2 rounded-r-3xl bg-[#d9d9d9] hover:bg-[#c778dd]"></div>
              <div className="w-full h-[1px] my-2 rounded-r-3xl bg-[#d9d9d9] hover:bg-[#c778dd]"></div>
            </div>
          </div>
          {/* <CiWheat size={40}/> */}
          <div className="img ml-2 flex gap-2 hover:text-[#c778dd] cursor-pointer">
            <Image
              src={require('../../public/Logo.png')}
              alt="Picture of the author"
              width="3px"
              height="3px"
            />
          GDClub
          </div>
        </div>
        <div className="right text-[#abb2bf] flex items-center">
          <div className={`menu duration-300 flex-col justify-center h-auto md:flex-row flex fixed ${!toggle ? ` w-full left-[-100%] top-0 bottom-0 ease-in-out duration-650` : `left-0 md:left-[-100%] top-0 bottom-0 w-[12rem] md:w-auto ease-in-out duration-500 `} bg-[#282C33] md:static`}>
            <Link href={'/'} className="hoverText"><CiHome className="text-[#c778dd]"/>Home</Link>
            <Link href={'/work'}><li className="hoverText"><CiCoffeeCup className="text-[#c778dd]"/>Work</li></Link>
            <Link href={'/about'}><li className="hoverText"><CiSatellite1 className="text-[#c778dd]"/>About-me</li></Link>
            <Link href={'/contact'}><li className="hoverText"><CiPhone className="text-[#c778dd]"/>Contacts</li></Link>

            <div onClick={()=>setToggle(false)} className="close flex absolute gap-2 justify-between items-center md:hidden left-3.5 top-6">
                <AiOutlineClose className="hover:text-[#c778dd]" size={30}/>
                <div className="img ml-2 flex gap-2 hover:text-[#c778dd] cursor-pointer">
            <Image
              src={require('../../public/Logo.png')}
              alt="Picture of the author"
              width="3px"
              height="3px"
            />
          GDClub
          </div>
              </div>
          </div>
            <Link href={'/form'} className="circle">
          <CiUser size={25} className="hover:text-[#c778dd] ml-[2.5px] mt-[1.5px]"/></Link>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;