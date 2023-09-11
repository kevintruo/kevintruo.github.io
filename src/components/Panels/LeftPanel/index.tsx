import Socials from "../../Socials";

export default function LeftPanel() {
  return (
    <div className='fixed w-64 h-screen border-black dark:border-white flex flex-col items-center justify-end'>
      <Socials />
      <div className='flex-grow max-h-[100px]' />
    </div>
  );
}
