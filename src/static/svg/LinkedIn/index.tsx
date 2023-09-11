import useTheme from "../../../hooks/useTheme";

export default function LinkedIn() {
  const { mode } = useTheme();
  const color = mode !== "dark" ? "#000000" : "#ffffff";
  return (
    <svg fill={color} width='40px' height='40px' viewBox='-143 145 512 512'>
      <rect x='-8.5' y='348.4' width='49.9' height='159.7' />
      <path
        d='M15.4,273c-18.4,0-30.5,11.9-30.5,27.7c0,15.5,11.7,27.7,29.8,27.7h0.4c18.8,0,30.5-12.3,30.4-27.7
		C45.1,284.9,33.8,273,15.4,273z'
      />
      <path
        d='M177.7,346.9c-28.6,0-46.5,15.6-49.8,26.6v-25.1H71.8c0.7,13.3,0,159.7,0,159.7h56.1v-86.3c0-4.9-0.2-9.7,1.2-13.1
		c3.8-9.6,12.1-19.6,27-19.6c19.5,0,28.3,14.8,28.3,36.4v82.6H241v-88.8C241,369.9,213.2,346.9,177.7,346.9z'
      />
    </svg>
  );
}
