import * as React from "react";
import useMouseTracking from "../../hooks/useMouseTracking";
import EyeGlasses from "../../static/svg/EyeGlasses";

const calcAngle = (cx: number, cy: number, ex: number, ey: number) => {
  const dy = ey - cy;
  const dx = ex - cx;
  const rad = Math.atan2(dy, dx);
  return (rad * 180) / Math.PI;
};

export default function EyeGlassesLogo() {
  return (
    <div className='relative'>
      <EyeGlasses />
      <div className='absolute bottom-20 left-7 -mb-2 flex gap-16'>
        <EyesFollowingMouseDiv />
        <EyesFollowingMouseDiv />
      </div>
    </div>
  );
}

const EyesFollowingMouseDiv = () => {
  const { xAxis, yAxis } = useMouseTracking();
  const [rotateAngle, setRotateAngle] = React.useState<string>("0deg");
  const divRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (divRef.current) {
      const rekt = divRef.current.getBoundingClientRect();
      const anchorX = rekt.left + rekt.width / 2;
      const anchorY = rekt.top + rekt.height / 2;
      const angleDeg = calcAngle(xAxis ?? 0, yAxis ?? 0, anchorX, anchorY);
      setRotateAngle(`${angleDeg + 180}deg`);
    }
  }, [xAxis, yAxis]);

  return (
    <div
      className={`w-10 h-10 rounded-full relative border border-black dark:border-white`}
      ref={divRef}
      style={{ transform: `rotate(${rotateAngle})` }}>
      <div className={`w-3 h-3 rounded-full top-3 left-6 bg-black  dark:bg-white absolute`} />
    </div>
  );
};
