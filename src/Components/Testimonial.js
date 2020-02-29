import React, { Component } from "react";
import BottomBanner from "./BottomBanner";

class Testimonial extends Component {
  render() {
    return (
      <div>
        <div className="borderwire">
          <div className="section-border"></div>
          <div className="wiretext">
            <h1>Testimonials</h1>
          </div>
          <div className="section-border"></div>
          <div className="wiretext">
            <h1>Development</h1>
          </div>
          <div className="section-border"></div>
        </div>
        <div className="about">
          <div className="personalinfo">
            <div className="infodiv">
              <h1>John Smith</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatibus vel doloribus repudiandae reprehenderit commodi,
                perferendis, veniam facere voluptate blanditiis aliquam deserunt
                quae facilis minima quaerat voluptatem placeat iure illo ipsum!
              </p>
            </div>
            <div className="infodiv">
              <h1>John Smith</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatibus vel doloribus repudiandae reprehenderit commodi,
                perferendis, veniam facere voluptate blanditiis aliquam deserunt
                quae facilis minima quaerat voluptatem placeat iure illo ipsum!
              </p>
            </div>
            <div className="infodiv">
              <h1>John Smith</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatibus vel doloribus repudiandae reprehenderit commodi,
                perferendis, veniam facere voluptate blanditiis aliquam deserunt
                quae facilis minima quaerat voluptatem placeat iure illo ipsum!
              </p>
            </div>
            <div className="infodiv">
              <h1>John Smith</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatibus vel doloribus repudiandae reprehenderit commodi,
                perferendis, veniam facere voluptate blanditiis aliquam deserunt
                quae facilis minima quaerat voluptatem placeat iure illo ipsum!
              </p>
            </div>
          </div>
          <div className="design">
            <div className="thedesign">
              <div className="textdesign">
                <h3>The Design</h3>
              </div>
              <div className="production">
                <h3>Production</h3>
              </div>
            </div>
            <div className="designtext">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate consequuntur reprehenderit vero deleniti sed itaque
                quis. In molestiae aperiam sunt ducimus illo eum error eos
                aliquam possimus doloremque commodi fuga, incidunt ab voluptate
                pariatur minima soluta veritatis iure facilis adipisci rerum.
                Minima consectetur maxime natus aut cumque, quisquam quo velit
                saepe? Aperiam aspernatur praesentium laboriosam inventore
                quidem iure recusandae amet, beatae natus voluptate vero,
                officiis aliquid obcaecati quae deserunt sapiente. Maiores
                deserunt molestiae, qui suscipit, debitis sunt, beatae cum
                provident tempora aliquam iste. Quasi molestias a quae facilis
                velit iusto, quam praesentium dolorum maiores sequi provident
                deserunt accusantium dicta.
              </p>
              <button className="infobutton">READ MORE</button>
            </div>
          </div>
        </div>
        <BottomBanner />
      </div>
    );
  }
}

export default Testimonial;
