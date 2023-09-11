interface CircleDivProps {
  xAxis: number;
  yAxis: number;
  scale: number;
}

const CircleDiv = ({ xAxis, yAxis, scale }: CircleDivProps) => {
  return (
    <div
      className={`w-8 h-8 rounded-full bg-[#fff] absolute block scale-[${scale}]`}
      style={{
        top: yAxis,
        left: xAxis,
        transform: `scale(${scale})`,
      }}
    />
  );
};

export default CircleDiv;
