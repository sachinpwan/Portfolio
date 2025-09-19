import React from "react";
import WeatherImg from "../assets/WeatherApp.png";
import InterviewImg from "../assets/InterviewEasy.png";
import MusicfastImg from "../assets/Musicfast.png";
import TodoListImg from "../assets/TodoList.png";

const Projects = () => {
  const projects = [
    { title: "InterviewEasy", imageSrc: InterviewImg },
    { title: "WeatherApp", imageSrc: WeatherImg },
    {title:"Todo List" ,imageSrc: TodoListImg},
    {title:"MusicFast" ,imageSrc: MusicfastImg},]

  return (
    <>
      <section id="projects" className="py-16 bg-gray-900 scroll-mt-24">
        <h1 className=" text-3xl md:text-4xl  text-center text-white mb-12 animate-textColorChange font-bold">
          PROJECTS
        </h1>

        <div className="container mx-auto px-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8  ">
          {projects.map((data, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-5 bg-gray-50 border-4 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-2 transition-all animate-borderGradient"
            >
              <div className="  w-40 h-40 flex items-center justify-center">

                <img src={data.imageSrc} className=" w-36 h-36 " />
              </div>

              <h3 className="text-lg font-medium text-gray-700 text-center">
                {data.title}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
