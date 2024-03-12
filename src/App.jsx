import Main from "./Main/Main";
import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Projects from "./components/ProjectsSecion/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="bg-secondary-dark">
      <Header />
      <Main />
      <hr />
      <Projects />
      <hr />
      <Skills />
      <hr />
      <div className="flex h-[75vh] items-center justify-center bg-secondary-dark">
        <AboutMe />
      </div>
      <hr />
      <Footer />
    </div>
  );
}

export default App;
