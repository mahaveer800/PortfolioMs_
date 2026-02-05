import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-6 justify-center items-center mb-8 md:mb-12">
      <div className="w-full h-0.5 bg-gray-600"></div>

      <section className="flex justify-center items-center text-2xl">
        <p>Mahaveer Singh</p>
      </section>

      <section className="flex justify-around gap-6 md:gap-20">
        <div>
          <ul className="flex flex-col gap-4 md:gap-8 cursor-pointer">
            <li>Home</li>
            <li>About</li>
            <li>Project</li>
            <li>skills</li>
          </ul>
        </div>

        <div>
          <ul className="flex flex-col gap-3 md:gap-4 text-xl cursor-pointer">
            <li>
              <a
                href="https://www.linkedin.com/in/mahaveer-singh-29a359363/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>

            <li>
              <a
                href="mailto:mahaveer56it@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-solid fa-envelope"></i>
              </a>
            </li>

            <li>
              <a
                href="https://github.com/mahaveer800"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </li>

            <li>
              <a
                href="https://github.com/mahaveer800"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-end">
          <button className="w-[200px] h-[50px] bg-gray-900 rounded-sm">
            Up <i className="fa-solid fa-arrow-up"></i>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Footer;
