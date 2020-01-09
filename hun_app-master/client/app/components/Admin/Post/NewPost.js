import React, {Component} from 'react';
import apiRoutes from "../../../routes/ApiRoutes";
import Select from "react-select";
import Modal from "react-bootstrap/Modal";

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.cancelImage = this.cancelImage.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.chooseImage = this.chooseImage.bind(this);
    this.renderImagesFromState = this.renderImagesFromState.bind(this);

    this.state = {
      post: {
        title: '',
        status: [],
        info: '',
        content:'',
        source: '',
        is_active: [],
        categories: [],
        avatar: []
      },
      file: [],
      submitSuccess: false,
      modalIsOpen: false
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    let postData = {
      'title': this.state.post.title,
      'status': this.state.post.status,
      'is_active': this.state.post.is_active,
      'info': this.state.post.info,
      'content': this.state.post.content,
      'source': this.state.post.source,
      'categories': this.state.post.categories
    };

    console.log(postData);
    console.log(this.state.post.avatar)

    // const formData = new FormData();
    // formData.push("json", JSON.stringify(postData));
    // formData.push("file", this.state.post.avatar);
    // // create an AJAX request
    // const xhr = new XMLHttpRequest();
    // xhr.open('post', apiRoutes.contact);
    // xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    // xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    // xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    // xhr.responseType = 'json';
    // xhr.addEventListener('load', () => {
    //   if (xhr.status === 200) {
    //     this.setState({
    //       submitSuccess: true
    //     });
    //   } else {
    //     this.setState({
    //       error: xhr.response.errors[0].messages[0]
    //     });
    //   }
    //   this.setState({
    //     contact: {
    //       email: '',
    //       name: '',
    //       note: ''
    //     }
    //   })
    // });
    // xhr.send(formData);
  }

  onChange(event){
    event.preventDefault();
    const field = event.target.name;
    const post = this.state.post;
    post[field] = event.target.value;
    this.setState({
      post: post
    });
  }

  onSelect(values, field){
    const post = this.state.post;
    post[field] = values;
    this.setState({
      post: post
    });
  }

  onChangeImage(event){
    event.preventDefault();
    const post = this.state.post;
    post['avatar'].push(event.target.files[0]);
    const file = this.state.file;
    file.push(URL.createObjectURL(event.target.files[0]));
    this.setState({
      post: post,
      file: file
    });
  }

  cancelImage(){
    const post = this.state.post;
    post['avatar'] = [];
    this.setState({
      post: post,
      file: []
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

  chooseImage(event){
    event.preventDefault();
    const file = this.state.file;
    file.push(event.target.src);
    this.setState({
      file: file
    });
  }

  renderImages(){
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) =>
      <img src="https://unsplash.it/974/?random" onClick={this.chooseImage} alt="9.jpg" className="single-image" key={number}/>
    );
    return listItems
  }

  renderImagesFromState(){
    const files = this.state.file;
    const listItems = files.map((file) =>
      <img height="200" src={file} className="image-preview"/>
    )
    return listItems;
  }


  componentDidMount() {

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

    if (!this.state.submitSuccess){
      return (
        <div className="new-form">
          <div className="container">
          <p>New post</p>
          <form className="cmxform" id="ContactForm" onSubmit={this.handleSubmit}>
            <input
              id="ftitle"
              placeholder="Title"
              type="text"
              name="title"
              value={this.state.post.title}
              onChange={this.onChange}
              required/>

            <p>Post Status</p>
            <Select className="select-section" placeholder={this.state.post.status.value? this.state.post.status.value : "Status"} options={statusOptions} onChange={(values) => this.onSelect(values, 'status')} />

            <p>Is post active</p>
            <Select className="select-section" placeholder={this.state.post.is_active.value? this.state.post.is_active.value: "false"} options={isActiveOptions} onChange={(values) => this.onSelect(values, 'is_active')} />

            <textarea
              id="finfo"
              placeholder="Info (Summary)"
              name="info"
              value={this.state.post.info}
              onChange={this.onChange}
              required/>
            <input
              id="fsource"
              placeholder="Source"
              type="text"
              name="source"
              value={this.state.post.source}
              onChange={this.onChange}
              required/>
            <textarea
              id="fcontent"
              placeholder="Content"
              name="content"
              value={this.state.post.content}
              onChange={this.onChange}></textarea>

            <p>Categories</p>
            <Select className="select-section" placeholder={this.state.post.categories.map(c => c.value)? this.state.post.categories.map(c => c.value) : "Categories"} isMulti options={categories} onChange={(values) => this.onSelect(values, 'categories')} />

            <p>Image</p>
            <input type="file" name="file" onChange={this.onChangeImage}/>
            <button className="choose-library-btn" onClick={this.openModal}>Choose image from HUN library</button>

            <Modal id='create-post-modal' show={this.state.modalIsOpen} onHide={this.closeModal} animation={false}>
              <Modal.Header className="filter-header" closeButton>
                <p><span><i className="fa fa-filter" aria-hidden="true"></i></span> HUN Image Library</p>
              </Modal.Header>
              <div className="create-post-image-list">
                <div className="image-library">
                  {this.renderImages()}
                </div>
              </div>
            </Modal>

            {
              this.state.file.length > 0 ? (
                <div>
                  {this.renderImagesFromState()}
                  <p className="cancel" onClick={this.cancelImage}><i className="fa fa-times fa-4x"> Cancel image</i></p>
                </div>
              ):(
                <div></div>
              )
            }

            <button className="btn btn-secondary send-modal add-new-btn">Add</button>

          </form>
          </div>
        </div>
      )
    }
    else if (this.state.error){
      return(
        <div className="error-msg">
          <p>{this.state.error}</p>
          <p>Đăng bài có lỗi. Xin vui lòng thử lại.</p>
        </div>
      )
    }
    else {
      return(
        <div>
          <p className="success-msg-contact">Post added successfully</p>
        </div>
      )
    }
  }
}

export default NewPost;
