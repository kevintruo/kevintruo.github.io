import * as React from "react";
import useMouseTracking from "../../hooks/useMouseTracking";
import CircleDiv from "./CircleDiv";
interface CircleProps {
  xAxis: number;
  yAxis: number;
  scale: number;
  x: number;
  y: number;
}

export default function MouseTrailingEffect() {
  const { xAxis, yAxis } = useMouseTracking();
  let arr = [];
  const LEN = 100;
  for (let i = 0; i < LEN; i++) {
    arr.push({ xAxis: xAxis ?? 0, yAxis: xAxis ?? 0, x: xAxis ?? 0, y: xAxis ?? 0, scale: 1 });
  }
  const [circles, setCircles] = React.useState<CircleProps[]>(arr);

  React.useEffect(() => {
    function animateCircles() {
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
          x += (nextCircle.x - x) * 0.1;
          y += (nextCircle.y - y) * 0.1;
        });
        return [...prevCircles];
      });
    }

    animateCircles();
  }, [xAxis, yAxis]);

  return (
    <div
      className={`pointer-events-none fixed block mix-blend-difference top-0 left-0 z-[2147483647]`}>
      {circles.map((circle, index) => {
        return !xAxis || !yAxis ? null : (
          <CircleDiv key={index} xAxis={circle.xAxis} yAxis={circle.yAxis} scale={circle.scale} />
        );
      })}
    </div>
  );
}
