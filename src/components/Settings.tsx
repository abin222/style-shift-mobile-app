
import React from 'react';
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import { 
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useTheme } from '@/contexts/ThemeContext';
import { Sun, Moon, Monitor, Type } from 'lucide-react';

export const Settings = () => {
  const { theme, fontSizeBase, setTheme, setFontSizeBase } = useTheme();

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg animate-fade-in">
      <CardHeader>
        <CardTitle className="text-2xl-dynamic">Appearance Settings</CardTitle>
        <CardDescription className="text-base-dynamic">
          Customize your app experience
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="theme" className="w-full">
          <TabsList className="grid grid-cols-2 mb-6">
            <TabsTrigger value="theme" className="text-base-dynamic">
              <Sun className="h-4 w-4 mr-2" />
              Theme
            </TabsTrigger>
            <TabsTrigger value="font" className="text-base-dynamic">
              <Type className="h-4 w-4 mr-2" />
              Font Size
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="theme" className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-base-dynamic font-medium">Theme Mode</Label>
                  <p className="text-sm-dynamic text-muted-foreground">
                    Choose your preferred theme
                  </p>
                </div>
                <Select
                  value={theme}
                  onValueChange={(value) => setTheme(value as 'light' | 'dark' | 'system')}
                >
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Select theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">
                      <div className="flex items-center">
                        <Sun className="h-4 w-4 mr-2" />
                        Light
                      </div>
                    </SelectItem>
                    <SelectItem value="dark">
                      <div className="flex items-center">
                        <Moon className="h-4 w-4 mr-2" />
                        Dark
                      </div>
                    </SelectItem>
                    <SelectItem value="system">
                      <div className="flex items-center">
                        <Monitor className="h-4 w-4 mr-2" />
                        System
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <Card className="p-4 cursor-pointer transition-theme border-2 hover:bg-primary/5" 
                      onClick={() => setTheme('light')}
                      data-active={theme === 'light' ? "true" : "false"}
                      style={{ borderColor: theme === 'light' ? 'hsl(var(--primary))' : 'hsl(var(--border))' }}>
                  <div className="flex flex-col items-center gap-2">
                    <Sun className="h-8 w-8 text-theme-blue" />
                    <span className="text-sm-dynamic font-medium">Light</span>
                  </div>
                </Card>
                
                <Card className="p-4 cursor-pointer transition-theme border-2 hover:bg-primary/5"
                      onClick={() => setTheme('dark')}
                      data-active={theme === 'dark' ? "true" : "false"}
                      style={{ borderColor: theme === 'dark' ? 'hsl(var(--primary))' : 'hsl(var(--border))' }}>
                  <div className="flex flex-col items-center gap-2">
                    <Moon className="h-8 w-8 text-theme-purple" />
                    <span className="text-sm-dynamic font-medium">Dark</span>
                  </div>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="font" className="space-y-6">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="font-size" className="text-base-dynamic font-medium">Font Size: {fontSizeBase}px</Label>
                </div>
                <Slider
                  id="font-size"
                  min={12}
                  max={24}
                  step={1}
                  value={[fontSizeBase]}
                  onValueChange={(value) => setFontSizeBase(value[0])}
                  className="my-6"
                />
                <div className="flex justify-between mt-2">
                  <span className="text-xs-dynamic">Smaller</span>
                  <span className="text-xs-dynamic">Larger</span>
                </div>
              </div>
              
              <div className="p-4 border rounded-md bg-accent/50">
                <p className="text-base-dynamic mb-2">Preview Text</p>
                <p className="text-xs-dynamic mb-1">This is extra small text</p>
                <p className="text-sm-dynamic mb-1">This is small text</p>
                <p className="text-base-dynamic mb-1">This is base text</p>
                <p className="text-lg-dynamic mb-1">This is large text</p>
                <p className="text-xl-dynamic mb-1">This is extra large text</p>
                <p className="text-2xl-dynamic">This is 2xl text</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default Settings;
