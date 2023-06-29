import MouseTrailingEffect from "./components/MouseTrailingEffect";
import AnimatedTypography from "./components/AnimatedTypography";

function App() {
  return (
    <div className='flex h-screen flex-col dark:bg-black dark:text-white'>
      <AnimatedTypography
        textArr={["COMING SOON..."]}
        className='text-3xl font-bold m-auto text-black dark:text-white'
      />
      <MouseTrailingEffect />
    </div>
  );
}

export default App;
