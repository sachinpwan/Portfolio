import React from "react";
import i from "../assets/sachin.jpg";
const Home = () => {
  return (
    <>
      <div className="flex justify-between bg-gray-900 text-white">
        <div className="  py-50 px-20 text  ">
          <h1 className="text-2xl" >
     Hi,I'm 
            <span
              className="animate-textColorChange ml-2 
"
            >
                Sachin
            </span>
          </h1>
          <p>
            A passanate Developer who loves building modern,responsive and
            interactive applications
          </p>
          <button className=" mt-2 px-6 py-3 bg-blue-600 text-2xl text-white rounded-full">
            Download Resume
          </button>
        </div>
        <div className="  mt-6 p-10 animate-borderGradient mb-4">
          <img src={i} className="  rounded-full py-5 px-5 " />
        </div>
        {/* <div>Skills</div> */}
        {/* <div className="mt-96">
          <ul>
            <li>skills</li>
          </ul>
        </div> */}
      </div>
    </>
  );
};

export default Home;
