import { useState, useEffect } from 'react';
import { RevealOnScroll } from "../RevealOnScroll";
import { useTheme } from "../ThemeContext";

export const Certificates = () => {
  const { currentTheme } = useTheme();
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  // Add your certificate PDFs to the public/certificates/ folder
  const certificates = [
    {
      id: 1,
      title: "Certificate 1",
      path: "certificates/db_de.pdf",
      thumbnail: "certificates/db_de.png" // Add image thumbnails
    },
    {
      id: 2,
      title: "Certificate 2",
      path: "/certificates/certificate2.pdf",
      thumbnail: "/certificates/certificate2.jpg"
    },
    {
      id: 3,
      title: "Certificate 3",
      path: "/certificates/certificate3.pdf",
      thumbnail: "/certificates/certificate3.jpg"
    }
  ];

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCertificate(null);
    // Restore body scrolling when modal is closed
    document.body.style.overflow = 'unset';
  };

  // Cleanup: restore scrolling if component unmounts with modal open
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <section
      id="certificates"
      className="min-h-screen flex items-center justify-center relative py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Title */}
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${currentTheme.textColor}`}>
            Certificates
          </h2>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                onClick={() => openModal(cert)}
                className={`
                  w-72 h-52 sm:w-80 sm:h-60 border-2 ${currentTheme.borderColor} rounded-lg 
                  cursor-pointer hover:shadow-lg transition-all duration-300
                  hover:scale-105 bg-white dark:bg-gray-800 overflow-hidden
                  relative group flex items-center justify-center
                `}
              >
                {/* Certificate Thumbnail Image */}
                <img
                  src={cert.thumbnail}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                
                {/* Fallback content when image can't be loaded */}
                <div className="hidden flex-col items-center justify-center h-full p-4">
                  <svg 
                    className={`w-16 h-16 mb-4 ${currentTheme.textColor}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1.5} 
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                    />
                  </svg>
                  <p className={`text-sm ${currentTheme.textColor} text-center opacity-70`}>
                    Certificate Preview
                  </p>
                  <p className={`text-xs ${currentTheme.textColor} text-center opacity-50 mt-2`}>
                    Click to view full certificate
                  </p>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg">
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
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      {/* Modal */}
      {selectedCertificate && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-8"
          onClick={closeModal}
        >
          {/* Close Button - Positioned outside the frame */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-20 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            aria-label="Close certificate"
          >
            <svg 
              className="w-6 h-6 text-gray-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>

          <div 
            className="relative bg-white rounded-lg max-w-4xl max-h-[85vh] w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* PDF Viewer */}
            <iframe
              src={selectedCertificate.path}
              className="w-full h-[85vh]"
              title={selectedCertificate.title}
            />
          </div>
        </div>
      )}
    </section>
  );
};