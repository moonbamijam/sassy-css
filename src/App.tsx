import Section from "./components/common/section/Section";
import Header from "./components/header/Header";
import Color from "./components/sections/color/Color";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Section
          id="color_section"
          title={"colors"}
          desc={"Basic colors ready for use!"}
        >
          <Color />
        </Section>
      </main>
    </>
  );
};

export default App;
