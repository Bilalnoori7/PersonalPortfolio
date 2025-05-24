import { useEffect } from "react";
import { useTheme } from "./ThemeContext";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const { currentTheme } = useTheme();
  
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  
  // Navbar links with their paths
  const navLinks = [
    { title: "Home", path: "#home" },
    { title: "About", path: "#about" },
    { title: "Work Experience", path: "#experience" },
    { title: "Projects", path: "#projects" },
    { title: "Skills", path: "#skills" },
    { title: "Contact", path: "#contact" }
  ];
  
  // Apply theme text color to all links
  const navLinkClass = `font-mono text-lg ${currentTheme.textColor} p-4`;
  
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
        <a href="#home" className={`font-mono text-lg ${currentTheme.textColor}`}>
            Bilal<span className={currentTheme.textColor}> Innovations</span>
          </a>
          
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.path} 
                href={link.path} 
                className={navLinkClass}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};