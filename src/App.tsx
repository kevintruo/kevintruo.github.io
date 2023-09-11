import { TypeAnimation } from "react-type-animation";

function App() {
  return (
    <div className='flex h-screen dark:bg-black dark:text-white'>
      <TypeAnimation
        sequence={["COMING SOON ...", 5000, "SERIOUSLY, IT'S COMING ...", 20000]}
        wrapper='span'
        speed={1}
        className='text-3xl font-bold m-auto dark:text-white'
      />
    </div>
  );
}

export default App;
