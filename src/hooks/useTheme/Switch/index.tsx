import * as React from "react";
import { ThemeContext, ThemeEnum } from "../Provider";
import { sleep } from "./utils";

export default function Switch() {
  const themeContext = React.useContext(ThemeContext);
  if (themeContext === undefined) {
    throw new Error(
      "ThemeProvider not found. Please ensure to provide a <ThemeProvider> before using useTheme()."
    );
  }

  const [theme, setTheme] = themeContext;
  const [fade, setFade] = React.useState<boolean>(false);
  const isDark = theme.mode === ThemeEnum.DARK;

  return (
    <div
      className='flex items-center justify-center absolute top-0 right-0 w-8 h-8 m-1 p-1 rounded-full border border-white bg-white'
      onClick={async () => {
        setFade(true);
        await sleep(500).then(() => {
          setFade(false);
          setTheme({
            ...theme,
            mode: isDark ? ThemeEnum.LIGHT : ThemeEnum.DARK,
          });
        });
      }}>
      <div className={`transition duration-700 ${fade ? "opacity-0 rotate-45" : "opacity-100"}`}>
        <img
          src={require(`../../../static/images/${isDark ? "moon" : "sun"}.png`)}
          alt={`${isDark ? "Moon" : "Sun"} Icon`}
        />
      </div>
    </div>
  );
}
