import React, { createContext, useContext, useEffect, useState } from 'react';
import logoLight from '../assets/images/rclogov2.png';
import logoDark from '../assets/images/rclogov2-dark.png';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'));

  // Update favicon based on theme
  const updateFavicon = (dark) => {
    const favicon = document.querySelector("link[rel~='icon']");
    if (favicon) {
      favicon.href = dark ? logoDark : logoLight;
    }
  };

  const toggleTheme = () => {
    const html = document.documentElement;
    html.classList.toggle('dark');
    const dark = html.classList.contains('dark');
    setIsDark(dark);
    updateFavicon(dark);
  };

  useEffect(() => {
    // Listen for theme changes outside React
    const observer = new MutationObserver(() => {
      const dark = document.documentElement.classList.contains('dark');
      setIsDark(dark);
      updateFavicon(dark);
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    // Set favicon on mount
    updateFavicon(isDark);
    return () => observer.disconnect();
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
