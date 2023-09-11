import AnimatedTypography from "./components/AnimatedTypography";
import MouseTrailingEffect from "./components/MouseTrailingEffect";

function App() {
  const supportsTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;

  return (
    <div className='flex h-screen flex-row bg-white text-black dark:bg-black dark:text-white'>
      <div className='h-screen w-64 border-r-2 border-black dark:border-white' />
      <div className='flex h-screen w-screen flex-col items-center justify-center'>
        <AnimatedTypography
          textArr={["WELCOME ..."]}
          className='text-3xl font-bold text-black  dark:text-white dark:bg-black'
          repeat={true}
        />
        {!supportsTouch && <MouseTrailingEffect />}
      </div>
      <div className='h-screen w-64 border-l-2 border-black dark:border-white' />
    </div>
  );
}

export default App;
