import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { useTheme } from "../ThemeContext";

export const Certificates = () => {
  const { currentTheme } = useTheme();
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  
  // Sample certificates data - replace with your actual certificates
  const certificates = [
    {
      id: 1,
      title: "Databricks for Data Engineering",
      issuer: "Databricks",
      date: "2025",
      image: "/PersonalPortfolio/certificates/db_de.png",
      description: "Foundational certification for data engineering in Databricks architecture, storage, and pipeline tools",
      category: "Data Engineering",
      color: "amber"
    },
    {
      id: 2,
      title: "Tech Fellow Leadership",
      issuer: "CodePath",
      date: "2025",
      image: "/PersonalPortfolio/certificates/cp_tip.png",
      description: "Leadership recognition for supporting technical interview preparation programs",
      category: "Leadership",
      color: "purple"
    },
    {
      id: 3,
      title: "Web Development",
      issuer: "Amazon Web Services",
      date: "2024",
      image: "/PersonalPortfolio/certificates/cp-itw.jpg",
      description: "Honor-level certification in web development fundamentals",
      category: "Web Development",
      color: "blue"
    },
    {
      id: 4,
      title: "Databricks Fundamentals",
      issuer: "Databricks",
      date: "2024",
      image: "/PersonalPortfolio/certificates/db_acc.png",
      description: "Foundational certification in Databricks platform overview and core concepts",
      category: "Data Engineering",
      color: "green"
    }
  ];

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCertificate(null);
    document.body.style.overflow = 'unset';
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  const getColorClasses = (color) => {
    const colors = {
      amber: "from-amber-500/20 to-orange-500/20 border-amber-500/30",
      purple: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
      blue: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
      green: "from-green-500/20 to-emerald-500/20 border-green-500/30"
    };
    return colors[color] || colors.blue;
  };

  return (
    <section
      id="certificates"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4 mt-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className={`text-5xl font-bold mb-4 ${currentTheme.textColor} font-sans`}>
              Certifications & Achievements
            </h2>
            <p className={`text-lg opacity-80 ${currentTheme.textColor} max-w-2xl mx-auto`}>
              Professional certifications that validate my expertise and commitment to continuous learning
            </p>
          </div>
          
          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {certificates.map((certificate, index) => (
              <div
                key={certificate.id}
                className={`
                  group relative overflow-hidden
                  glass rounded-xl border ${currentTheme.borderColor} backdrop-blur-lg
                  hover:scale-[1.02] hover:border-amber-400/50
                  hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                  transition-all duration-500 ease-out
                `}
              >
                <div className="relative p-5">
                  {/* Category Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <span className={`
                      px-3 py-1 rounded-full text-xs font-medium
                      bg-white/10 ${currentTheme.textColor} backdrop-blur-sm
                      border border-white/20
                    `}>
                      {certificate.category}
                    </span>
                    <span className={`text-sm ${currentTheme.textColor} opacity-60 font-mono`}>
                      {certificate.date}
                    </span>
                  </div>

                  {/* Certificate Preview */}
                  <div className="mb-4 h-32 rounded-lg overflow-hidden bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors duration-300">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback */}
                    <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center hidden">
                      <div className="text-center">
                        <div className="text-3xl mb-2">🏆</div>
                        <div className={`text-xs ${currentTheme.textColor} opacity-70`}>
                          Certificate Preview
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className={`text-lg font-bold ${currentTheme.textColor} leading-tight`}>
                      {certificate.title}
                    </h3>
                    
                    <p className={`${currentTheme.textColor} opacity-80 font-medium text-sm`}>
                      {certificate.issuer}
                    </p>
                    
                    <p className={`${currentTheme.textColor} opacity-70 text-sm leading-relaxed line-clamp-2`}>
                      {certificate.description}
                    </p>

                    {/* View Button */}
                    <button
                      onClick={() => openModal(certificate)}
                      className={`
                        group/btn inline-flex items-center gap-2 mt-4
                        px-4 py-2 rounded-lg
                        bg-white/10 hover:bg-white/20
                        border border-white/20 hover:border-white/40
                        ${currentTheme.textColor} hover:text-white
                        font-medium text-xs
                        transition-all duration-300
                        backdrop-blur-sm
                        focus:outline-none focus:ring-2 focus:ring-white/30
                      `}
                    >
                      <span>View Certificate</span>
                      <svg className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      {/* Modal - Simple like original */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              ×
            </button>

            {/* Certificate Image */}
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              className="w-full h-full object-contain"
              onError={(e) => {
                // Fallback content for modal
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            
            {/* Fallback content for modal if image fails */}
            <div className="w-full h-96 bg-gray-100 flex items-center justify-center hidden">
              <div className="text-center text-gray-600">
                <div className="text-6xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold mb-2">{selectedCertificate.title}</h3>
                <p className="text-lg">{selectedCertificate.issuer}</p>
                <p className="text-sm opacity-70 mt-2">{selectedCertificate.date}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};