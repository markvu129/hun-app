import React, {Component} from 'react';
import Modal from "react-bootstrap/Modal";
import Select from "react-select";
import {Link} from "react-router-dom";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitSuccess: false,
      modalIsOpen: false,
      filter: {
        title: '',
        is_active: [],
        content: '',
        time: ''
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
        title: '',
        is_active: []
      }
    })
  }

  componentDidMount(){}

  render(){
    let isActiveOptions = [{"label": "true", "value": "true"},
      {"label": "false", "value": "false"}
    ];

    return(
      <div>
        <div className="main">
          <div className="hipsum">
            <div className="jumbotron">
              <p className="image-library-title">All projects</p>

              <div className="filter-section">
                <div className="filter" onClick={this.openModal}>
                  <p><span><i className="fa fa-filter" aria-hidden="true"></i></span> Filter</p>
                </div>

                <div className="filter refresh-filter"  onClick={this.clearFilter}>
                  <p><span><i className="fa fa-refresh" aria-hidden="true"></i></span> Refresh filter</p>
                </div>
              </div>

              <Modal id='volunteering' show={this.state.modalIsOpen} onHide={this.closeModal} animation={false}>
                <Modal.Header className="filter-header" closeButton>
                  <p><span><i className="fa fa-filter" aria-hidden="true"></i></span> Filter</p>
                </Modal.Header>
                {!this.state.submitSuccess ? (
                  <div>
                    <form className="cmxform" id="volunteer-form" onSubmit={this.handleSubmit}>
                      <input
                        id="fname"
                        placeholder="Title"
                        type="text"
                        name="title"
                        value={this.state.filter.title}
                        onChange={this.onChange}
                      />

                      <input
                        id="content"
                        placeholder="Contains keywords"
                        type="text"
                        name="content"
                        value={this.state.filter.content}
                        onChange={this.onChange}
                      />

                      <p>Is project active?</p>
                      <Select className="select-section" placeholder={this.state.filter.is_active.value? this.state.filter.is_active.value: "false"} options={isActiveOptions} onChange={(values) => this.onSelect(values, 'is_active')} />

                      <button className="btn btn-secondary send-modal">Apply</button>
                    </form>
                  </div>) : (
                  <Modal.Body><p className="success-msg-contact">Apply filter success</p></Modal.Body>
                )}
              </Modal>

              <div className="table-list">
                <table>
                  <thead>
                  <tr>
                    <th>Title</th>
                    <th>Content</th>
                    <th>Is_active</th>
                    <th>Time</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td data-column="First Name">James</td>
                    <td data-column="Last Name">Matman</td>
                    <td data-column="Job Title">True</td>
                    <td data-column="Job Title">Chief Sandwich Eater</td>
                    <td data-column="Twitter">Edit</td>
                  </tr>
                  <tr>
                    <td data-column="First Name">Andor</td>
                    <td data-column="Last Name">Nagy</td>
                    <td data-column="Job Title">True</td>
                    <td data-column="Job Title">Chief Sandwich Eater</td>
                    <td data-column="Twitter">Edit</td>
                  </tr>
                  </tbody>
                </table>
              </div>

              <button className="add-new"><Link to='/admin/projects/new'>Add project</Link></button>
            </div>
          </div>
        </div>
      </div>

    )
  }


}

export default Projects;
