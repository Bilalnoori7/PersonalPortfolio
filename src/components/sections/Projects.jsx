import { RevealOnScroll } from "../RevealOnScroll";
import { useTheme } from "../ThemeContext";

export const Projects = () => {
  const { currentTheme } = useTheme();
  
  // Generate dynamic style based on the current theme - same as in Skills.jsx
  const tagStyle = {
    backgroundColor: `var(--primary-bg-light, rgba(59, 130, 246, 0.1))`,
    color: `var(--primary-text, #3B82F6)`,
  };
  
  // Style for the hover effect - same as in Skills.jsx
  const hoverTagStyle = {
    '--hover-bg': 'var(--primary-bg-light, rgba(59, 130, 246, 0.2))',
    '--hover-shadow': 'var(--card-glow, rgba(59, 130, 246, 0.2))',
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className={`text-[40px] font-bold mb-8 ${currentTheme.textColor} text-center font-sans`}>
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`p-6 rounded-xl border ${currentTheme.borderColor} hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition`}>
              <h3 className={`text-xl font-bold mb-2 ${currentTheme.textColor}`}> Cloud Platform</h3>
              <p className={`${currentTheme.textColor} mb-4`}>
                Scalable cloud infrastructure management with real-time
                monitoring and automated scaling.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                  <span
                    key={key}
                    className="py-1 px-3 rounded-full text-sm transition
                              hover:bg-[var(--hover-bg)] hover:-translate-y-0.5
                              hover:shadow-[0_2px_8px_var(--hover-shadow)]"
                    style={{...tagStyle, ...hoverTagStyle}}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            
            <div
              className={`
              glass p-6 rounded-xl border ${currentTheme.borderColor}
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            `}
            >
              <h3 className={`text-xl font-bold mb-2 ${currentTheme.textColor}`}>AI Analytics Dashboard</h3>
              <p className={`${currentTheme.textColor} mb-4`}>
                ML-powered data visualization platform with predictive analytics
                and interactive reports.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "TensorFlow", "D3.js", "Flask"].map((tech, key) => (
                  <span
                    key={key}
                    className="py-1 px-3 rounded-full text-sm transition
                              hover:bg-[var(--hover-bg)] hover:-translate-y-0.5
                              hover:shadow-[0_2px_8px_var(--hover-shadow)]"
                    style={{...tagStyle, ...hoverTagStyle}}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className={`
              glass p-6 rounded-xl border ${currentTheme.borderColor}
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            `}
            >
              <h3 className={`text-xl font-bold mb-2 ${currentTheme.textColor}`} >Data Warehouse & Analytics</h3>
              <p className={`${currentTheme.textColor} mb-4`}>
                Comprehensive data warehousing solution implementing Bronze-Silver-Gold architecture with ETL pipelines, data modeling, and SQL-based analytics for actionable business insights.
              </p>
              <div className="flex flex-wrap gap-2 mb-4 font-bold">
                {["SQL Server", "ETL Pipelines", "Star Schema", "Data Modeling", "Analytics"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="py-1 px-3 rounded-full text-sm transition
                                hover:bg-[var(--hover-bg)] hover:-translate-y-0.5
                                hover:shadow-[0_2px_8px_var(--hover-shadow)]"
                      style={{...tagStyle, ...hoverTagStyle}}
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Bilalnoori7/sql-data-warehouse-project/tree/main"
                    target="_blank"
                    rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className={`
              glass p-6 rounded-xl border ${currentTheme.borderColor}
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            `}
            >
              <h3 className={`text-xl font-bold mb-2 ${currentTheme.textColor}`}>Real-Time Chat App</h3>
              <p className={`${currentTheme.textColor} mb-4`}>
                Scalable chat platform supporting real-time messaging, presence,
                and group chat features.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Socket.IO", "Express", "React", "Redis"].map((tech, key) => (
                  <span
                    key={key}
                    className="py-1 px-3 rounded-full text-sm transition
                              hover:bg-[var(--hover-bg)] hover:-translate-y-0.5
                              hover:shadow-[0_2px_8px_var(--hover-shadow)]"
                    style={{...tagStyle, ...hoverTagStyle}}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};