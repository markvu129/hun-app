import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: 'team',
    };

  }

  componentDidMount(){

  }

  render() {

    return (
      <div>
        <div className="main">
          <div className="hipsum">
            <div className="jumbotron">
              <p className="image-library-title">Active members</p>
              <div className="table-list">
                <table className="table-active">
                  <thead>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Is_active</th>
                    <th>Info</th>
                    <th>Social Links</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td data-column="First Name">James</td>
                    <td data-column="Last Name">Matman</td>
                    <td data-column="Twitter">Active</td>
                    <td data-column="Job Title">Chief Sandwich Eater</td>
                    <td data-column="Job Title">Chief Sandwich Eater</td>
                    <td data-column="Twitter">Edit</td>
                  </tr>
                  <tr>
                    <td data-column="First Name">Andor</td>
                    <td data-column="Last Name">Nagy</td>
                    <td data-column="Twitter">Active</td>
                    <td data-column="Job Title">Chief Sandwich Eater</td>
                    <td data-column="Job Title">Chief Sandwich Eater</td>
                    <td data-column="Twitter">Edit</td>
                  </tr>
                  </tbody>
                </table>

                <p className="image-library-title">Past members</p>
                <div className="table-list">
                  <table className="table-active">
                    <thead>
                    <tr>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Is_active</th>
                      <th>Info</th>
                      <th>Social Links</th>
                      <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td data-column="First Name">James</td>
                      <td data-column="Last Name">Matman</td>
                      <td data-column="Twitter">Non-active</td>
                      <td data-column="Job Title">Chief Sandwich Eater</td>
                      <td data-column="Job Title">Chief Sandwich Eater</td>
                      <td data-column="Twitter">Edit</td>
                    </tr>
                    <tr>
                      <td data-column="First Name">Andor</td>
                      <td data-column="Last Name">Nagy</td>
                      <td data-column="Twitter">Non-active</td>
                      <td data-column="Job Title">Chief Sandwich Eater</td>
                      <td data-column="Job Title">Chief Sandwich Eater</td>
                      <td data-column="Twitter">Edit</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <button className="add-new"><Link to='/admin/team/new'>Add member</Link></button>

            </div>
          </div>
        </div>



      </div>

    );
  }
}

export default Team;
