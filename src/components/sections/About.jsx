import { RevealOnScroll } from "../RevealOnScroll";
import { useTheme } from "../ThemeContext";
import schoolLogo from '/src/assets/images/hs-school-logo-data_.png';

export const About = () => {
  // Use the global theme context
  const { currentTheme } = useTheme();
  
  // Create inline styles for custom themes, or empty object for predefined themes
  const bgStyle = currentTheme.isCustom 
    ? { backgroundColor: currentTheme.customLeftColor } 
    : {};
    
  // Create text style for custom themes - use !important to override any other styles
  const textStyle = currentTheme.isCustom && currentTheme.customTextColor
    ? { color: `${currentTheme.customTextColor} !important` }
    : {};
 
  
  return (
    <section
      id="about"
      className={`min-h-screen flex items-center justify-center py-20 ${!currentTheme.isCustom ? currentTheme.bgColor : ''}`}
      style={bgStyle}
    >
  
        <div className="max-w-3xl mx-auto px-4">
          <h2 
            className={`text-[40px] font-bold mb-8 ${!currentTheme.isCustom ? currentTheme.textColor : ''} text-center font-sans`}
            style={textStyle}
          >
            About Me
          </h2>

          <div className={`rounded-xl p-8 ${currentTheme.borderColor} border hover:-translate-y-1 transition-all`}>
            <p 
              className={`${!currentTheme.isCustom ? currentTheme.textColor : ''} mb-6`}
              style={textStyle}
            >
              Data engineer: I wrangle data like a cowboy, but with more Python and fewer horses. Specializing in ETL pipelines, data infrastructure, and turning chaotic datasets into business gold using SQL, Python, and whatever tool gets the job done.
              <br /><br />
              With nearly a year combined of professional experience at AAA Life Insurance building automated data solutions and dashboards, and currently at Textron Inc working on data migration projects from legacy systems to modern platforms.
               I also bring 3+ years of leadership experience managing teams and mentoring underrepresented K-12 students and first-generation college students.
               <br /><br />
            After 3 brain operations for a tumor, I figured if surgeons can debug my head, I can definitely debug your databases.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
            {/* Education Column */}
            <div className={`p-6 rounded-xl ${currentTheme.borderColor} border hover:-translate-y-1 transition-all`}>
              <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
                <img 
                  src={schoolLogo}
                  alt="University Logo" 
                  className="w-8 h-8 object-contain"
                />
                <h3 
                  className={`${!currentTheme.isCustom ? currentTheme.textColor : ''} text-xl font-bold`}
                  style={textStyle}
                >
                  Education
                </h3>
              </div>
              <div 
                className={`space-y-2 text-center md:text-left ${!currentTheme.isCustom ? currentTheme.textColor : ''}`}
                style={textStyle}
              >
                <p><strong>Michigan State University</strong></p>
                <p>August 2021 - Present</p>
                <p>College Of Engineering</p>
                <p>B.S. in Computer Science</p>
                <p>Minor In Business</p>
              </div>
            </div>
            
            {/* Coursework Column */}
            <div className={`p-6 rounded-xl ${currentTheme.borderColor} border hover:-translate-y-1 transition-all`}>
              <h3 
                className={`text-xl font-bold mb-4 text-center md:text-left ${!currentTheme.isCustom ? currentTheme.textColor : ''}`}
                style={textStyle}
              >
                Relevant Coursework
              </h3>
              <ul 
                className={`list-disc list-inside space-y-2 text-center md:text-left mx-auto md:mx-0 max-w-xs md:max-w-none ${!currentTheme.isCustom ? currentTheme.textColor : ''}`}
                style={textStyle}
              >
                <li>Data Structures and Algorithms</li>
                <li>Web Development</li>
                <li>Object-Oriented Software Development</li>
                <li>Database Systems</li>
                <li>Software Engineering</li>
              </ul>
            </div>
          </div>
        </div>
    </section>
  );
};