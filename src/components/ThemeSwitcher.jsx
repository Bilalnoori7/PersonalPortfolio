import { useState } from 'react';
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

  const handleCustomColorApply = () => {
    // Create a custom theme object with the selected colors
    const customTheme = {
      name: 'Custom',
      leftColor: customLeftColor, // Direct hex value for custom themes
      rightColor: customRightColor,
      isCustom: true // Flag to identify custom themes
    };
    
    handleThemeChange(customTheme);
    setShowColorPicker(false);
    setIsOpen(false);
  };

  return (
    <div className="fixed right-6 top-20 z-50 theme-switcher-button">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="bg-gray-800 hover:bg-gray-700 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
        aria-label="Toggle theme options"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.998 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 bg-gray-800 rounded-lg shadow-xl p-3 flex flex-col gap-3 w-14">
          {themes.map((theme, index) => (
            <button
              key={index}
              onClick={() => {
                handleThemeChange(theme);
                setIsOpen(false);
              }}
              className="w-8 h-8 rounded-full overflow-hidden flex cursor-pointer hover:scale-110 transition-transform"
              title={theme.name}
            >
              <div className={`w-1/2 h-full ${theme.leftColor}`}></div>
              <div className={`w-1/2 h-full ${theme.rightColor}`}></div>
            </button>
          ))}
          
          {/* Custom color picker button */}
          <button
            onClick={() => setShowColorPicker(!showColorPicker)}
            className="w-8 h-8 rounded-full overflow-hidden flex cursor-pointer hover:scale-110 transition-transform bg-white custom-color-button"
            title="Custom Colors"
          >
            <div className="w-full h-full flex items-center justify-center text-black font-bold">
              +
            </div>
          </button>
        </div>
      )}
      
      {/* Custom color picker panel */}
      {showColorPicker && (
        <div className="absolute right-16 top-0 bg-gray-800 p-4 rounded-lg shadow-xl w-64 border border-gray-700">
          <h3 className="text-white text-sm font-medium mb-3">Choose Custom Colors</h3>
          
          <div className="mb-3">
            <label className="text-white text-xs block mb-1">Background Color (Left):</label>
            <div className="flex items-center">
              <input
                type="color"
                value={customLeftColor}
                onChange={(e) => setCustomLeftColor(e.target.value)}
                className="w-8 h-8 rounded mr-2 cursor-pointer"
              />
              <input
                type="text"
                value={customLeftColor}
                onChange={(e) => setCustomLeftColor(e.target.value)}
                className="bg-gray-700 text-white px-2 py-1 text-xs rounded w-24"
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label className="text-white text-xs block mb-1">Text Color (Right):</label>
            <div className="flex items-center">
              <input
                type="color"
                value={customRightColor}
                onChange={(e) => setCustomRightColor(e.target.value)}
                className="w-8 h-8 rounded mr-2 cursor-pointer"
              />
              <input
                type="text"
                value={customRightColor}
                onChange={(e) => setCustomRightColor(e.target.value)}
                className="bg-gray-700 text-white px-2 py-1 text-xs rounded w-24"
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label className="text-white text-xs block mb-1">Preview:</label>
            {/* The preview always uses inline styles, so it works independently of the global theme */}
            <div className="flex flex-col rounded-lg overflow-hidden mx-auto border border-gray-600">
              <div style={{backgroundColor: customLeftColor, padding: "10px"}} className="w-full">
                <p style={{color: customRightColor}}  className="text-center font-bold">
                  Sample Text
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between">
            <button 
              onClick={() => setShowColorPicker(false)}
              className="text-xs text-white px-3 py-1 bg-gray-700 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
            <button 
              onClick={handleCustomColorApply}
              className="text-xs text-white px-3 py-1 bg-blue-600 rounded hover:bg-blue-500"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};