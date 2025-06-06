import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "<Hello World />";

  // Disable scrolling when component mounts
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        
        // Hide cursor after typing is complete
        setTimeout(() => {
          setShowCursor(false);
        }, 500);

        setTimeout(() => {
          // Re-enable scrolling before calling onComplete
          document.body.style.overflow = 'unset';
          onComplete?.();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete, fullText]);

  // Cursor blinking effect
  useEffect(() => {
    if (!showCursor) return;
    
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-100 flex flex-col items-center justify-center">
      {/* Main typewriter text */}
      <div className="mb-8 text-4xl md:text-5xl font-mono font-bold tracking-wider">
        <span className="text-green-400">{text}</span>
        <span className={`ml-1 text-white transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>
          |
        </span>
      </div>

      {/* Enhanced loading bar */}
      <div className="relative">
        <div className="w-80 h-1 bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-pulse"
            style={{
              width: '40%',
              boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
              animation: 'loading-slide 2s ease-in-out infinite'
            }}
          />
        </div>
        
        {/* Loading dots */}
        <div className="flex justify-center mt-6 space-x-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}} />
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}} />
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}} />
        </div>
      </div>

      {/* Loading text */}
      <div className="mt-8 text-sm text-gray-400 font-mono">
        Initializing...
      </div>

      <style jsx>{`
        @keyframes loading-slide {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(200%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
};

// Demo component to show the loading screen in action
export default function LoadingScreenDemo() {
  const [showLoading, setShowLoading] = useState(true);

  const handleComplete = () => {
    setShowLoading(false);
  };

  const resetDemo = () => {
    setShowLoading(true);
  };

  if (showLoading) {
    return <LoadingScreen onComplete={handleComplete} />;
  }

}