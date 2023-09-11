import AnimatedTypography from "../../components/AnimatedTypography";
import EyeGlassesLogo from "../../components/EyeGlassesLogo";
import Section from "../../components/Section";
import DownArrow from "../../static/svg/DownArrow";

export default function LandingPage() {
  return (
    <Section>
      <div className='flex flex-col w-full h-full items-center'>
        <div className='flex-grow' />
        <EyeGlassesLogo />
        <div className='animate-fade ml-5'>
          <AnimatedTypography
            textArr={["Welcome ..."]}
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
    </Section>
  );
}
