// components
import Section from "./components/common/section/Section";
import Header from "./components/header/Header";
import ColorSection from "./components/sections/color/ColorSection";
import GapSection from "./components/sections/gap/GapSection";
import MarginSection from "./components/sections/margin/MarginSection";
import PaddingSection from "./components/sections/padding/PaddingSection";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Section
          id="color section"
          title={"colors"}
          desc={"Basic colors ready for use!"}
        >
          <ColorSection />
        </Section>
        <Section
          id="margin section"
          title="margin"
          desc="The space around the border of an element."
        >
          <MarginSection />
        </Section>
        <Section
          id="padding section"
          title="padding"
          desc="The space between the content and the border of an element"
        >
          <PaddingSection />
        </Section>
        <Section
          id="gap section"
          title="gap"
          desc="The distance between contents"
        >
          <GapSection />
        </Section>
      </main>
    </>
  );
};

export default App;
