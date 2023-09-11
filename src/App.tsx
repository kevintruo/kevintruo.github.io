import LandingPage from "./components/LandingPage";
import MouseTrailingEffect from "./components/MouseTrailingEffect";
import LeftPanel from "./components/Panels/LeftPanel";
import RightPanel from "./components/Panels/RightPanel";

function App() {
  const supportsTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;

  return (
    <div className='flex h-screen w-screen flex-row bg-white text-black dark:bg-black dark:text-white'>
      {!supportsTouch && <LeftPanel />}
      <div className='grow flex flex-row'>
        <div className='flex-none w-64 h-screen' />
        <div className='flex flex-col w-full'>
          <LandingPage />
        </div>
        <div className='flex-none w-64 h-screen' />
      </div>
      {!supportsTouch && <RightPanel />}
      {!supportsTouch && <MouseTrailingEffect />}
    </div>
  );
}

export default App;
