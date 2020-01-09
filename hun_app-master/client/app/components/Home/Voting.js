import React, { Component } from 'react';

class Voting extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };


  }

  componentDidMount() {

  }

  render() {
    return (
      <section id="voting">      
        <div className="row">
          <div className="column-50-inline competition_1">
            <img
              src={require('../../../public/assets/img/images/voting/hun_lin_info.jpg')}/>
            <a href="http://vote.linnarrowthegap.org/" target="blank"><button className="btn btn-danger btn-lg rds btn_donate btn_join btn_voting_1" type="button" id="btn_join">Bình chọn cho Hear.Us.Now</button></a>
          </div>
          <div className="column-50-inline competition_2">
            <div className="stack-half">
            <img
              src={require('../../../public/assets/img/images/voting/hun_lin_info_3.jpg')}/>
            </div>
            <div className="stack-half">
              <img
                src={require('../../../public/assets/img/images/voting/hun_lin_info_2.jpg')}/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Voting;
