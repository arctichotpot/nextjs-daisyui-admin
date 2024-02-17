import { PropsWithChildren, createContext } from "react";

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

type ThemeConfigType = {
  layout: "left" | "top" | "left-with-icon";
  color: (typeof ALL_THEME_COLORS)[number];
};

const defaultThemeConfig: ThemeConfigType = {
  layout: "left",
  color: "light",
};

export const ThemeContext = createContext<ThemeConfigType>(defaultThemeConfig);

export const ThemeProvider = ({
  children,
}: {
  children: PropsWithChildren;
}) => {
  // const

  return (
    <ThemeContext.Provider value={defaultThemeConfig}>
      <>{children}</>
    </ThemeContext.Provider>
  );
};
