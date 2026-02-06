import React from "react";
import profile from "./assets/portfolio.jpeg";
import resume from "./assets/true-CV.pdf"


const About = () => {
  return (
    <div id="about" className="flex flex-col justify-center items-center px-4 py-10">

      {/* Heading */}
      <div className="flex flex-col items-center gap-1 mb-10">
        <p className="flex gap-10  text-2xl font-semibold">About me</p>
        <p className="text-sm text-gray-500">My introduction</p>
      </div>

      {/* Main section */}
      <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-5xl">

        {/* Image section */}
        <div className="flex justify-center w-full h-[320px] md:w-[40%]">
          <img
            className="h-[300px] w-[260px] md:h-[300px] md:w-[300px] object-cover rounded-lg"
            src={profile}
            alt="profile"
          />
        </div>

        {/* Right section */}
        <div className="flex flex-col w-full md:w-[60%] gap-6">

          {/* Cards */}
          <div className="flex flex-wrap justify-center md:justify-start gap-14">

            <div className="flex flex-col gap-1 justify-center items-center h-[130px] w-[130px] rounded-lg border border-b-cyan-950 text-center">
              <img
                className="h-8 w-8"
                src="https://static.vecteezy.com/system/resources/previews/010/052/513/large_2x/sign-of-experience-symbol-is-isolated-on-a-white-background-icon-color-editable-free-vector.jpg"
                alt="experience"
              />
              <p className="text-sm font-semibold">Experience</p>
              <p className="text-xs">1+ Year</p>
            </div>

            <div className="flex flex-col gap-1 justify-center items-center h-[130px] w-[130px] rounded-md border border-b-cyan-950 text-center">
              <i className="fa-solid fa-envelopes-bulk text-xl"></i>
              <p className="text-sm font-semibold">Completed</p>
              <p className="text-xs">6+ Projects</p>
            </div>

            <div className="flex flex-col gap-1 justify-center items-center h-[130px] w-[130px] rounded-md border border-b-cyan-950 text-center">
              <i className="fa-solid fa-headset text-xl"></i>
              <p className="text-sm font-semibold">Support</p>
              <p className="text-xs">Online 24/7</p>
            </div>

          </div>

          {/* Text */}
          <p className="text-center md:text-left   md:text-base">
            Hi, I’m Mahaveer Singh — a Software Developer with 1 year of
            experience in building modern web applications using React and
            Next.js. I focus on creating fast, clean, and user-friendly
            interfaces.
          </p>

          {/* Button */}
          <div className="flex justify-center md:justify-start">
         <a
  href={resume}
  download
  target="_blank"
  rel="noreferrer"
>
  <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition">
    Resume
    <i className="fa-solid fa-download"></i>
  </button>
</a>

          </div>

        </div>

      </div>
    </div>
  );
};

export default About;
