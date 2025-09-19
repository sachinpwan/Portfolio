import React from "react";
import htmlImg from "../assets/html.jpg";
import cssImg from "../assets/css.jpg";
import JavascriptImg from "../assets/Javascript.jpg";
import reactImg from "../assets/react.svg";
import TailwindcssImg from "../assets/Tailwindcss.jpg";
import JavaImg from "../assets/Java.jpg";
import SpringbootImg from "../assets/Springboot.jpg";
import PostmanImg from "../assets/Postman.jpg";
import MysqlImg from "../assets/Mysql.jpg";
import MaterialuiImg from "../assets/Materialui.jpg";
import BootstrapImg from "../assets/Bootstrap.jpg";
export default function Skills() {
  const skills = [
    { title: "HTML", imageSrc: htmlImg },
    { title: "Css", imageSrc: cssImg },
    { title: "Javascript", imageSrc: JavascriptImg },
    { title: "React Js", imageSrc: reactImg },  
    { title: "Tailwindcss", imageSrc: TailwindcssImg },
    { title: "Materialui", imageSrc: MaterialuiImg },
    { title: "Bootstrap", imageSrc: BootstrapImg },
    { title: "Java", imageSrc: JavaImg },
    { title: "Springboot", imageSrc: SpringbootImg },
    { title: "Mysql", imageSrc: MysqlImg },
    { title: "Postman", imageSrc: PostmanImg },
  ];

  return (
    <section id="skills" className="py-16 bg-gray-900 scroll-mt-24">
      <h1 className="text-3xl md:text-4xl  text-center text-white mb-12 animate-textColorChange font-bold">
        SKILLS
      </h1>

      <div className="container mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {skills.map((data, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-5 bg-gray-50 border-4 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-2 transition-all animate-borderGradient"
          >
            <div>
              <img src={data.imageSrc} className="w-16 h-16 object-contain" />
            </div>

            <h3 className="text-lg font-medium text-gray-700">{data.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}