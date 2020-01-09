import React, {Component} from 'react';
import LoginForm from "../Form/LoginForm";

class Authentication extends Component {
  constructor(props) {
    super(props);

    this.state = {};


  }

  componentDidMount() {

  }

  render() {
    let bg1 = require('../../../public/assets/img/images/donation/donation_cover.jpg');
    return (
      <section id="authentication">
        <div className="owl_slider top_slider_wrap">
          <ul className="owl-carousel top_slider">
            <li className="style-3 top-slider-item" style={{backgroundImage: "url("+bg1+")"}} id="voting-slider">
                <div className="contentwrap">
                  <div className="container login-section">
                    <div className="content">
                      <LoginForm/>
                    </div>
                  </div>
                </div>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Authentication;
