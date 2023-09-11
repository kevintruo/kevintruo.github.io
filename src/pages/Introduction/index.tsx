import InteractiveSphere from "../../components/InteractiveSphere";
import Section from "../../components/Section";

export default function Introduction() {
  return (
    <Section>
      <div className='flex flex-row w-screen justify-between p-5'>
        <div className='flex flex-col'>
          <p className='text-3xl font-bold text-black  dark:text-white dark:bg-black'>
            Hi, I'm Kevin.
          </p>
        </div>
        <InteractiveSphere />
      </div>
    </Section>
  );
}
