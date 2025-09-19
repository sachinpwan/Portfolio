import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <div className=" fixed top-0 flex justify-between px-6 py-3 h-20 w-full   text-white rounded-full bg-blue-900 animate-borderGradient mb-4   ">

        <div className="px-4 text-bold">
          <div className="text-4xl animate-textColorChange font-bold"> Sachin</div>

          <p className="flex justify-between ">
            <IoCallOutline className="mr-2 text-green-700" /><IoLogoWhatsapp className="mr-2 text-green-700" />7219766645
              </p>
        </div>

        <div>
          <ul className="flex justify-between  p-3 gap-5 text-white ">
            <li>Home</li>
            <li>Exprience</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
