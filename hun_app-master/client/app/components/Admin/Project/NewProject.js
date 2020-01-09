import React, {Component} from 'react';
import apiRoutes from "../../../routes/ApiRoutes";
import Select from "react-select";

class NewProject extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.cancelImage = this.cancelImage.bind(this);

    this.state = {
      postData: {
        title: '',
        is_active: [],
        content: '',
        time: '',
        avatar: null
      },
      file: null,
      submitSuccess: false
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    let postData = {
      'title': this.state.postData.title,
      'is_active': this.state.postData.is_active,
      'time': this.state.postData.time
    };

    console.log(postData);


    // const formData = new FormData();
    // formData.append("json", JSON.stringify(postData));
    // formData.append("file", this.state.post.avatar);
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
    const postData = this.state.postData;
    postData[field] = event.target.value;
    this.setState({
      postData: postData
    });
  }

  onSelect(values, field){
    const postData = this.state.postData;
    postData[field] = values;
    this.setState({
      postData: postData
    });
  }

  onChangeImage(event){
    event.preventDefault();
    const postData = this.state.postData;
    postData['avatar'] = event.target.files[0];
    this.setState({
      postData: postData,
      file: URL.createObjectURL(event.target.files[0])
    });
  }

  cancelImage(){
    const postData = this.state.postData;
    postData['avatar'] = null;
    this.setState({
      postData: postData,
      file: null
    });
  }

  componentDidMount() {

  }


  render() {
    let isActiveOptions = [{"label": "true", "value": "true"},
      {"label": "false", "value": "false"}
    ];

    if (!this.state.submitSuccess){
      return (
        <div className="new-form">
          <div className="container">
            <p>New project</p>
            <form className="cmxform" id="ContactForm" onSubmit={this.handleSubmit}>
              <input
                id="ftitle"
                placeholder="Title"
                type="text"
                name="title"
                value={this.state.postData.title}
                onChange={this.onChange}
                required/>

              <p>Is project active?</p>
              <Select className="select-section" placeholder={this.state.postData.is_active.value? this.state.postData.is_active.value: "false"} options={isActiveOptions} onChange={(values) => this.onSelect(values, 'is_active')} />


              <textarea
                id="fcontent"
                placeholder="Content"
                name="content"
                value={this.state.postData.content}
                onChange={this.onChange}></textarea>

              <p>Image</p>
              <input type="file" name="file" onChange={this.onChangeImage}/>

              {
                this.state.file ? (
                  <div>
                    <img height="200" src={this.state.file} className="image-preview"/>
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
          <p>Đăng có lỗi. Xin vui lòng thử lại.</p>
        </div>
      )
    }
    else {
      return(
        <div>
          <p className="success-msg-contact">Project added successfully</p>
        </div>
      )
    }
  }
}

export default NewProject;
