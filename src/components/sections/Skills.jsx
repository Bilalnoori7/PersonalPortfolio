import { RevealOnScroll } from "../RevealOnScroll";
import { skills } from "../constants";
import { useTheme } from "../ThemeContext";


export const Skills = () => {
  const { currentTheme } = useTheme();
  
  // Updated tagStyle to match the teal/turquoise of the skill card fronts
  const tagStyle = {
    backgroundColor: `rgba(73, 216, 230, 0.1)`, // Light teal/turquoise background
    color: `rgb(73, 216, 230)`,                 // Teal/turquoise text
  };
  
  // Style for the hover effect
  const hoverTagStyle = {
    '--hover-bg': 'rgba(73, 216, 230, 0.2)',    // Slightly darker on hover
    '--hover-shadow': 'rgba(73, 216, 230, 0.3)', // Shadow to match
  };

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4 mt-12">
          <h3 className={`text-[40px] font-bold mb-8 ${currentTheme.textColor} text-center font-sans`}>Skills</h3>
          
          <div className='mt-8 flex flex-wrap justify-center gap-12'>
            {skills.map((skill) => (
              <div className='flex flex-col items-center gap-2' key={skill.name}>
                <div className='block-container w-20 h-20'>
                  <div className='btn-back rounded-xl' />
                  <div className='btn-front rounded-xl flex justify-center items-center'>
                    <img
                      src={skill.imageUrl}
                      alt={skill.name}
                      className='w-1/2 h-1/2 object-contain'
                    />
                  </div>
                </div>
                <p className={`text-sm font-medium text-center ${currentTheme.textColor}`}>{skill.name}</p>
              </div>
            ))}
          </div>
          

        </div>
      </RevealOnScroll>
    </section>
  );
};