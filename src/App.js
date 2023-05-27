import React from "react";

import { About, Contact, Header, Skills, Projects } from "./container";

import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      {/* <Testimonials /> */}
      <Contact />
    </div>
  );
};

export default App;
