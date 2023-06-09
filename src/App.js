import React, { Component } from "react";
import "./grid.css";
import "./page.css";
import Header from "./header/header";
import Hero from "./hero/hero";
import Carousel from "./carousel/carousel";
import Shows from "./shows/shows";
import Press from "./press/press";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Hero />

        <Press />
        <Carousel />
        <Shows />
      </React.Fragment>
    );
  }
}

export default App;
