import React from "react";
import profile from "./assets/mpassport.png";

const Home = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap justify-center gap-8 min-h-[80vh] items-center">

      {/* 1st div – icons */}
      <div className="w-[60px] flex justify-center order-1 md:order-1">
        <ul className="flex flex-col justify-center gap-8 text-2xl">
          <li>
            <a href="https://github.com/mahaveer800" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mahaveer-singh-29a359363/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="mailto:mahaveer56it@gmail.com" target="_blank" rel="noreferrer">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </li>
        </ul>
      </div>

      {/* 3rd div – image */}
      <div className="flex justify-center items-center order-2 md:order-3 w-[calc(100%-60px)] md:w-auto">
        <img
          src={profile}
          alt="profile"
          className="w-[220px] h-[220px] md:w-[300px] md:h-[300px] object-cover animate-profile"
        />
      </div>

      {/* 2nd div – text */}
      <div className="w-full md:w-[500px] flex justify-center gap-6 flex-col text-center md:text-left order-3 md:order-2">
        <p className="text-4xl md:text-5xl">Mahaveer Singh</p>
        <p className="text-xl md:text-2xl">______ Software Developer</p>
        <p>
          A passionate and dedicated developer building modern and user-friendly
          web experiences.
        </p>
      </div>

    </div>
  );
};

export default Home;
