import React from "react";
import profile from "../assets/profile.jpg";
import { BiMessage } from "react-icons/bi";
import { HiOutlineMenu } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4 pt-2 pb-2 bg-[#eeedef] h-[4.5rem] w-screen md:w-full md:rounded-tl-[2rem]">
      <div className="w-12  h-12 flex ">
        <img src={profile} alt="" className="object-cover  rounded-full" />
      </div>
      <div className="flex items-center gap-6">
        <BiMessage className="w-6 h-6" />
        <HiOutlineMenu className="w-6 h-6" />
      </div>
    </div>
  );
};

export default Navbar;
