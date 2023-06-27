import * as React from "react";
import { ThemeContext, ThemeEnum } from "./Provider";

export default function useTheme() {
  const themeContext = React.useContext(ThemeContext);
  if (themeContext === undefined) {
    throw new Error(
      "ThemeProvider not found. Please ensure to provide a <ThemeProvider> before using useTheme()."
    );
  }

  const [theme, setTheme] = themeContext;

  const toggleSwitch = () =>
    setTheme({ mode: theme.mode === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK });

  return { ...theme, toggleSwitch };
}
