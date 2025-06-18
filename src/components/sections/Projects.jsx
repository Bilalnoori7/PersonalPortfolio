import { RevealOnScroll } from "../RevealOnScroll";
import { useTheme } from "../ThemeContext";
import { useState } from "react";

export const Projects = () => {
  const { currentTheme } = useTheme();
  const [hoveredProject, setHoveredProject] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: "Data Warehouse & Analytics",
      description: "Comprehensive data warehousing solution implementing Bronze-Silver-Gold architecture with ETL pipelines, data modeling, and SQL-based analytics for actionable business insights.",
      technologies: ["SQL Server", "ETL Pipelines", "Star Schema", "Data Modeling", "Analytics"],
      githubUrl: "https://github.com/Bilalnoori7/sql-data-warehouse-project/tree/main",
      liveUrl: null,
      featured: true,
      category: "Data Engineering",
      impact: "Developed during hospital recovery period following tumor removal surgery",
      status: "Completed"
    },
    {
      id: 2,
      title: "AI Enterprise Search Integration",
      description: "Built AI-powered enterprise search tool that won Microsoft x AAA hackathon, reducing document retrieval time by 90% and enabling 900+ employees to search company documents directly within Microsoft Teams workflow.",
      technologies: ["Microsoft Copilot", "Power Apps", "JavaScript", "Data Integration"],
      githubUrl: null,
      liveUrl: null,
      featured: true,
      category: "AI/ML",
      impact: "90% reduction in document retrieval time",

      award: "🏆 Microsoft x AAA Hackathon Winner"
    },
    {
      id: 3,
      title: "City-Builder",
      description: " Implemented clean object-oriented programming architecture by applying iterator and visitor design patterns, enabling efficient city component traversal and operations in C++ with wxWidgets.",
      technologies: ["Socket.IO", "Express", "React", "Redis"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
      category: "Full Stack",
      impact: "Demonstrates advanced programming concepts beyond basic coding",
    },
    {
      id: 4,
      title: "PAWS & LAWS: Advocating for XL Bullies",
      description: "Built an advocacy website for XL Bullies as a 10-week CodePath capstone project, creating a responsive interface to educate the public—selected as best in cohort and presented to leadership.",
      technologies: ["HTML", "CSS", "JavaScript", "Wireframing", "Replit"],
      githubUrl: "#",
      liveUrl: "https://b-noori-advocacy-project-nooribil.replit.app/",
      featured: false,
      category: "Full Stack",
      impact: "My first ever website, selected as the best capstone project in my CodePath cohort.",
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          {/* Header Section */}
          <h2 className={`text-[40px] font-bold mb-8 ${currentTheme.textColor} text-center font-sans`}>
            Featured Projects
          </h2>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                currentTheme={currentTheme}
                hoveredProject={hoveredProject}
                setHoveredProject={setHoveredProject}
              />
            ))}
          </div>


        </div>
      </RevealOnScroll>
    </section>
  );
};

// Project Card Component
const ProjectCard = ({ 
  project, 
  index, 
  currentTheme, 
  hoveredProject, 
  setHoveredProject
}) => {
  const isHovered = hoveredProject === project.id;

  return (
    <div
      className={`
        glass p-6 rounded-xl border ${currentTheme.borderColor}
        hover:-translate-y-1 hover:border-blue-500/30
        hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
        transition-all duration-300
      `}
      onMouseEnter={() => setHoveredProject(project.id)}
      onMouseLeave={() => setHoveredProject(null)}
      style={{
        animationDelay: `${index * 0.1}s`
      }}
    >
      {/* Content */}
      <div className="relative z-10">
        {/* Header with award if present */}
        <div className="flex items-start justify-between mb-2">
          <h3 className={`text-xl font-bold ${currentTheme.textColor}`}>
            {project.title}
          </h3>
          {project.award && (
            <span className="text-lg ml-2" title={project.award}>
              🏆
            </span>
          )}
        </div>

        {/* Description */}
        <p className={`${currentTheme.textColor} mb-4`}>
          {project.description}
        </p>

        {/* Impact */}
        {project.impact && (
          <div className={`mb-4 text-sm font-medium ${currentTheme.textColor} opacity-75`}>
            💡 {project.impact}
          </div>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4 font-bold">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="py-1 px-3 rounded-full text-sm transition
                        hover:bg-[var(--hover-bg)] hover:-translate-y-0.5
                        hover:shadow-[0_2px_8px_var(--hover-shadow)]"
              style={{
                backgroundColor: `var(--primary-bg-light, rgba(59, 130, 246, 0.1))`,
                color: `var(--primary-text, #3B82F6)`,
                '--hover-bg': 'var(--primary-bg-light, rgba(59, 130, 246, 0.2))',
                '--hover-shadow': 'var(--card-glow, rgba(59, 130, 246, 0.2))',
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              View Project →
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};