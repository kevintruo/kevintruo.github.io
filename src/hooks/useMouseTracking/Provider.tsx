import * as React from "react";

export interface MouseTrackingProps {
  xAxis?: number;
  yAxis?: number;
}

export const mouseTrackingContext = React.createContext<
  [MouseTrackingProps, React.Dispatch<React.SetStateAction<MouseTrackingProps>>] | undefined
>(undefined);

export default function MouseTrackingProvider({ children }: any) {
  const [mousePos, setMousePos] = React.useState<MouseTrackingProps>({});

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      console.log(e.clientX, e.clientY);
      setMousePos({ xAxis: e.clientX, yAxis: e.clientY });
    };

    const handleMouseLeave = (e: MouseEvent) => {
      setMousePos({ xAxis: undefined, yAxis: undefined });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  return (
    <mouseTrackingContext.Provider value={[mousePos, setMousePos]}>
      {children}
    </mouseTrackingContext.Provider>
  );
}
