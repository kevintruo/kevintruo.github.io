import MouseTrailingEffect from "./components/MouseTrailingEffect";

function App() {
  return (
    <div className='flex h-screen dark:bg-black dark:text-white'>
      <p className='text-3xl font-bold m-auto dark:text-white'>COMING SOON...</p>
      <p className='text-3xl font-bold m-auto dark:text-white'>SERIOUSLY, IT's...</p>
      <MouseTrailingEffect />
    </div>
  );
}

export default App;
