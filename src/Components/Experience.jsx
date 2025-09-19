import React from "react";
import logo from "../assets/Navazone.jpg";
const Experience = () => {
  return (
    <>
      <div className=" flex flex-col items-center bg-gray-900 text-white ">
        <div className="animate-textColorChange ">
          <h1 className=" mt-5 font-bold text-3xl md:text-4xl">EXPRIENCE</h1>
        </div>
        <div className="flex justify-between gap-10 mt-10 border-4 rounded-md">
        <div className="py-6 px-5">
          <img src={logo}  className=" h-12 w-12 object-contain rounded gap-2"/>
        </div>
        <div className="p-2" >
          <h1 className="text-blue-600">Java Full Stack Developer</h1>
          <h2 className="text-amber-400">NavaZone</h2>
          <p>Oct,2024-Present |  Hyderabad,India </p>
          <br></br>
          <p >React.js Spring Boot MySql</p>
        </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
