import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";

  const scrollProps = {
    smooth: true,
    duration: 500,
    offset: -80,
  };

  const goHomeAndScroll = (id) => {
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 120);
  };

  const goHomeTop = () => {
    navigate("/");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 120);
  };

  return (
    <div className="flex flex-col gap-4 md:gap-6 justify-center items-center mb-8 md:mb-12">

      <div className="w-full h-0.5 bg-gray-600"></div>

      <section className="flex justify-center items-center text-2xl">
        <p>Mahaveer Singh</p>
      </section>

      <section className="flex justify-around gap-6 md:gap-20">

        {/* links */}
        <div>
          <ul className="flex flex-col gap-4 md:gap-8 cursor-pointer">

            {/* HOME */}
            <li>
              {isHome ? (
                <ScrollLink to="home" {...scrollProps}>Home</ScrollLink>
              ) : (
                <span onClick={() => goHomeTop()}>Home</span>
              )}
            </li>

            {/* ABOUT */}
            <li>
              {isHome ? (
                <ScrollLink to="about" {...scrollProps}>About</ScrollLink>
              ) : (
                <span onClick={() => goHomeAndScroll("about")}>About</span>
              )}
            </li>

            {/* PROJECT */}
            <li>
              {isHome ? (
                <ScrollLink to="project" {...scrollProps}>Project</ScrollLink>
              ) : (
                <span onClick={() => goHomeAndScroll("project")}>Project</span>
              )}
            </li>

            {/* SKILLS */}
            <li>
              {isHome ? (
                <ScrollLink to="skills" {...scrollProps}>Skills</ScrollLink>
              ) : (
                <span onClick={() => goHomeAndScroll("skills")}>Skills</span>
              )}
            </li>

          </ul>
        </div>

        {/* socials */}
        <div>
          <ul className="flex flex-col gap-8 md:gap-6 text-xl cursor-pointer">
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

            <li>
              <a href="https://github.com/mahaveer800" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
            </li>

            <li>
              <a href="https://www.instagram.com/lozer_bravo" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>

        {/* up button */}
        <div className="flex flex-col justify-end">
          <button
            onClick={goHomeTop}
            className="
              w-[140px] h-[40px]
              sm:w-[200px] sm:h-[50px]
              bg-gray-900 rounded-sm text-sm sm:text-base md:text-gray-400
            "
          >
            Up <i className="fa-solid fa-arrow-up"></i>
          </button>
        </div>

      </section>
    </div>
  );
};

export default Footer;
