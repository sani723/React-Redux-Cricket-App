import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <section className="page-section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="section-title">
                <h1>About</h1>
                <span className="st-border"></span>
              </div>
            </div>
            <div className="col-xs-12">
              <p>This applictation uses React, Redux, React Router and variety of other helpful libraries.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
