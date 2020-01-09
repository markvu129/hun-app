import React, {Component} from 'react';
import YearlyGraph from "../Statistics/YearlyGraph";


class Donation extends Component {
  constructor(props) {
    super(props);
    this.state = {}

  }



  componentDidMount() {

  }


  render() {

    return (
      <div className="admin-donation">
        <YearlyGraph/>
      </div>
    )
  }

}

export default Donation;
