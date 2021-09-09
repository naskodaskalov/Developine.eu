import "./HomePage.css";

import React, { Component } from "react";

import About from "./About";

class HomePage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <About />
      </div>
    );
  }
}

export default HomePage;
