import { useState } from "react";
import { LoadingScreen } from "../src/components/LoadingScreen";

import { MobileMenu } from "./components/Mobile.Menu";
import { Navbar } from "./components/Navbar";
import { About } from "./components/sections/about/About";
import { Contact } from "./components/sections/contact/Contact";
import { Home } from "./components/sections/home/Home";
import { Projects } from "./components/sections/projects/Projects";

import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div className={`app-wrapper ${isLoaded ? "loaded" : ""}`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <div className="app-gradient-bg">
          <Home />
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
