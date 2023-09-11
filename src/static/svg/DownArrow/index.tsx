import useTheme from "../../../hooks/useTheme";

export default function DownArrow() {
  const { mode } = useTheme();
  const color = mode === "dark" ? "#ffffff" : "#000000";
  return (
    <svg fill={color} height='40px' width='40px' viewBox='0 0 512 512' xmlSpace='preserve'>
      <path
        d='M347.582,198.248L256,289.83l-91.582-91.582c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17
				l106.667,106.667c8.331,8.331,21.839,8.331,30.17,0l106.667-106.667c8.331-8.331,8.331-21.839,0-30.17
				C369.42,189.917,355.913,189.917,347.582,198.248z'
      />
    </svg>
  );
}
