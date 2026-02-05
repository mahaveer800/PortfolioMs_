import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [theme, setTheme] = useState("light-theme");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((p) => (p === "dark-theme" ? "light-theme" : "dark-theme"));
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollProps = {
    smooth: true,
    duration: 500,
    offset: -80,
  };

  const goHomeAndScroll = (id) => {
    navigate("/");
    setIsOpen(false);

    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  const NavItem = ({ id, label, route }) => (
    <li
      className="cursor-pointer hover:text-amber-500"
      onClick={() => setIsOpen(false)}
    >
      {isHome ? (
        <ScrollLink to={id} {...scrollProps}>
          {label}
        </ScrollLink>
      ) : (
        <span onClick={() => goHomeAndScroll(id)}>{label}</span>
      )}
    </li>
  );

  return (
    <header>
      <nav
        className={`fixed top-0 left-0 w-full z-50
        flex justify-between md:justify-around items-center px-6 py-4
        transition-all duration-300
        ${
          scrolled
            ? theme === "dark-theme"
              ? "bg-black text-gray-300 shadow-md"
              : "bg-white text-black shadow-md"
            : "bg-transparent"
        }`}
      >
        <p className="text-[18px] font-bold">Mahaveersingh</p>

        {/* ---------------- Desktop menu ---------------- */}
        <ul className="hidden md:flex gap-12">
          <NavItem id="home" label="Home" />
          <NavItem id="about" label="About" />
          <NavItem id="skills" label="Skills" />
          <NavItem id="project" label="Project" />
          <NavItem id="contact" label="Contact" />
        </ul>

        {/* right side */}
        <div className="flex items-center gap-4">
          {/* theme */}
          <div onClick={toggleTheme} className="cursor-pointer text-2xl">
            {theme === "light-theme" ? (
              <i className="fa-solid fa-moon"></i>
            ) : (
              <i className="fa-solid fa-sun"></i>
            )}
          </div>

          {/* hamburger */}
          <div
            className="md:hidden cursor-pointer text-2xl"
            onClick={toggleMenu}
          >
            <i
              className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
            ></i>
          </div>
        </div>

        {/* ---------------- Mobile menu ---------------- */}
        {isOpen && (
          <ul
            className={`absolute top-[64px] left-4 w-[90%]
            flex flex-col items-center gap-6 py-6 rounded-md shadow-md md:hidden
            ${
              theme === "dark-theme"
                ? "bg-black text-gray-300"
                : "bg-white text-black"
            }`}
          >
            <NavItem id="home" label="Home" />
            <NavItem id="about" label="About" />
            <NavItem id="skills" label="Skills" />
            <NavItem id="project" label="Project" />
            <NavItem id="contact" label="Contact" />
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
