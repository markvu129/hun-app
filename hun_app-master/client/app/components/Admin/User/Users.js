import React, {Component} from 'react';
import Modal from "react-bootstrap/Modal";
import Select from "react-select";
import {Link} from "react-router-dom";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitSuccess: false,
      modalIsOpen: false,
      filter: {
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.clearFilter = this.clearFilter.bind(this);


  }

  handleSubmit(){
    console.log(this.state.filter);
    this.closeModal();

  }

  onChange(event){
    event.preventDefault();
    const field = event.target.name;
    const filter = this.state.filter;
    filter[field] = event.target.value;
    this.setState({
      filter: filter
    });
  }

  onSelect(values, field){
    const filter = this.state.filter;
    filter[field] = values;
    this.setState({
      filter: filter
    });
  }

  closeModal(){
    this.setState({
      modalIsOpen: false
    })
  }

  openModal(){
    this.setState({
      modalIsOpen: true
    })
  }

  clearFilter(){
    this.setState({
      filter: {
      }
    })
  }

  componentDidMount(){}

  render(){

    return(
      <div>
        <div className="main">
          <div className="hipsum">
            <div className="jumbotron">
              <p className="image-library-title">Admins</p>

              <div className="table-list">
                <table className="table-active">
                  <thead>
                  <tr>
                    <th>Email</th>
                    <th>Role</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td data-column="First Name">James</td>
                    <td data-column="Last Name">admin</td>
                  </tr>
                  <tr>
                    <td data-column="First Name">Andor</td>
                    <td data-column="Last Name">admin</td>
                  </tr>
                  </tbody>
                </table>

                <p className="image-library-title">Users</p>

                <div className="table-list">
                  <table className="table-active">
                    <thead>
                    <tr>
                      <th>Email</th>
                      <th>Role</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td data-column="First Name">James</td>
                      <td data-column="Last Name">user</td>
                    </tr>
                    <tr>
                      <td data-column="First Name">Andor</td>
                      <td data-column="Last Name">user</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    )
  }


}

export default Users;
