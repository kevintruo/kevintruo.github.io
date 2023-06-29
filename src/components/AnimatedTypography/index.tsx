import * as React from "react";
import { sleep } from "../../utils/sleep";
import TypingCursor from "../TypingCursor";
import { DefaultProps } from "../../models/defaultProps";

interface Props extends DefaultProps {
  textArr: string[];
}

export default function AnimatedTypography({ textArr, className }: Props) {
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
      for (let letter of textArr[0].split("")) {
        await sleep(100, controller).then(() => {
          setDisplay((s) => s + letter);
        });
      }
    }

    handleTypingAnimation();

    return () => controller.abort();
  }, [textArr]);

  return (
    <>
      <p className={className + " relative pr-2 caret-current"}>
        {display}
        <TypingCursor className={display && "absolute bottom-0.5 right-0"} />
        <span className='' />
      </p>
    </>
  );
}
