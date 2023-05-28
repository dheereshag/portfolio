import React from "react";
import { AppProvider } from "./context/AppContext";
import { About, Contact, Header, Skills, Projects } from "./container";

import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <AppProvider>
      <div className="app">
        <Navbar />
        <Header />
        <About />
        <Projects />
        <Skills />
        {/* <Testimonials /> */}
        <Contact />
      </div>
    </AppProvider>
  );
};

export default App;
