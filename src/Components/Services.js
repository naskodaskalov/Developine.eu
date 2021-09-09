import React, { Component } from "react";

class Services extends Component {
  render() {
    return (
      <div className="services">
        <div className="backend-service">
          <img
            src={require("../Images/icon-backend.png")}
            alt="backend development by developine.eu"
            className="logo"
          />
          <ul>
            <li className="service-title">Back-end development</li>
            <li className="current-service">NodeJS &amp; ExpressJS</li>
            <li className="current-service">C# ASP.NET</li>
          </ul>

          <ul>
            <li className="service-title">Databases</li>
            <li className="current-service">MsSQL</li>
            <li className="current-service">MySQL</li>
            <li className="current-service">Firebase</li>
            <li className="current-service">MongoDB</li>
          </ul>
        </div>
        <div className="frontend-service">
          <img
            src={require("../Images/icon-frontend.png")}
            alt="frontend development by developine.eu"
            className="logo"
          />
          <ul>
            <li className="service-title">Front-end development</li>
            <li className="current-service">Javascript</li>
            <li className="current-service">ReactJS</li>
            <li className="current-service">NextJS</li>
            <li className="current-service">TailwindCSS</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Services;
