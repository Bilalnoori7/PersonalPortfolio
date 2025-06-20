import { useEffect, useState, useCallback } from "react";
import { useTheme } from "./ThemeContext";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const { currentTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ["home", "about", "experience", "projects", "skills", "certificates", "contact"];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Toggle mobile menu
  const toggleMenu = useCallback(() => {
    setMenuOpen(prev => !prev);
  }, [setMenuOpen]);

  // Close mobile menu when link is clicked
  const handleLinkClick = useCallback(() => {
    setMenuOpen(false);
  }, [setMenuOpen]);

  // Function to determine if background is dark
  const isDarkBackground = () => {
    if (currentTheme.isCustom && currentTheme.customLeftColor) {
      // For custom themes, check the hex color brightness
      const hex = currentTheme.customLeftColor.replace('#', '');
      const r = parseInt(hex.substr(0, 2), 16);
      const g = parseInt(hex.substr(2, 2), 16);
      const b = parseInt(hex.substr(4, 2), 16);
      const brightness = ((r * 299) + (g * 587) + (b * 114)) / 1000;
      return brightness < 128;
    } else {
      // For predefined themes
      return currentTheme.name === 'Dark Mode';
    }
  };

  // Get hamburger color based on background
  const getHamburgerColor = () => {
    return isDarkBackground() ? 'bg-white' : 'bg-black';
  };

  // Navbar links with their paths
  const navLinks = [
    { title: "Home", path: "#home", section: "home" },
    { title: "About", path: "#about", section: "about" },
    { title: "Work Experience", path: "#experience", section: "experience" },
    { title: "Projects", path: "#projects", section: "projects" },
    { title: "Skills", path: "#skills", section: "skills" },
    { title: "Certificates", path: "#certificates", section: "certificates" },
    { title: "Contact", path: "#contact", section: "contact" }
  ];

  // Dynamic navbar background based on scroll
  const navbarBg = isScrolled 
    ? "bg-[rgba(10, 10, 10, 0.95)] backdrop-blur-xl border-b border-white/20 shadow-2xl" 
    : "bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg";

  const hamburgerColor = getHamburgerColor();

  return (
    <>
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${navbarBg}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a 
              href="#home" 
              className={`font-mono text-xl font-bold ${currentTheme.textColor} hover:opacity-80 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-white/50 rounded-md px-2 py-1`}
              onClick={handleLinkClick}
            >
              Bilal<span className={`${currentTheme.textColor} opacity-75`}> Innovations</span>
            </a>
            
            {/* Mobile Menu Button */}
            <button
              className={`md:hidden w-8 h-8 flex flex-col justify-center items-center cursor-pointer z-50 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-md p-1`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span className={`w-6 h-0.5 ${hamburgerColor} transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`w-6 h-0.5 ${hamburgerColor} transition-all duration-300 my-1 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-6 h-0.5 ${hamburgerColor} transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </button>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.section;
                return (
                  <a 
                    key={link.path} 
                    href={link.path} 
                    className={`
                      font-mono text-sm px-4 py-2 rounded-lg transition-all duration-200 
                      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-white/50
                      ${isActive 
                        ? `text-amber-600 bg-white/10` 
                        : `${currentTheme.textColor} hover:bg-white/5 hover:text-white`
                      }
                    `}
                    style={{ scrollBehavior: 'smooth' }}
                  >
                    {link.title}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`
        fixed inset-0 z-30 md:hidden transition-all duration-300 
        ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
      `}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={toggleMenu}
        />
        
        {/* Mobile Menu */}
        <div className={`
          absolute top-16 left-0 right-0 bg-[rgba(10, 10, 10, 0.98)] backdrop-blur-xl border-b border-white/10
          transform transition-transform duration-300 ease-out
          ${menuOpen ? 'translate-y-0' : '-translate-y-full'}
        `}>
          <div className="px-4 py-6 space-y-1">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.section;
              return (
                <a
                  key={link.path}
                  href={link.path}
                  className={`
                    block font-mono text-lg px-4 py-3 rounded-lg transition-all duration-200
                    transform ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}
                    focus:outline-none focus:ring-2 focus:ring-white/50
                    ${isActive 
                      ? `text-amber-600 bg-white/10 border-l-4 border-white/50` 
                      : `text-white hover:bg-white/5 hover:translate-x-2`
                    }
                  `}
                  style={{ 
                    transitionDelay: `${index * 50}ms`,
                    scrollBehavior: 'smooth'
                  }}
                  onClick={handleLinkClick}
                >
                  {link.title}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Add smooth scrolling to the document */}
      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
};