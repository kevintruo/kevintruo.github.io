import "./App.css";
import MouseTrailingEffect from "./components/MouseTrailingEffect";
import Section from "./components/Section";
import Socials from "./components/Socials";
import Introduction from "./pages/Introduction";
import LandingPage from "./pages/LandingPage";

function App() {
  const supportsTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;

  return (
    <div
      className='snap-y snap-mandatory h-screen w-screen mx:auto overflow-x-hidden styled-scrollbar styled-scrollbar-track styled-scrollbar-thumb dark:styled-scrollbar-dark dark:styled-scrollbar-track-dark'
      id='styled-scrollbar'>
      {!supportsTouch && <MouseTrailingEffect />}
      <div className='absolute bottom-10 left-5'>
        <Socials />
      </div>
      <LandingPage />
      <Introduction />
      <Section>
        <h1>Coming Soon</h1>
      </Section>
      <Section>
        <h1>Coming Soon</h1>
      </Section>
    </div>
  );
}

export default App;
