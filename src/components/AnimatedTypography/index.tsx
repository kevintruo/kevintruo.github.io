import * as React from "react";
import { DefaultProps } from "../../models/defaultProps";
import { sleep } from "../../utils/sleep";
import TypingCursor from "../TypingCursor";

interface Props extends DefaultProps {
  textArr: string[];
  speed?: number;
  betweenDelay?: number;
  repeat?: boolean;
}

export default function AnimatedTypography({
  textArr,
  className,
  speed = 100,
  betweenDelay = 3000,
  repeat = true,
}: Props) {
  if (textArr.length < 1) {
    throw new Error("Array text must have at least one element");
  }

  textArr.forEach((x) => {
    if (!x || x.length === 0) throw new Error("An element must contain at least one character");
  });

  const [display, setDisplay] = React.useState<string>("");

  React.useEffect(() => {
    const controller = new AbortController();

    async function handleTypingAnimation() {
      setDisplay("");
      for (let [index, text] of textArr.entries()) {
        const letters = text.split("");
        for (let letter of letters) {
          await sleep(speed, controller).then(() => {
            setDisplay((s) => s + letter);
          });
        }

        await sleep(betweenDelay, controller);

        if (index === textArr.length - 1) {
          return;
        }

        //TODO: Comeback to create
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        for (let _ in letters.reverse()) {
          await sleep(speed, controller).then(() => {
            setDisplay((s) => s.substring(0, s.length - 1));
          });
        }
      }
    }

    handleTypingAnimation();

    return () => controller.abort();
  }, [textArr, speed, betweenDelay]);

  return (
    <p className={className + " relative pr-2 caret-current"}>
      {display}
      <TypingCursor className={display && "absolute bottom-0.5 right-0"} />
      <span className='' />
    </p>
  );
}
