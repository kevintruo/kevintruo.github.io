import MouseTrackingProvider from "./hooks/useMouseTracking/Provider";
import ThemeProvider from "./hooks/useTheme/Provider";

export default function Providers({ children }: { children?: React.ReactNode }) {
  return (
    <MouseTrackingProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </MouseTrackingProvider>
  );
}
