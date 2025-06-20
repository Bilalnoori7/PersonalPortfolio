import { useState, useEffect, useRef } from 'react';
import { useTheme } from './ThemeContext';

export const ThemeSwitcher = () => {
  const themes = [
    { name: 'Default', leftColor: 'bg-[#FFFCF4]', rightColor: 'bg-[#749335]' },
    { name: 'Dark Mode', leftColor: 'bg-[#111111]', rightColor: 'bg-white' },
    { name: 'Light Mode', leftColor: 'bg-[#FFFCF4]', rightColor: 'bg-[#111111]' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [customLeftColor, setCustomLeftColor] = useState('#111111');
  const [customRightColor, setCustomRightColor] = useState('#FFFFFF');
  const { handleThemeChange } = useTheme();
  
  const containerRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
        setShowColorPicker(false);
      }
    };

    if (isOpen || showColorPicker) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, showColorPicker]);

  const handleCustomColorApply = () => {
    const customTheme = {
      name: 'Custom',
      leftColor: customLeftColor,
      rightColor: customRightColor,
      isCustom: true
    };
    
    handleThemeChange(customTheme);
    setShowColorPicker(false);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    if (showColorPicker) {
      setShowColorPicker(false);
      setIsOpen(true);
    } else {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div ref={containerRef} className="fixed right-6 top-20 z-50">
      {/* Main theme button */}
      <button 
        onClick={toggleMenu}
        className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 text-white shadow-lg transition-all duration-200 border border-gray-600"
        aria-label="Toggle theme options"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-auto">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.998 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
        </svg>
      </button>

      {/* Theme selection menu */}
      {isOpen && !showColorPicker && (
        <div className="absolute right-0 mt-3 bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-sm rounded-xl shadow-2xl p-4 border border-white/10 animate-in slide-in-from-right-2 duration-200">
          <div className="text-white text-xs font-medium mb-3 opacity-80">Choose Theme</div>
          <div className="flex flex-col gap-3 w-16">
            {themes.map((theme, index) => (
              <button
                key={index}
                onClick={() => {
                  handleThemeChange(theme);
                  setIsOpen(false);
                }}
                className="group relative w-10 h-10 rounded-lg overflow-hidden cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-lg border border-white/20"
                title={theme.name}
              >
                <div className={`w-1/2 h-full ${theme.leftColor} transition-all duration-200`}></div>
                <div className={`w-1/2 h-full ${theme.rightColor} absolute top-0 right-0 transition-all duration-200`}></div>
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-200"></div>
              </button>
            ))}
            
            {/* Custom color picker button */}
            <button
              onClick={() => setShowColorPicker(true)}
              className="group relative w-10 h-10 rounded-lg overflow-hidden cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-lg bg-gradient-to-br from-purple-500 to-blue-600 border border-white/20"
              title="Custom Colors"
            >
              <div className="w-full h-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-200">
                +
              </div>
            </button>
          </div>
        </div>
      )}
      
      {/* Custom color picker panel */}
      {showColorPicker && (
        <div className="absolute right-0 mt-3 bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-sm p-6 rounded-xl shadow-2xl w-80 border border-white/10 animate-in slide-in-from-right-2 duration-200">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white text-lg font-semibold">Custom Theme</h3>
            <button 
              onClick={() => setShowColorPicker(false)}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Color inputs */}
          <div className="space-y-4 mb-6">
            <div>
              <label className="text-white text-sm font-medium block mb-2">Background Color</label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={customLeftColor}
                  onChange={(e) => setCustomLeftColor(e.target.value)}
                  className="w-12 h-10 rounded-lg cursor-pointer border border-white/20"
                />
                <input
                  type="text"
                  value={customLeftColor}
                  onChange={(e) => setCustomLeftColor(e.target.value)}
                  className="bg-gray-700/80 text-white px-3 py-2 text-sm rounded-lg flex-1 border border-white/20 focus:border-blue-400 focus:outline-none transition-colors duration-200"
                  placeholder="#000000"
                />
              </div>
            </div>
            
            <div>
              <label className="text-white text-sm font-medium block mb-2">Text Color</label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={customRightColor}
                  onChange={(e) => setCustomRightColor(e.target.value)}
                  className="w-12 h-10 rounded-lg cursor-pointer border border-white/20"
                />
                <input
                  type="text"
                  value={customRightColor}
                  onChange={(e) => setCustomRightColor(e.target.value)}
                  className="bg-gray-700/80 text-white px-3 py-2 text-sm rounded-lg flex-1 border border-white/20 focus:border-blue-400 focus:outline-none transition-colors duration-200"
                  placeholder="#FFFFFF"
                />
              </div>
            </div>
          </div>
          
          {/* Preview */}
          <div className="mb-6">
            <label className="text-white text-sm font-medium block mb-2">Preview</label>
            <div 
              style={{backgroundColor: customLeftColor}} 
              className="rounded-lg p-4 border border-white/20"
            >
              <p 
                style={{color: customRightColor}} 
                className="text-center font-semibold text-lg"
              >
                Bilal Innovations
              </p>
              <p 
                style={{color: customRightColor}} 
                className="text-center text-sm opacity-80 mt-1"
              >
                Sample theme preview
              </p>
            </div>
          </div>
          
          {/* Action buttons */}
          <div className="flex gap-3">
            <button 
              onClick={() => setShowColorPicker(false)}
              className="flex-1 text-sm text-white px-4 py-2 bg-gray-700/80 rounded-lg hover:bg-gray-600/80 transition-colors duration-200 border border-white/20"
            >
              Cancel
            </button>
            <button 
              onClick={handleCustomColorApply}
              className="flex-1 text-sm text-white px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-200 shadow-lg"
            >
              Apply Theme
            </button>
          </div>
        </div>
      )}
    </div>
  );
};