import { texts } from "./data";

export interface TagProps {
  pos: TagPositionProps;
  transform: string;
  opacity: number;
  filter: string;
  text: string;
  scale?: number;
}

export const { radius, maxSpeed, initSpeed, direction } = {
  radius: 300 as number,
  maxSpeed: 20 as number,
  initSpeed: 40 as number,
  direction: 135 as number,
};

export const size = 1.5 * radius;
export const depth = 2 * radius;

export interface TagPositionProps {
  x: number;
  y: number;
  z: number;
}

export const calcPosition = (
  id: number,
  random: boolean = false,
  size: number
): TagPositionProps => {
  if (random) id = Math.floor(Math.random() * (texts.length + 1));

  const phi = Math.acos(-1 + (2 * id + 1) / texts.length);
  const theta = Math.sqrt((texts.length + 1) * Math.PI) * phi;

  return {
    x: (size * Math.cos(theta) * Math.sin(phi)) / 2,
    y: (size * Math.sin(theta) * Math.sin(phi)) / 2,
    z: (size * Math.cos(phi)) / 2,
  };
};
