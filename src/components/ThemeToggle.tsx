
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check for user preference from localStorage or system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
      toast({
        title: "Modo claro activado",
        description: "Has cambiado al tema claro",
        duration: 2000
      });
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
      toast({
        title: "Modo oscuro activado",
        description: "Has cambiado al tema oscuro",
        duration: 2000
      });
    }
  };

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme}
      className="rounded-full w-9 h-9 bg-gray-100 dark:bg-gray-800 relative overflow-hidden transition-all duration-300"
      aria-label="Toggle theme"
    >
      <span className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${isDarkMode ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`}>
        <Sun className="h-5 w-5 text-aelityx-yellow" />
      </span>
      <span className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${isDarkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-0'}`}>
        <Moon className="h-5 w-5 text-aelityx-blue" />
      </span>
    </Button>
  );
};

export default ThemeToggle;
