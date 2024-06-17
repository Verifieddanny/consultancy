import "./App.css";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Consultant from "./components/Consultant";
import ConsultantSpotlight from "./components/ConsultantSpotlight";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Registration from "./components/Registration";
import Service from "./components/Service";

function App() {
  return (
    <>
      <Nav />
      <Hero />

      <About />
      <Service />
      <Consultant />
      <Blogs />
      <ConsultantSpotlight />
      <Registration />
    </>
  );
}

export default App;
