import { useState } from "react";
import { ThemeProvider, useTheme } from "./components/ThemeContext"; // Make sure to import useTheme
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import "./index.css";
import { Contact } from "./components/sections/Contact";
import { Experience } from "./components/sections/WorkExperience";
import { Skills } from "./components/sections/Skills";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { Certificates } from "./components/sections/Certificates";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <ThemeProvider>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <AppContent isLoaded={isLoaded} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </ThemeProvider>
  );
}

// Create a separate component that can access the theme context
function AppContent({ isLoaded, menuOpen, setMenuOpen }) {
  const { currentTheme } = useTheme();
  
  return (
    <div
      className={`min-h-screen transition-opacity duration-700 ${
        isLoaded ? "opacity-100" : "opacity-0"
      } ${currentTheme.bgColor}`}
    >
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      
      {/* Theme switcher visible across all components */}
      <ThemeSwitcher />
      
      <Home />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certificates/>
      <Contact />
    </div>
  );
}

export default App;