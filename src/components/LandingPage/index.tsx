import DownArrow from "../../static/svg/DownArrow";
import AnimatedTypography from "../AnimatedTypography";
import EyeGlassesLogo from "../EyeGlassesLogo";

export default function LandingPage() {
  return (
    <div className='flex flex-col w-full h-full items-center'>
      <div className='flex-grow' />
      <EyeGlassesLogo />
      <div className='animate-fade'>
        <AnimatedTypography
          textArr={["Hi, I'm Kevin. "]}
          className='text-3xl font-bold text-black  dark:text-white dark:bg-black'
          repeat={true}
        />
      </div>
      <div className='flex-grow' />
      <div className='rounded-full animate-bounce flex flex-col items-center mb-5'>
        <DownArrow />
        <p>Scroll to start</p>
      </div>
    </div>
  );
}
