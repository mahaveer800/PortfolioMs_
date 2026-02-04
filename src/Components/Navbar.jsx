import { useState, useEffect } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState("light-theme");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
      document.body.className= theme;
  }, [theme]);

  const toggleTheme = () => {
    if(theme=== "dark-theme"){
      setTheme("light-theme")
    }else{
      setTheme('dark-theme')
    }
  };
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header>

    
    <nav className="flex fixd justify-around items-center px-6 py-4 
                
                    transition-colors duration-300">
      <p className="text-[18px] font-bold">Mahaveersingh</p>

      <ul className="hidden md:flex gap-12">
        <li className="cursor-pointer hover:text-shadow-gray-700">Home</li>
        <li className="cursor-pointer hover:text-amber-500">About</li>
        <li className="cursor-pointer hover:text-amber-500">Skills</li>
        <li className="cursor-pointer hover:text-amber-500">Project</li>
        <li className="cursor-pointer hover:text-amber-500">Contact</li>
      </ul>

      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        <div onClick={toggleTheme} className="cursor-pointer text-2xl">
          {theme === "light-theme" ? (
            <i className="fa-solid fa-moon"></i>
          ) : (
           <i className="fa-solid fa-sun"></i>
          )}
        </div>

        {/* Hamburger (Mobile) */}
        <div className="md:hidden cursor-pointer text-2xl" onClick={toggleMenu}>
          <i className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-4 w-[90%]  
                       flex flex-col items-center gap-6 py-6 shadow-md md:hidden">
          <li className="cursor-pointer hover:text-amber-500">Home</li>
          <li className="cursor-pointer hover:text-amber-500">About</li>
          <li className="cursor-pointer hover:text-amber-500">Skills</li>
          <li className="cursor-pointer hover:text-amber-500">Project</li>
          <li className="cursor-pointer hover:text-amber-500">Contact</li>
        </ul>
      )}
    </nav>
    </header>
  );
};

export default Navbar;
