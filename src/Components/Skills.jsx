import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="flex flex-col justify-center items-center gap-16 px-4">
      {/* heading */}
      <section className="flex flex-col justify-center items-center">
        <p className="flex gap-10  text-2xl font-semibold">Skills</p>
        <p className="text-gray-500">My technical level</p>
      </section>

      {/* cards */}
      <section className="flex flex-col md:flex-row justify-center items-stretch gap-8 w-full text-[1rem]">
        {/* Frontend */}
        <div
          className="w-full md:w-[40%] min-h-[260px] border border-b-gray-800 rounded-md
                     flex flex-col items-center justify-center gap-3 text-center p-6"
        >
            <p className="text-2xl">   <i className="fa-solid fa-code mr-2"></i>
            Frontend Skills</p>
          <ul className="flex flex-col gap-4 text-center iteams-center ">
            
            <li className="flex items-center gap-2">
              <i className="fa-brands fa-html5"></i> HTML
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-brands fa-css3-alt"></i> CSS
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-brands fa-js"></i> JavaScript
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-code"></i> TypeScript
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-brands fa-react"></i> React
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-wind"></i> Tailwind
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-brands fa-git-alt"></i> Git
            </li>
          </ul>
        </div>

        {/* Backend */}
        <div
          className="w-full md:w-[40%] min-h-[260px] border  border-b-gray-800  rounded-md
                     flex flex-col items-center justify-center gap-3 text-center p-6"
        >
             <p className="text-2xl"> <i className="fa-solid fa-server mr-2"></i>
            Backend Skills
          </p>
          <ul className="flex flex-col gap-4 justify-center iteams-center">
           
            <li className="flex items-center gap-2">
              <i className="fa-brands fa-node-js"></i> Node.js
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-plug"></i> Express.js
            </li>
            <li className="flex items-center gap-2">
              <i className="fa-solid fa-database"></i> MongoDB
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Skills;
