import useMouseTracking from "../../hooks/useMouseTracking";

export default function MouseTrailingEffect() {
  const { xAxis, yAxis } = useMouseTracking();
  const circles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className='flex flex-col'>
      {circles.map((i) => {
        const xPos = (xAxis ?? 0) - 12;
        const yPos = (yAxis ?? 0) - 12;

        return <CircleDiv key={i} xAxis={xPos} yAxis={yPos} />;
      })}
    </div>
  );
}

interface CircleDivProps {
  xAxis: number;
  yAxis: number;
}

const CircleDiv = ({ xAxis, yAxis }: CircleDivProps) => {
  return (
    <div
      className={"w-8 h-8 rounded-full bg-black dark:bg-white absolute"}
      style={{ top: yAxis - 12, left: xAxis - 12 }}
    />
  );
};
