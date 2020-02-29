import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footercontainer">
          <div className="footer_content_box">
            <div className="footbox">
              <h1>ABOUT US</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
                iste tempora odio dicta assumenda consectetur ipsum, unde
                distinctio, ratione sed consequuntur? Facere{" "}
              </p>
            </div>
            <div className="footbox">
              <h1>LATEST TWEETS</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
                iste tempora odio dicta assumenda consectetur ipsum, unde
                distinctio, ratione sed consequuntur? Facere{" "}
              </p>
            </div>
            <div className="footbox">
              <h1>LATEST POSTS</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
                iste tempora odio dicta assumenda consectetur ipsum, unde
                distinctio, ratione sed consequuntur? Facere{" "}
              </p>
            </div>
            <div className="footbox">
              <h1>FLICKER</h1>
              <div className="flicker">
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_end">
          <div className="footer_end_content">
            <div className="copyright_box">
              <p className="copyright">
                Copyright <span> Bibek Dhakal </span>@2020 Ventus Ivc. All
                Rights Reserved.
              </p>
            </div>
            <div className="social">
              <div className="icons">
                <i className="fab fa-twitter-square"></i>
              </div>
              <div className="icons">
                <i className="fab fa-facebook-square"></i>
              </div>
              <div className="icons">
                <i className="fab fa-vimeo"></i>
              </div>
              <div className="icons">
                <i className="fab fa-instagram"></i>
              </div>
              <div className="icons">
                <i className="fab fa-google-plus-square"></i>
              </div>
              <div className="icons">
                <i className="fab fa-pinterest-square"></i>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
