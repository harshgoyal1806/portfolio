import { createContext, useState, useMemo, useContext,useEffect } from "react";

export const ThemeContext = createContext(null);

export const ThemeContextProvider = ({ children }) => {
   const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  const value = useMemo(() => ({
    theme,
    setTheme,
    toggleTheme
  }), [theme]);
 useEffect(() => {
  localStorage.setItem("theme", theme);
  document.body.classList.remove("light", "dark");
  document.body.classList.add(theme);
  
}, [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

