import * as React from "react";
import useMouseTracking from "../../hooks/useMouseTracking";

interface CircleProps {
  xAxis: number;
  yAxis: number;
  scale: number;
  x: number;
  y: number;
}

export default function MouseTrailingEffect() {
  const { xAxis, yAxis } = useMouseTracking();

  const [circles, setCircles] = React.useState<CircleProps[]>([
    { xAxis: 0, yAxis: 0, x: 0, y: 0, scale: 1 },
    { xAxis: 0, yAxis: 0, x: 0, y: 0, scale: 1 },
    { xAxis: 0, yAxis: 0, x: 0, y: 0, scale: 1 },
    { xAxis: 0, yAxis: 0, x: 0, y: 0, scale: 1 },
    { xAxis: 0, yAxis: 0, x: 0, y: 0, scale: 1 },
    { xAxis: 0, yAxis: 0, x: 0, y: 0, scale: 1 },
    { xAxis: 0, yAxis: 0, x: 0, y: 0, scale: 1 },
    { xAxis: 0, yAxis: 0, x: 0, y: 0, scale: 1 },
    { xAxis: 0, yAxis: 0, x: 0, y: 0, scale: 1 },
    { xAxis: 0, yAxis: 0, x: 0, y: 0, scale: 1 },
  ]);

  React.useEffect(() => {
    setCircles((prevCircles) => {
      let x = xAxis ?? 0;
      let y = yAxis ?? 0;
      prevCircles.forEach((circle, index) => {
        circle.xAxis = x - 12;
        circle.yAxis = y - 12;
        circle.x = x;
        circle.y = y;
        circle.scale = (prevCircles.length - index) / prevCircles.length;
        const nextCircle = prevCircles[index + 1] || prevCircles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });
      return [...prevCircles];
    });
  }, [xAxis, yAxis]);

  return (
    <>
      {circles.map((circle, index) => {
        return (
          xAxis &&
          yAxis && (
            <CircleDiv key={index} xAxis={circle.xAxis} yAxis={circle.yAxis} scale={circle.scale} />
          )
        );
      })}
    </>
  );
}

interface CircleDivProps {
  xAxis: number;
  yAxis: number;
  scale: number;
}

const CircleDiv = ({ xAxis, yAxis, scale }: CircleDivProps) => {
  return (
    <>
      {xAxis && yAxis && scale && (
        <div
          className={`w-8 h-8 rounded-full bg-black dark:bg-white absolute scale-[${scale}]`}
          style={{ top: yAxis, left: xAxis, transform: `scale(${scale})` }}
        />
      )}
    </>
  );
};
