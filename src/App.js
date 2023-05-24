import React from "react";

import { About, Contact, Header, Skills, Testimonials, Works } from "./container";

import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Works />
      <Skills />
      {/* <Testimonials /> */}
      <Contact />
    </div>
  );
};

export default App;
