import LandingPage from "./components/LandingPage";
import MouseTrailingEffect from "./components/MouseTrailingEffect";
import Section from "./components/Section";
import Socials from "./components/Socials";

function App() {
  const supportsTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;

  return (
    <div className='snap-y snap-mandatory h-screen w-screen mx:auto overflow-scroll'>
      <div className='absolute bottom-10 left-5'>
        <Socials />
      </div>
      {!supportsTouch && <MouseTrailingEffect />}
      <Section>
        <LandingPage />
      </Section>
      <Section>
        <h1>Page Two</h1>
      </Section>
      <Section>
        <h1>Page Three</h1>
      </Section>
    </div>
  );
}

export default App;
