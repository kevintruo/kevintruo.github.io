import * as React from "react";
import Tag from "./Tag";
import { texts } from "./data";
import { direction, initSpeed, radius } from "./utils";

export default function InteractiveSphere() {
  const mouseX = React.useRef<number>(initSpeed * Math.sin(direction * (Math.PI / 180)));
  const mouseY = React.useRef<number>(-initSpeed * Math.cos(direction * (Math.PI / 180)));

  return (
    <div
      className='relative will-change-[width, height]'
      onMouseMove={(ev) => {
        if (ev) {
          const rect = ev.currentTarget.getBoundingClientRect();
          mouseX.current = (ev.clientX - (rect.left + rect.width / 2)) / 5;
          mouseY.current = (ev.clientY - (rect.top + rect.height / 2)) / 5;
        }
      }}
      style={{
        width: `${2 * radius}px`,
        height: `${2 * radius}px`,
      }}>
      {texts.map((text, index) => {
        return <Tag key={index} index={index} text={text} mouseX={mouseX} mouseY={mouseY} />;
      })}
    </div>
  );
}
