import { RevealOnScroll } from "../RevealOnScroll";
import { useTheme } from "../ThemeContext"; // Adjust path as needed
import myPhoto from '/src/assets/images/Bilal-Noori_Headshot.jpg';

export const Home = () => {
  // Use the global theme context instead of local state
  const { currentTheme } = useTheme();

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center relative pt-16 md:pt-20`}
    >
      <RevealOnScroll>
        {/* This creates a flex container that's column on mobile, row on larger screens */}
        <div className="flex flex-col md:flex-row items-center gap-12 z-10 px-4">
          {/* This creates a circular container for the image */}
          <div className={`w-84 h-84 overflow-hidden rounded-full border-4 ${currentTheme.borderColor}`}>
            {/* This displays the image and makes it cover the container properly */}
            <img 
              src={myPhoto} 
              alt="Bilal Noori" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-left max-w-xl">
            <h1 className={`font-[ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,'Helvetica_Neue',Arial] text-5xl md:text-7xl font-bold mb-6 ${currentTheme.textColor} leading-right`}>
              Hi, I'm Bilal Noori
            </h1>
            <p className={`font-['Helvetica'] ${currentTheme.textColor} text-lg mb-6`}>
             Software Engineer | Tumor Survivor | Astronomy Lover
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-4">
              {/* GitHub */}
              <a 
                href="https://github.com/Bilalnoori7" 
                target="_blank" 
                rel="noopener noreferrer"
                title="View my GitHub profile"
                className={`w-12 h-12 rounded-full border-2 ${currentTheme.borderColor} flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200`}
                aria-label="GitHub Profile"
              >
                <svg 
                  className={`w-6 h-6 ${currentTheme.textColor}`} 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/bilal-noori" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Connect with me on LinkedIn"
                className={`w-12 h-12 rounded-full border-2 ${currentTheme.borderColor} flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200`}
                aria-label="LinkedIn Profile"
              >
                <svg 
                  className={`w-6 h-6 ${currentTheme.textColor}`} 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* Resume */}
              <a 
                href="/PersonalPortfolio/resume/Bilal-Noori-Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Download my resume"
                className={`w-12 h-12 rounded-full border-2 ${currentTheme.borderColor} flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200`}
                aria-label="Download Resume"
              >
                <svg 
                  className={`w-6 h-6 ${currentTheme.textColor}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};