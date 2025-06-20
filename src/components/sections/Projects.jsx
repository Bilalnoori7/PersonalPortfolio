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
      description: "Implemented clean object-oriented programming architecture by applying iterator and visitor design patterns, enabling efficient city component traversal and operations in C++ with wxWidgets.",
      technologies: ["C++", "wxWidgets", "OOP", "Design Patterns"],
      githubUrl: "https://github.com/Bilalnoori7/city-builder",
      liveUrl: "#",
      videoUrl: "/PersonalPortfolio/demo/city.mp4",
      featured: false,
      category: "Desktop Application",
      impact: "Demonstrates advanced programming concepts beyond basic coding"
    },
    {
      id: 4,
      title: "PAWS & LAWS: Advocating for XL Bullies",
      description: "Built an advocacy website for XL Bullies as a 10-week CodePath capstone project, creating a responsive interface to educate the public—selected as best in cohort and presented to leadership.",
      technologies: ["HTML", "CSS", "JavaScript", "Wireframing", "Replit"],
      featured: false,
      category: "Web Development",
      impact: "My first ever website, selected as the best capstone project in my CodePath cohort",
      githubUrl: "https://b-noori-advocacy-project-nooribil.replit.app/"
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
          <h3 className={`text-[40px] font-bold  ${currentTheme.textColor} text-center font-sans`}>
            Featured Projects
          </h3>
          <p className={`text-lg opacity-80 ${currentTheme.textColor} max-w-2xl mx-auto text-center mb-12`}>
            A collection of work that showcases my technical skills and problem-solving approach
          </p>
          
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
  const [showVideo, setShowVideo] = useState(false);

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

        {/* Video Demo Section */}
        {project.videoUrl && (
          <div className="mb-4">
            {!showVideo ? (
              <button
                onClick={() => setShowVideo(true)}
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                </svg>
                <span>Watch Video</span>
              </button>
            ) : (
              <div className="relative">
                <video
                  controls
                  autoPlay
                  className="w-full rounded-lg border border-blue-500/30"
                  style={{ maxHeight: '300px' }}
                >
                  <source src={project.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <button
                  onClick={() => setShowVideo(false)}
                  className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white 
                            rounded-full w-8 h-8 flex items-center justify-center transition-all"
                >
                  ×
                </button>
              </div>
            )}
          </div>
        )}

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
         
        </div>
      </div>
    </div>
  );
};