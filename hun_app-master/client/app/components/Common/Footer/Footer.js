import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  }

  componentDidMount() {
  }

  render() {

    let tagPath;
    if (this.props.location.includes('/admin')){
      tagPath = 'admin-footer'
    }
    else {
      tagPath = 'footer-dark'
    }
    return (
      <section id="footer" className={tagPath}>
        <div className="container">
          <p>&#64; 2019 Hear.Us.Now</p>
        </div>
        <a href="#" className="scrollToTop"><i className="fa fa-chevron-up fa-2x" aria-hidden="true"></i></a>
      </section>
    );
  }
}

export default Footer;
