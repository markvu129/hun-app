import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Modal from "react-bootstrap/Modal";
import Select from "react-select";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
    this.state = {
      location: 'posts',
      modalIsOpen: false,
      filter: {
        title: '',
        status: [],
        info: '',
        content:'',
        source: '',
        is_active: [],
        categories: []
      }
    };

  }

  componentDidMount(){

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
        status: [],
        info: '',
        content:'',
        source: '',
        is_active: [],
        categories: []
      }
    })
  }

  render() {
    let statusOptions = [{"label": "draft", "value": "draft"},
      {"label": "public", "value": "public"},
      {"label": "canceled", "value": "canceled"}
    ];

    let isActiveOptions = [{"label": "true", "value": "true"},
      {"label": "false", "value": "false"}
    ];

    let categories = [{"label": "news", "value": "news"},
      {"label": "announcement", "value": "announcement"}
    ];

    return (
      <div>
        <div className="main">
          <div className="hipsum">
            <div className="jumbotron">
              <p className="image-library-title">All posts</p>

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

                      <Select className="select-section" placeholder={this.state.filter.status.value? this.state.filter.status.value : "Status"} options={statusOptions} onChange={(values) => this.onSelect(values, 'status')} />

                      <p>Is post active?</p>
                      <Select className="select-section" placeholder={this.state.filter.is_active.value? this.state.filter.is_active.value: "false"} options={isActiveOptions} onChange={(values) => this.onSelect(values, 'is_active')} />

                      <p>Categories</p>
                      <Select placeholder={this.state.filter.categories.map(c => c.value) ? this.state.filter.categories.map(c => c.value) : "Categories"} isMulti options={categories} onChange={(values) => this.onSelect(values, 'categories')} />
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
                    <th>Date</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Author</th>
                    <th>Source</th>
                    <th>Content</th>
                    <th>Link</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td data-column="First Name">James</td>
                    <td data-column="Last Name">Matman</td>
                    <td data-column="Job Title">Chief Sandwich Eater</td>
                    <td data-column="Twitter">Active</td>
                    <td data-column="Twitter">@james</td>
                    <td data-column="Twitter">@james</td>
                    <td data-column="Twitter">@james</td>
                    <td data-column="Twitter">Edit</td>
                  </tr>
                  <tr>
                    <td data-column="First Name">Andor</td>
                    <td data-column="Last Name">Nagy</td>
                    <td data-column="Job Title">Designer</td>
                    <td data-column="Twitter">Active</td>
                    <td data-column="Twitter">@andornagy</td>
                    <td data-column="Twitter">@james</td>
                    <td data-column="Twitter">@james</td>
                    <td data-column="Twitter">Edit</td>
                  </tr>
                  <tr>
                    <td data-column="First Name">Tamas</td>
                    <td data-column="Last Name">Biro</td>
                    <td data-column="Job Title">Game Tester</td>
                    <td data-column="Twitter">Active</td>
                    <td data-column="Twitter">@tamas</td>
                    <td data-column="Twitter">@james</td>
                    <td data-column="Twitter">@james</td>
                    <td data-column="Twitter">Edit</td>
                  </tr>
                  <tr>
                    <td data-column="First Name">Zoli</td>
                    <td data-column="Last Name">Mastah</td>
                    <td data-column="Job Title">Developer</td>
                    <td data-column="Twitter">@zoli</td>
                    <td data-column="Twitter">@james</td>
                    <td data-column="Twitter">@james</td>
                    <td data-column="Twitter">Edit</td>
                  </tr>
                  <tr>
                    <td data-column="First Name">Szabi</td>
                    <td data-column="Last Name">Nagy</td>
                    <td data-column="Job Title">Chief Sandwich Eater</td>
                    <td data-column="Twitter">@szabi</td>
                    <td data-column="Twitter">@james</td>
                    <td data-column="Twitter">@james</td>
                    <td data-column="Twitter">Edit</td>
                  </tr>
                  <tr>
                    <td data-column="First Name">Szabi</td>
                    <td data-column="Last Name">Nagy</td>
                    <td data-column="Job Title">Chief Sandwich Eater</td>
                    <td data-column="Twitter">@szabi</td>
                    <td data-column="Twitter">@james</td>
                    <td data-column="Twitter">@james</td>
                    <td data-column="Twitter">Edit</td>
                  </tr>
                  </tbody>
                </table>
              </div>

              <button className="add-new"><Link to='/admin/posts/new'>Add post</Link></button>

            </div>
          </div>
        </div>



      </div>

    );
  }
}

export default Posts;
