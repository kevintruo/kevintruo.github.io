export default function ElementWrapper({ children }: { children?: React.ReactNode }) {
  return <div className='min-h-screen w-full flex'>{children}</div>;
}
