import * as React from "react";

export default function Container({ children }: { children?: React.ReactNode }) {
  const sectionRef = React.useRef<HTMLElement | null>(null);

  return (
    <section
      ref={sectionRef}
      className='snap-start w-screen h-screen flex items-center justify-center bg-white text-black dark:bg-black dark:text-white'>
      {children}
    </section>
  );
}
