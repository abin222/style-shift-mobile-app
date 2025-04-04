
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from '@/contexts/ThemeContext';
import { Sun, Moon, Smartphone } from 'lucide-react';

const HomePage = () => {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div className="container mx-auto px-4 py-8 pb-24 max-w-md">
      <header className="mb-8 text-center">
        <h1 className="text-3xl-dynamic font-bold mb-2 transition-theme">
          Welcome to ThemeShift
        </h1>
        <p className="text-base-dynamic text-muted-foreground transition-theme">
          A beautiful app with theme and font customization
        </p>
      </header>

      <Card className="mb-6 overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl-dynamic">Current Settings</CardTitle>
          <CardDescription className="text-sm-dynamic">
            Your active preferences
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center gap-2">
                {theme === 'system' ? (
                  <Smartphone className="h-5 w-5 text-theme-blue" />
                ) : currentTheme === 'dark' ? (
                  <Moon className="h-5 w-5 text-theme-purple" />
                ) : (
                  <Sun className="h-5 w-5 text-theme-blue" />
                )}
                <span className="text-base-dynamic font-medium">Active Theme</span>
              </div>
              <span className="text-base-dynamic text-muted-foreground capitalize">
                {theme === 'system' ? `System (${systemTheme})` : theme}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 grid-cols-2">
        <Card className="transition-theme">
          <CardHeader className="p-4">
            <CardTitle className="text-base-dynamic">Light Theme</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="h-20 bg-white border rounded-md flex items-center justify-center">
              <Sun className="h-8 w-8 text-theme-blue" />
            </div>
          </CardContent>
        </Card>

        <Card className="transition-theme">
          <CardHeader className="p-4">
            <CardTitle className="text-base-dynamic">Dark Theme</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="h-20 bg-gray-900 border rounded-md flex items-center justify-center">
              <Moon className="h-8 w-8 text-theme-purple" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl-dynamic font-semibold mb-4">Text Sizes</h2>
        <Card className="transition-theme">
          <CardContent className="p-4">
            <p className="text-xs-dynamic mb-2">Extra Small Text</p>
            <p className="text-sm-dynamic mb-2">Small Text</p>
            <p className="text-base-dynamic mb-2">Base Text</p>
            <p className="text-lg-dynamic mb-2">Large Text</p>
            <p className="text-xl-dynamic mb-2">Extra Large Text</p>
            <p className="text-2xl-dynamic">2XL Text</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
