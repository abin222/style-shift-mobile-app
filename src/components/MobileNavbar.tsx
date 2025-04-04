
import React from 'react';
import { Home, Settings as SettingsIcon, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { MoonStar, Sun } from 'lucide-react';

const MobileNavbar = () => {
  const location = useLocation();
  const { theme, systemTheme, toggleTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border transition-theme z-50">
      <div className="flex justify-between items-center px-4 py-3">
        <Link to="/" className="flex-1 flex flex-col items-center">
          <div className={`p-2 rounded-full ${location.pathname === '/' ? 'bg-primary/10' : ''}`}>
            <Home className={`h-6 w-6 ${location.pathname === '/' ? 'text-primary' : 'text-muted-foreground'}`} />
          </div>
          <span className={`text-xs-dynamic mt-1 ${location.pathname === '/' ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
            Home
          </span>
        </Link>
        
        <div className="flex-1 flex flex-col items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            className="relative h-10 w-10 rounded-full"
          >
            <div className={`p-2 rounded-full transition-all duration-300 ${currentTheme === 'dark' ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'} absolute inset-0 flex items-center justify-center`}>
              <Sun className="h-5 w-5 text-yellow-400" />
            </div>
            <div className={`p-2 rounded-full transition-all duration-300 ${currentTheme === 'light' ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'} absolute inset-0 flex items-center justify-center`}>
              <MoonStar className="h-5 w-5 text-theme-purple" />
            </div>
          </Button>
          <span className="text-xs-dynamic mt-1 text-muted-foreground">
            {currentTheme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </span>
        </div>
        
        <Link to="/settings" className="flex-1 flex flex-col items-center">
          <div className={`p-2 rounded-full ${location.pathname === '/settings' ? 'bg-primary/10' : ''}`}>
            <SettingsIcon className={`h-6 w-6 ${location.pathname === '/settings' ? 'text-primary' : 'text-muted-foreground'}`} />
          </div>
          <span className={`text-xs-dynamic mt-1 ${location.pathname === '/settings' ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
            Settings
          </span>
        </Link>
      </div>
    </div>
  );
};

export default MobileNavbar;
