import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { useTheme } from "../ThemeContext";
import { experiences, skills } from "../constants";
import { useState } from "react";

import "react-vertical-timeline-component/style.min.css";

export const Experience = () => {
  const { currentTheme } = useTheme();
  const [expandedCards, setExpandedCards] = useState(new Set());
  
  const toggleCard = (index) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedCards(newExpanded);
  };

  // Get skills that match experience technologies
  const getRelevantSkills = (technologies) => {
    if (!technologies) return [];
    return skills.filter(skill => 
      technologies.some(tech => 
        skill.name.toLowerCase().includes(tech.toLowerCase()) ||
        tech.toLowerCase().includes(skill.name.toLowerCase())
      )
    ).slice(0, 4); // Limit to 4 skills
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20" id="experience">
      <div className="max-w-6xl mx-auto px-4">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <h3 className={`text-5xl font-bold mb-4 ${currentTheme.textColor} font-sans`}>
            Work Experience
          </h3>
          <p className={`text-lg opacity-80 ${currentTheme.textColor} max-w-2xl mx-auto`}>
            A journey through my professional growth and contributions across different organizations
          </p>
        </div>

        <div className="mt-12">
          <VerticalTimeline lineColor="rgba(255, 255, 255, 0.1)">
            {experiences.map((experience, index) => {
              const isExpanded = expandedCards.has(index);
              const relevantSkills = getRelevantSkills(experience.technologies);
              
              return (
                <VerticalTimelineElement
                  key={`${experience.company_name}-${index}`}
                  date={experience.date}
                  dateClassName={`${currentTheme.textColor} font-medium`}
                  iconStyle={{ 
                    background: experience.iconBg,
                    border: `3px solid ${experience.iconBg}`,
                    boxShadow: `0 0 20px ${experience.iconBg}40`
                  }}
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[70%] h-[70%] object-contain rounded-lg"
                      />
                    </div>
                  }
 contentStyle={{
  background: "transparent", // Changed from the dark gradient
  borderRadius: "16px",
  border: `1px solid rgba(255, 255, 255, 0.1)`,
  borderLeft: `4px solid ${experience.iconBg}`,
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
  backdropFilter: "blur(10px)",
  padding: "2rem"
}}
                  contentArrowStyle={{ 
                    borderRight: `7px solid rgba(255, 255, 255, 0.1)` 
                  }}
                >
                  <div>
                    {/* Company Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className={`${currentTheme.textColor} text-2xl font-sans font-bold mb-1`}>
                          {experience.company_name}
                        </h3>
                        {experience.location && (
                          <p className={`${currentTheme.textColor} opacity-60 text-sm flex items-center gap-1`}>
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            {experience.location}
                          </p>
                        )}
                      </div>
                      
                      {/* Company Type Badge */}
                      {experience.type && (
                        <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-medium text-white/80">
                          {experience.type}
                        </span>
                      )}
                    </div>
                    
                    {/* Multiple Roles or Single Role */}
                    {experience.roles ? (
                      <div className="space-y-6">
                        {experience.roles.map((role, roleIndex) => {
                          const shouldTruncate = role.points.length > 3 && !isExpanded;
                          const displayPoints = shouldTruncate ? role.points.slice(0, 3) : role.points;
                          
                          return (
                            <div key={`role-${roleIndex}`} className="border-l-2 border-white/20 pl-4">
                              <div className="flex items-center justify-between mb-2">
                                <p className={`${currentTheme.textColor} font-semibold text-lg`}>
                                  {role.title}
                                </p>
                                <span className={`${currentTheme.textColor} opacity-60 text-sm font-medium bg-white/5 px-2 py-1 rounded`}>
                                  {role.date}
                                </span>
                              </div>
                              
                              <ul className="list-disc ml-5 space-y-2 mb-4">
                                {displayPoints.map((point, pointIndex) => (
                                  <li
                                    key={`role-point-${pointIndex}`}
                                    className={`${currentTheme.textColor} opacity-90 pl-1 text-sm leading-relaxed`}
                                  >
                                    {point}
                                  </li>
                                ))}
                              </ul>
                              
                              {/* Expand/Collapse for long lists */}
                              {role.points.length > 3 && (
                                <button
                                  onClick={() => toggleCard(index)}
                                  className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                                >
                                  {isExpanded ? "Show less" : `Show ${role.points.length - 3} more achievements`}
                                </button>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      // Single role experience
                      <div>
                        <p className={`${currentTheme.textColor} font-semibold text-lg mb-4`}>
                          {experience.title}
                        </p>
                        <ul className="list-disc ml-5 space-y-2">
                          {experience.points.map((point, pointIndex) => (
                            <li
                              key={`experience-point-${pointIndex}`}
                              className={`${currentTheme.textColor} opacity-90 pl-1 text-sm leading-relaxed`}
                            >
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technologies Used */}
                    {experience.technologies && (
                      <div className="mt-6 pt-4 border-t border-white/10">
                        <p className={`${currentTheme.textColor} text-sm font-medium mb-3 opacity-80`}>
                          Technologies Used:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-white/5 border border-white/20 rounded-full text-xs font-medium text-white/80 hover:bg-white/10 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Related Skills */}
                    {relevantSkills.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <p className={`${currentTheme.textColor} text-sm font-medium mb-3 opacity-80`}>
                          Related Skills:
                        </p>
                        <div className="flex gap-3">
                          {relevantSkills.map((skill, skillIndex) => (
                            <div key={skillIndex} className="flex items-center gap-2">
                              <img
                                src={skill.imageUrl}
                                alt={skill.name}
                                className="w-6 h-6 object-contain"
                              />
                              <span className={`${currentTheme.textColor} text-xs opacity-80`}>
                                {skill.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Achievement Highlight */}
                    {experience.achievement && (
                      <div className="mt-4 p-3 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">🏆</span>
                          <p className={`${currentTheme.textColor} text-sm font-medium`}>
                            {experience.achievement}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
            <h4 className={`text-2xl font-bold text-amber-600 mb-2`}>
              {experiences.length}+
            </h4>
            <p className={`text-amber-600 opacity-80 text-sm`}>
              Professional Experiences
            </p>
          </div>
          <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
            <h4 className={`text-2xl font-bold text-amber-600 mb-2`}>
              {experiences.reduce((acc, exp) => acc + (exp.roles ? exp.roles.length : 1), 0)}+
            </h4>
            <p className={`text-amber-600 opacity-80 text-sm`}>
              Different Roles
            </p>
          </div>
          <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
            <h4 className={`text-2xl font-bold text-amber-600 mb-2`}>
              3+
            </h4>
            <p className={`text-amber-600 opacity-80 text-sm`}>
              Years of Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};