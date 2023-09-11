import DownArrow from "../../static/svg/DownArrow";
import AnimatedTypography from "../AnimatedTypography";
import ElementWrapper from "../ElementWrapper";
import EyeGlassesLogo from "../EyeGlassesLogo";

export default function LandingPage() {
  return (
    <ElementWrapper>
      <div className='flex w-full flex-col items-center justify-center'>
        <div className='flex-grow' />
        <EyeGlassesLogo />
        <div className='animate-fade'>
          <AnimatedTypography
            textArr={["Hi, I'm Kevin."]}
            className='text-3xl font-bold text-black  dark:text-white dark:bg-black'
            repeat={true}
          />
        </div>
        <div className='flex-grow' />
        <div className='rounded-full animate-bounce mb-5 flex flex-col items-center'>
          <DownArrow />
          <p>Coming soon</p>
        </div>
      </div>
    </ElementWrapper>
  );
}
