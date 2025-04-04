
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useToast } from "@/components/ui/use-toast";

type ThemeType = 'light' | 'dark' | 'system';
type FontSizeType = number;

interface ThemeContextType {
  theme: ThemeType;
  systemTheme: 'light' | 'dark';
  fontSizeBase: FontSizeType;
  setTheme: (theme: ThemeType) => void;
  setFontSizeBase: (size: FontSizeType) => void;
  toggleTheme: () => void;
}

const defaultContext: ThemeContextType = {
  theme: 'system',
  systemTheme: 'light',
  fontSizeBase: 16,
  setTheme: () => {},
  setFontSizeBase: () => {},
  toggleTheme: () => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultContext);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { toast } = useToast();
  const [theme, setThemeState] = useState<ThemeType>('system');
  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>('light');
  const [fontSizeBase, setFontSizeBaseState] = useState<FontSizeType>(16);
  const [loaded, setLoaded] = useState(false);

  // Load theme and font size from localStorage
  useEffect(() => {
    const loadSettings = async () => {
      try {
        const savedTheme = localStorage.getItem('theme');
        const savedFontSize = localStorage.getItem('fontSize');
        
        if (savedTheme) {
          setThemeState(savedTheme as ThemeType);
        }
        
        if (savedFontSize) {
          setFontSizeBaseState(parseFloat(savedFontSize));
        }
        
        setLoaded(true);
      } catch (error) {
        console.error('Failed to load settings:', error);
        setLoaded(true);
      }
    };
    
    loadSettings();
  }, []);

  // Check for system theme preference and listen for changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const updateSystemTheme = (e: MediaQueryListEvent | MediaQueryList) => {
      const newSystemTheme = e.matches ? 'dark' : 'light';
      setSystemTheme(newSystemTheme);
    };
    
    updateSystemTheme(mediaQuery);
    
    // Listen for system theme changes
    mediaQuery.addEventListener('change', updateSystemTheme);
    
    return () => mediaQuery.removeEventListener('change', updateSystemTheme);
  }, []);

  // Apply theme class to document and update CSS variable for font size
  useEffect(() => {
    if (!loaded) return;
    
    document.documentElement.style.setProperty('--font-size-base', `${fontSizeBase}px`);
    
    const effectiveTheme = theme === 'system' ? systemTheme : theme;
    
    if (effectiveTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme, systemTheme, fontSizeBase, loaded]);

  // Save settings to localStorage when they change
  useEffect(() => {
    if (!loaded) return;
    
    try {
      localStorage.setItem('theme', theme);
      localStorage.setItem('fontSize', fontSizeBase.toString());
    } catch (error) {
      console.error('Failed to save settings:', error);
    }
  }, [theme, fontSizeBase, loaded]);

  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme);
    
    // Show toast notification
    toast({
      title: "Theme Updated",
      description: `Theme set to ${newTheme === 'system' ? 'system default' : newTheme}`,
      duration: 2000,
    });
  };

  const setFontSizeBase = (newSize: FontSizeType) => {
    setFontSizeBaseState(newSize);
    
    // Show toast notification
    toast({
      title: "Font Size Updated",
      description: `Font size set to ${newSize}px`,
      duration: 2000,
    });
  };

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        systemTheme,
        fontSizeBase,
        setTheme,
        setFontSizeBase,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
