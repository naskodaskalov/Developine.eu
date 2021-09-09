import "./Footer.css";

import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer container-fluid">
        <div className="row">
          <div className="col-md-3 offset-md-1">
            <h5 className="title">Social Links</h5>
            <ul>
              <li>
                <a href="https://www.facebook.com/nasko.daskalov">
                  <i className="fa fa-facebook-square" />
                  /nasko.daskalov
                </a>
              </li>
              <li>
                <a href="https://github.com/naskodaskalov">
                  <i className="fa fa-github-square" />
                  /naskodaskalov
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/nasko-daskalov-a7731a117/">
                  <i className="fa fa-linkedin-square" />
                  /nasko-daskalov-a7731a117
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 offset-md-1">
            <h5 className="title">Last 3 Freelance Projects</h5>
            <ul>
              <li>
                <a href="https://webai-bets-com.vercel.app/">WebaiBets</a>
              </li>
              <li>
                <a href="https://highlights-to-watch-com.vercel.app/">
                  Highlights To Watch
                </a>
              </li>
              <li>
                <a href="https://latest-cryptos-tweets.vercel.app/">
                  Latest Cryptos Tweets
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 offset-md-1">
            <h5 className="title">© 2017</h5>
            <ul>
              <li>Designed and Developed by:</li>
              <li>
                <a href="http://developine.eu">
                  Nasko Daskalov | Developine.eu
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
