import { createContext, useState, useContext, useEffect } from 'react';

// Create the context
const ThemeContext = createContext();

// Define the useTheme hook outside of the ThemeProvider component
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState({
    name: 'Default',
    leftColor: 'bg-[#111111]',
    rightColor: 'bg-white',
    textColor: 'text-white',
    bgColor: 'bg-[#111111]',
    borderColor: 'border-white/30',
    // Timeline styles
    timelineBoxBackground: '#111111',
    timelineBoxBorder: 'rgb(51, 51, 51)',
    // Custom theme flag
    isCustom: false,
    // Custom color values for inline styles
    customLeftColor: null,
    customRightColor: null,
    // Custom text color for inline styles
    customTextColor: null
  });

  // Apply timeline styles function
  const applyTimelineStyles = (theme) => {
    // Set CSS variables
    document.documentElement.style.setProperty('--timeline-bg', theme.timelineBoxBackground);
    document.documentElement.style.setProperty('--timeline-border', theme.timelineBoxBorder);
    
    // Direct DOM manipulation as fallback
    setTimeout(() => {
      const timelineElements = document.querySelectorAll('.vertical-timeline-element-content');
      timelineElements.forEach(element => {
        element.style.background = theme.timelineBoxBackground;
        element.style.border = `1px solid ${theme.timelineBoxBorder}`;
        element.style.boxShadow = 'none';
      });
      
      const contentArrows = document.querySelectorAll('.vertical-timeline-element-content-arrow');
      contentArrows.forEach(arrow => {
        arrow.style.borderRight = `7px solid ${theme.timelineBoxBorder}`;
      });
    }, 100);
  };

  // Apply text colors to all text elements
  const applyTextColors = (theme) => {
    // For custom themes, we need to apply text color directly
    if (theme.isCustom && theme.customTextColor) {

      
      // Apply to all main text elements - adjust selectors as needed for your app
      const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, p, span, a, button, li');
      textElements.forEach(element => {
        element.style.color = theme.customTextColor;
      });
      
      // Add a CSS variable for components to use
      document.documentElement.style.setProperty('--text-color', theme.customTextColor);
    } else {
      
      // Reset inline styles first
      const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, p, span, a, button, li');
      textElements.forEach(element => {
        element.style.color = '';
      });
      
      // Add global class to body to handle text color with Tailwind
      // Remove any existing text color classes
      document.body.classList.remove('text-white', 'text-gray-900', 'text-black', 'text-green-50');
      // Add the new text color class
      if (theme.textColor) {
        document.body.classList.add(theme.textColor);
      }
    }
  };

  // Helper to determine if a color is dark (for text contrast)
  const isColorDark = (hexColor) => {
    // Clean the hexColor if needed (removing 'bg-[#]' format)
    let cleanHex = hexColor;
    
    if (typeof hexColor === 'string') {
      // Extract hex from bg-[#xxxxxx] format if present
      const match = hexColor.match(/\[#([0-9a-f]{6})\]/i);
      if (match) {
        cleanHex = `#${match[1]}`;
      } else if (!hexColor.startsWith('#')) {
        // Default to assuming it's dark if we can't parse it
        console.warn("Could not parse hex color:", hexColor);
        return true;
      }
    } else {
      console.warn("Invalid hex color:", hexColor);
      return true;
    }
    
    // Now cleanHex should be in #RRGGBB format
    try {
      // Convert hex to RGB
      const hex = cleanHex.replace('#', '');
      const r = parseInt(hex.substr(0, 2), 16);
      const g = parseInt(hex.substr(2, 2), 16);
      const b = parseInt(hex.substr(4, 2), 16);
      
      // Calculate perceived brightness (YIQ formula)
      const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
      return yiq < 128; // Below 128 is considered dark
    } catch (e) {
      console.error("Error calculating color brightness:", e);
      return true; // Default to dark on error
    }
  };

  // Apply card styles function - NEW FUNCTION
  const applyCardStyles = (theme) => {
    if (theme.isCustom) {
      // For custom themes, set the variables directly
      const leftColor = theme.customLeftColor || (theme.leftColor.startsWith('#') ? theme.leftColor : `#${theme.leftColor}`);
      const rightColor = theme.customTextColor || (theme.rightColor.startsWith('#') ? theme.rightColor : `#${theme.rightColor}`);
      
      document.documentElement.style.setProperty('--primary-bg', leftColor);
      document.documentElement.style.setProperty('--primary-text', rightColor);
      document.documentElement.style.setProperty('--card-glow', `${leftColor}80`); // 50% opacity
      document.documentElement.style.setProperty('--card-gradient-start', leftColor);
      document.documentElement.style.setProperty('--card-gradient-end', rightColor);
    } else {
      // For predefined themes
      let bgColor, textColor;
      
      // Extract colors from theme names
      switch(theme.name) {
        case 'Default':
          bgColor = '#111111';
          textColor = '#FFFFFF';
          break;
        case 'Blue-White':
          bgColor = '#FFFCF4';
          textColor = '#111111';
          break;
        case 'Purple-White':
          bgColor = '#FFFCF4';
          textColor = '#749335';
          break;
        case 'Green-White':
          bgColor = 'rgb(22, 163, 74)'; // Green-600
          textColor = '#FFFFFF';
          break;
        default:
          bgColor = '#111111';
          textColor = '#FFFFFF';
      }
      
      document.documentElement.style.setProperty('--primary-bg', bgColor);
      document.documentElement.style.setProperty('--primary-text', textColor);
      document.documentElement.style.setProperty('--card-glow', `${bgColor}80`); // 50% opacity
      document.documentElement.style.setProperty('--card-gradient-start', bgColor);
      document.documentElement.style.setProperty('--card-gradient-end', textColor);
    }
  };

  const handleThemeChange = (theme) => {
    let completeTheme;
    
    if (theme.isCustom) {

      
      // Make sure we have hex values (with #)
      const leftColor = theme.leftColor.startsWith('#') ? theme.leftColor : `#${theme.leftColor}`;
      const rightColor = theme.rightColor.startsWith('#') ? theme.rightColor : `#${theme.rightColor}`;
      
    
      
      
      // Check if background is dark to determine appropriate text color
      const isDark = isColorDark(leftColor);
      
      // Create complete theme object for custom colors
      completeTheme = {
        name: 'Custom',
        leftColor: `bg-[${leftColor}]`, // Keep format for compatibility
        rightColor: `bg-[${rightColor}]`,
        // Empty textColor for custom themes - we'll use inline styles instead
        textColor: '',
        bgColor: `bg-[${leftColor}]`,
        borderColor: isDark ? 'border-white/30' : 'border-gray-900/30',
        timelineBoxBackground: leftColor,
        timelineBoxBorder: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
        isCustom: true,
        // Store custom colors for inline styles - critically important!
        customLeftColor: leftColor,
        customRightColor: rightColor,
        // Set the custom text color to the right color
        customTextColor: rightColor
      };
      
    } else {
      // For predefined themes, use the existing logic
      completeTheme = {
        ...theme,
        textColor: theme.name === 'Default' ? 'text-white' : 
                  theme.name === 'Blue-White' ? 'text-gray-900' :
                  theme.name === 'Purple-White' ? 'text-[#6B941E]' :
                  theme.name === 'Green-White' ? 'text-green-50' : 'text-black',
        bgColor: theme.leftColor,
        borderColor: theme.name === 'Default' ? 'border-white/30' : `${theme.rightColor.replace('bg-', 'border-')}/30`,
        timelineBoxBackground: theme.name === 'Default' ? '#111111' : 
                              theme.name === 'Blue-White' ? '#FFFCF4' :
                              theme.name === 'Purple-White' ? '#FFFCF4' :
                              theme.name === 'Green-White' ? 'rgb(21, 128, 61)' : 'rgb(0, 0, 0)',
        timelineBoxBorder: theme.name === 'Default' ? 'rgb(255, 255, 255)' : 
                          theme.name === 'Blue-White' ? '#111111' :
                          theme.name === 'Purple-White' ? '#111111' :
                          theme.name === 'Green-White' ? 'rgb(22, 101, 52)' : 'rgb(51, 51, 51)',
        isCustom: false,
        customLeftColor: null,
        customRightColor: null,
        customTextColor: null
      };
    }
    
    setCurrentTheme(completeTheme);
    
    // Apply the background to body
    if (completeTheme.isCustom && completeTheme.customLeftColor) {
      // For custom themes, set inline style
      document.body.className = ''; // Clear Tailwind classes
      document.body.style.backgroundColor = completeTheme.customLeftColor;
    } else {
      // For predefined themes, use Tailwind class
      document.body.className = completeTheme.bgColor;
      document.body.style.backgroundColor = ''; // Clear inline style
    }
    
    // Apply the text color
    applyTextColors(completeTheme);
    
    // Apply timeline styles
    applyTimelineStyles(completeTheme);
    
    // Apply card styles - NEW FUNCTION CALL
    applyCardStyles(completeTheme);
    
    // Save to localStorage
    localStorage.setItem('theme', JSON.stringify(completeTheme));
    
    return completeTheme; // Return the theme for easier debugging
  };
  
  // Load theme from localStorage on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      try {
        const parsedTheme = JSON.parse(savedTheme);

        setCurrentTheme(parsedTheme);
        
        // Apply the correct styling based on theme type
        if (parsedTheme.isCustom && parsedTheme.customLeftColor) {
          document.body.className = '';
          document.body.style.backgroundColor = parsedTheme.customLeftColor;
        } else {
          document.body.className = parsedTheme.bgColor;
          document.body.style.backgroundColor = '';
        }
        
        // Apply the text color when loading from localStorage
        applyTextColors(parsedTheme);
        
        // Apply timeline styles
        applyTimelineStyles(parsedTheme);
        
        // Apply card styles when loading from localStorage - NEW CODE
        applyCardStyles(parsedTheme);
      } catch (e) {
        console.error("Error loading theme from localStorage:", e);
        // Apply styles for default theme as fallback
        applyTimelineStyles(currentTheme);
        // Apply text colors for default theme as fallback
        applyTextColors(currentTheme);
        // Apply card styles for default theme as fallback - NEW CODE
        applyCardStyles(currentTheme);
      }
    } else {
      // Apply styles for default theme
      applyTimelineStyles(currentTheme);
      // Apply text colors for default theme
      applyTextColors(currentTheme);
      // Apply card styles for default theme - NEW CODE
      applyCardStyles(currentTheme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ currentTheme, handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};