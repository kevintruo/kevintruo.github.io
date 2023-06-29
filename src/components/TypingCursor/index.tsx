import { DefaultProps } from "../../models/defaultProps";

export default function TypingCursor({ className }: DefaultProps) {
  return <span className={"animate-blinking " + className}>|</span>;
}
