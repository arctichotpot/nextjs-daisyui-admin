"use client"

import React, {
  createContext,
  PropsWithChildren,
  useState,
  useContext,
} from "react";

const ALL_THEME_COLORS = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
  "nord",
  "sunset",
];

type LayoutType = "left" | "top" | "left-with-icon";

type ThemeContextType = {
  theme: string;
  layout: LayoutType;
  setTheme: (theme: string) => void;
  setLayout: (layout: LayoutType) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  layout: "left",

  setTheme: () => {},
  setLayout: () => {},
});

export const ThemeProvider = ({ children }: PropsWithChildren<{}>) => {
  const [theme, setTheme] = useState<string>("light");
  const [layout, setLayout] = useState<LayoutType>("left");

  const toggleTheme = (value: string) => {
    setTheme(value);
  };

  const toggleLayout = (value: LayoutType) => {
    setLayout(value);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        layout,
        setLayout,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const { setTheme, setLayout, theme, layout } = useContext(ThemeContext);

  const updateTheme = (newTheme: string) => {
    setTheme(newTheme);
  };

  const updateLayout = (newLayout: LayoutType) => {
    setLayout(newLayout);
  };

  return { updateTheme, updateLayout, theme, layout };
};
