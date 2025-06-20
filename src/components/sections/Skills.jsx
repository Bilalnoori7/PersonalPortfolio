import { RevealOnScroll } from "../RevealOnScroll";
import { skills } from "../constants";
import { useTheme } from "../ThemeContext";
import { useState } from "react";

export const Skills = () => {
  const { currentTheme } = useTheme();
  const [hoveredSkill, setHoveredSkill] = useState(null);
  
  // Group skills by category for better organization
  const groupedSkills = skills.reduce((acc, skill) => {
    const category = skill.category || 'Other';
    if (!acc[category]) acc[category] = [];
    acc[category].push(skill);
    return acc;
  }, {});

  // If skills don't have categories, use the original flat structure
  const hasCategories = Object.keys(groupedSkills).length > 1 && 
    !groupedSkills.Other || 
    (groupedSkills.Other && groupedSkills.Other.length !== skills.length);

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4 mt-12">
          <div className="text-center mb-12">
            <h3 className={`text-5xl font-bold mb-4 ${currentTheme.textColor} font-sans`}>
              Technical Tools
            </h3>
            <p className={`text-lg opacity-80 ${currentTheme.textColor} max-w-2xl mx-auto`}>
           Technical skills built through exploration, experimentation, and hands-on problem solving
          </p>
          </div>
          
          {hasCategories ? (
            // Categorized skills layout
            <div className="space-y-16">
              {Object.entries(groupedSkills).map(([category, categorySkills]) => (
                <div key={category} className="text-center">
                  <h4 className={`text-2xl font-semibold mb-8 ${currentTheme.textColor} opacity-90`}>
                    {category}
                  </h4>
                  <div className="flex flex-wrap justify-center gap-8">
                    {categorySkills.map((skill, index) => (
                      <SkillCard 
                        key={skill.name}
                        skill={skill}
                        index={index}
                        currentTheme={currentTheme}
                        hoveredSkill={hoveredSkill}
                        setHoveredSkill={setHoveredSkill}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Original flat layout with enhancements
            <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <SkillCard 
                  key={skill.name}
                  skill={skill}
                  index={index}
                  currentTheme={currentTheme}
                  hoveredSkill={hoveredSkill}
                  setHoveredSkill={setHoveredSkill}
                />
              ))}
            </div>
          )}
        </div>
      </RevealOnScroll>
    </section>
  );
};

// Separate SkillCard component for better organization
const SkillCard = ({ skill, index, currentTheme, hoveredSkill, setHoveredSkill }) => {
  const isHovered = hoveredSkill === skill.name;
  
  // Proficiency level colors (you can add proficiency to your skills data)
  const getProficiencyColor = (level) => {
    switch(level) {
      case 'expert': return 'border-green-400/50 shadow-green-400/20';
      case 'proficient': return 'border-blue-400/50 shadow-blue-400/20';
      case 'learning': return 'border-yellow-400/50 shadow-yellow-400/20';
      default: return 'border-white/20 shadow-white/10';
    }
  };

  return (
    <div 
      className="group relative"
      onMouseEnter={() => setHoveredSkill(skill.name)}
      onMouseLeave={() => setHoveredSkill(null)}
      style={{
        animationDelay: `${index * 0.1}s`
      }}
    >
      {/* Skill card container */}
      <div className={`
        block-container w-20 h-20 transition-all duration-300 ease-out
        ${isHovered ? 'scale-110 -translate-y-2' : 'hover:scale-105'}
      `}>
        <div className={`
          btn-back rounded-xl transition-all duration-300
          ${getProficiencyColor(skill.proficiency)}
          ${isHovered ? 'shadow-lg' : ''}
        `} />
        <div className={`
          btn-front rounded-xl flex justify-center items-center transition-all duration-300
          bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm
          border border-white/20
          ${isHovered ? 'border-white/40 bg-white/20' : ''}
        `}>
          <img
            src={skill.imageUrl}
            alt={skill.name}
            className={`
              w-1/2 h-1/2 object-contain transition-all duration-300
              ${isHovered ? 'scale-110 brightness-110' : ''}
            `}
            loading="lazy"
          />
        </div>
      </div>
      
      {/* Skill name with enhanced styling and better text wrapping */}
      <div className="mt-3 text-center">
        <p className={`
          text-sm font-medium transition-all duration-300
          ${currentTheme.textColor}
          ${isHovered ? 'text-white font-semibold scale-105' : ''}
          break-words text-center leading-tight max-w-[80px] mx-auto
        `}>
          {skill.name}
        </p>
        
        {/* Optional: Show proficiency level */}
        {skill.proficiency && (
          <div className={`
            mt-1 text-xs opacity-60 transition-all duration-300
            ${currentTheme.textColor}
            ${isHovered ? 'opacity-100' : ''}
          `}>
            {skill.proficiency}
          </div>
        )}
      </div>

      {/* Hover tooltip with additional info */}
      {skill.description && (
        <div className={`
          absolute -top-16 left-1/2 transform -translate-x-1/2 
          px-3 py-2 bg-black/90 backdrop-blur-sm rounded-lg
          text-white text-xs whitespace-nowrap
          border border-white/20 shadow-xl
          transition-all duration-300 pointer-events-none z-10
          ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
        `}>
          {skill.description}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
        </div>
      )}
    </div>
  );
};