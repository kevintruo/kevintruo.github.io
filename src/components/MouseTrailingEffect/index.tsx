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
  let arr = [];
  const LEN = 25;
  for (let i = 0; i < LEN; i++) {
    arr.push({ xAxis: 0, yAxis: 0, x: 0, y: 0, scale: 1 });
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

      requestAnimationFrame(animateCircles);
    }

    animateCircles();
  }, [xAxis, yAxis]);

  return (
    <div className='cursor' style={{ left: yAxis, top: xAxis }}>
      {circles.map((circle, index) => {
        return !xAxis || !yAxis ? null : (
          <CircleDiv key={index} xAxis={circle.xAxis} yAxis={circle.yAxis} scale={circle.scale} />
        );
      })}
    </div>
  );
}

interface CircleDivProps {
  xAxis: number;
  yAxis: number;
  scale: number;
}

const CircleDiv = ({ xAxis, yAxis, scale }: CircleDivProps) => {
  return (
    <div
      className={`w-8 h-8 rounded-full bg-black dark:bg-white absolute scale-[${scale}]`}
      style={{
        top: yAxis,
        left: xAxis,
        transform: `scale(${scale})`,
      }}
    />
  );
};
