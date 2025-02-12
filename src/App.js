import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Skills from "./components/Skills";
import Contact from "./components/contact";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      {/* <h2> hello</h2> */}
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Certificates /> 
      <Skills />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
