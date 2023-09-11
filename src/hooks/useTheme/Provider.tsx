import * as React from "react";
import Switch from "./Switch";

export enum ThemeEnum {
  DARK = "dark",
  LIGHT = "light",
}
export interface ThemeProps {
  mode: ThemeEnum;
}

export const ThemeContext = React.createContext<
  [ThemeProps, React.Dispatch<React.SetStateAction<ThemeProps>>] | undefined
>(undefined);

export default function ThemeProvider({ children }: any) {
  const [theme, setTheme] = React.useState<ThemeProps>({ mode: localStorage.theme });
  const colorTheme = theme.mode === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK;

  React.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme.mode);
    localStorage.setItem("theme", theme.mode);
  }, [theme, colorTheme]);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
      <Switch />
    </ThemeContext.Provider>
  );
}
