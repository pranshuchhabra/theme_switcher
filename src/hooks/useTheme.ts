import { useEffect, useState } from "react";
import { setThemeInStorage } from "../store/slices/themeSlice";
import type { ThemeType } from "../store/slices/themeSlice";
import { useAppDispatch } from "../store/hook";

const useTheme = () => {
  const dispatch = useAppDispatch();
  const [theme, setTheme] = useState<ThemeType>("theme1");

  useEffect(() => {
    const savedTheme = (localStorage.getItem("theme") as ThemeType) || "theme1";
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (themeName: ThemeType) => {
    setTheme(themeName);
    localStorage.setItem("theme", themeName);
    dispatch(setThemeInStorage(themeName));
    document.documentElement.classList.remove("theme1", "theme2", "theme3");
    document.documentElement.classList.add(themeName);
    if (themeName === "theme1") {
      document.documentElement.style.fontFamily = "'Inter', sans-serif";
    } else if (themeName === "theme2") {
      document.documentElement.style.fontFamily = "'Merriweather', serif";
    } else if (themeName === "theme3") {
      document.documentElement.style.fontFamily = "'Pacifico', cursive";
    }
  };

  const handleToggleTheme = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newTheme = e.target.value as ThemeType;
    applyTheme(newTheme);
  };

  return { theme, handleToggleTheme };
};

export { useTheme };
