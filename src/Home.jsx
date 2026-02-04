import React from "react";
import profile from "./assets/mpassport.png";

const Home = () => {
  return (
    <div className="min-h-[80vh] flex flex-col md:flex-row justify-center items-center gap-8">

      {/* ================= MOBILE ROW (icons + image) ================= */}
      <div className="flex md:hidden w-full justify-center items-center gap-8">

        {/* icons */}
        <div className="w-[40px] flex justify-center">
          <ul className="flex flex-col gap-6 text-2xl">
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

        {/* image */}
        <img
          src={profile}
          alt="profile"
          className="w-[220px] h-[220px] object-cover animate-profile"
        />
      </div>

      {/* ================= DESKTOP ICONS ================= */}
      <div className="hidden md:flex w-[60px] justify-center">
        <ul className="flex flex-col gap-8 text-2xl">
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

      {/* ================= TEXT (same for both) ================= */}
      <div className="w-full md:w-[500px] flex flex-col gap-6 text-center md:text-left">
        <p className="text-4xl md:text-5xl">Mahaveer Singh</p>
        <p className="text-xl md:text-2xl">______ Software Developer</p>
        <p>
          A passionate and dedicated developer building modern and user-friendly
          web experiences.
        </p>
      </div>

      {/* ================= DESKTOP IMAGE ================= */}
      <div className="hidden md:flex justify-center items-center">
        <img
          src={profile}
          alt="profile"
          className="w-[300px] h-[300px] object-cover animate-profile"
        />
      </div>

    </div>
  );
};

export default Home;
