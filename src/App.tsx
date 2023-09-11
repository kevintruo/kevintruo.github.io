import AnimatedTypography from "./components/AnimatedTypography";
import EyeGlassesLogo from "./components/EyeGlassesLogo";
import MouseTrailingEffect from "./components/MouseTrailingEffect";
import Socials from "./components/Socials";
import DownArrow from "./static/svg/DownArrow";

function App() {
  const supportsTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;

  return (
    <div className='flex h-screen flex-row bg-white text-black dark:bg-black dark:text-white'>
      {!supportsTouch && (
        <div className='h-screen w-64 border-black dark:border-white flex flex-col items-center justify-end'>
          <Socials />
          <div className='flex-grow max-h-[100px]' />
        </div>
      )}
      <div className='flex h-screen w-screen flex-col items-center justify-center'>
        <div className='flex-grow' />
        <EyeGlassesLogo />
        <div className='animate-fade'>
          <AnimatedTypography
            textArr={["WELCOME"]}
            className='text-3xl font-bold text-black  dark:text-white dark:bg-black'
            repeat={true}
          />
        </div>
        <div className='flex-grow' />
        <div className='rounded-full animate-bounce mb-5 flex flex-col items-center'>
          <DownArrow />
          <p>Start scrolling</p>
        </div>
      </div>
      {!supportsTouch && <div className='h-screen w-64 border-black dark:border-white' />}
      {!supportsTouch && <MouseTrailingEffect />}
    </div>
  );
}

export default App;
