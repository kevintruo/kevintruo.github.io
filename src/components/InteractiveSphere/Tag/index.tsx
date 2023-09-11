import * as React from "react";
import { TagProps, calcPosition, depth, maxSpeed, radius, size } from "../utils";

interface Props {
  index: number;
  text: string;
  mouseX: React.MutableRefObject<number>;
  mouseY: React.MutableRefObject<number>;
}

export default function Tag({ index, text, mouseX, mouseY }: Props) {
  const [item, setItem] = React.useState<TagProps>({
    text: text,
    opacity: 0,
    filter: "alpha(opacity=0)",
    transform: "translate3d(-50%, -50%, 0) scale(1)",
    pos: calcPosition(index, false, size),
  });
  const tagRef = React.useRef<HTMLDivElement | null>(null);

  const next = React.useCallback(() => {
    const a = -(Math.min(Math.max(-mouseY.current, -size), size) / radius) * maxSpeed;
    const b = (Math.min(Math.max(-mouseX.current, -size), size) / radius) * maxSpeed;

    if (Math.abs(a) <= 0.01 && Math.abs(b) <= 0.01) return; // pause

    // calculate offset
    const l = Math.PI / 180;
    const sc = [Math.sin(a * l), Math.cos(a * l), Math.sin(b * l), Math.cos(b * l)];

    setItem((prevItem) => {
      let left = "0.00";
      let top = "0.00";
      if (tagRef.current) {
        left = (prevItem.pos.x - tagRef.current.offsetWidth / 2).toFixed(2);
        top = (prevItem.pos.y - tagRef.current.offsetHeight / 2).toFixed(2);
      }

      const rx1 = prevItem.pos.x;
      const ry1 = prevItem.pos.y * sc[1] + prevItem.pos.z * -sc[0];
      const rz1 = prevItem.pos.y * sc[0] + prevItem.pos.z * sc[1];
      const rx2 = rx1 * sc[3] + rz1 * sc[2];
      const ry2 = ry1;
      const rz2 = rz1 * sc[3] - rx1 * sc[2];
      const per = (2 * depth) / (2 * depth + rz2);

      prevItem.scale = Number(per.toFixed(3));
      let alpha = per * per - 0.25;
      alpha = Number((alpha > 1 ? 1 : alpha).toFixed(3));

      return {
        ...prevItem,
        pos: {
          x: rx2,
          y: ry2,
          z: rz2,
        },
        opacity: alpha,
        transform: `translate3d(${left}px, ${top}px, 0) scale(${prevItem.scale})`,
        filter: `alpha(opacity=${100 * alpha})`,
      };
    });
  }, [mouseX, mouseY]);

  React.useEffect(() => {
    const interval = setInterval(next, 100);
    return () => clearTimeout(interval);
  });

  return (
    <span
      className='font-extrabold absolute origin-[50%_50%] transition-all duration-[0.1s] will-change-[transform,opacity,filter] left-2/4 top-2/4'
      ref={tagRef}
      onClick={() => console.log(`Click ${text}`)}
      style={{
        filter: item.filter,
        opacity: item.opacity,
        transform: item.transform,
      }}>
      {item.text}
    </span>
  );
}
