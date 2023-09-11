import LandingPage from "./components/LandingPage";
import MouseTrailingEffect from "./components/MouseTrailingEffect";
import Section from "./components/Section";
import Socials from "./components/Socials";

function App() {
  const supportsTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;

  return (
    <div className='snap-y snap-mandatory h-screen w-screen mx:auto overflow-scroll'>
      {!supportsTouch && <MouseTrailingEffect />}
      <div className='absolute bottom-10 left-5'>
        <Socials />
      </div>
      <Section>
        <LandingPage />
      </Section>
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
