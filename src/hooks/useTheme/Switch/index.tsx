import * as React from "react";
import { ThemeContext, ThemeEnum } from "../Provider";
import { sleep } from "../../../utils/sleep";
import Moon from "../../../static/svg/Moon";
import Sun from "../../../static/svg/Sun";

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
      className='flex items-center justify-center absolute top-0 right-0 m-1 p-1 rounded-full'
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
        {theme.mode === ThemeEnum.LIGHT ? <Sun /> : <Moon />}
      </div>
    </div>
  );
}
