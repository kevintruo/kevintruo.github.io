export default function Container({ children }: { children?: React.ReactNode }) {
  return (
    <div className='snap-start w-screen h-screen flex items-center justify-center bg-white text-black dark:bg-black dark:text-white'>
      {children}
    </div>
  );
}
