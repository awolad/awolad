
import Preloader from "./components/preloader";
import MobileHeader from "./components/headers/mobile";
import DesktopHeader from "./components/headers/desktop";
import Home from "./components/sections/home";
import About from "./components/sections/about";
import Services from "./components/sections/services";
import Experience from "./components/sections/experience";
import Prices from "./components/sections/prices";
import Contact from "./components/sections/contact";
// import Works from "./components/sections/works";
// import Testimonials from "./components/sections/testimonials";
// import Blog from "./components/sections/blog";


function App() {
  return (
    <>
      <Preloader />
      <MobileHeader />
      <DesktopHeader />
      <main className="content">
        <Home />
        <About />
        <Services />
        <Experience />
        {/* <Works /> */}
        <Prices />
        {/* <Testimonials /> */}
        {/* <Blog /> */}
        <Contact />
        <div className="spacer" data-height="96"></div>
      </main>
    </>
  );
}

export default App;
