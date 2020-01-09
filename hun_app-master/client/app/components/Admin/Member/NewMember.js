import React, {Component} from 'react';
import Select from "react-select";

class NewMember extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.cancelImage = this.cancelImage.bind(this);

    this.state = {
      member: {
        name: '',
        position: '',
        is_active: [],
        info: '',
        avatar: null
      },
      file: null,
      submitSuccess: false
    };

  }

  handleSubmit(event) {
    event.preventDefault();

    let postData = {
      'name': this.state.member.name,
      'is_active': this.state.member.status,
      'position': this.state.member.position,
      'info': this.state.member.info
    };
    console.log(postData);
  }

  onChange(event){
    event.preventDefault();
    const field = event.target.name;
    const member = this.state.member;
    member[field] = event.target.value;
    this.setState({
      member: member
    });
  }

  onSelect(values, field){
    const member = this.state.member;
    member[field] = values;
    this.setState({
      member: member
    });
  }

  onChangeImage(event){
    event.preventDefault();
    const member = this.state.member;
    member['avatar'] = event.target.files[0];
    this.setState({
      member: member,
      file: URL.createObjectURL(event.target.files[0])
    });
  }

  cancelImage(){
    const member = this.state.member;
    member['avatar'] = null;
    this.setState({
      member: member,
      file: null
    });
  }


  render(){
    let isActiveOptions = [{"label": "true", "value": "true"},
      {"label": "false", "value": "false"}
    ];

    if (!this.state.submitSuccess){
      return (
        <div className="new-form">
          <div className="container">
            <p>New member</p>
            <form className="cmxform" id="ContactForm" onSubmit={this.handleSubmit}>
              <input
                id="fname"
                placeholder="Name"
                type="text"
                name="name"
                value={this.state.member.name}
                onChange={this.onChange}
                required/>


              <p>Is member active?</p>
              <Select className="select-section" placeholder={this.state.member.is_active.value? this.state.member.is_active.value: "false"} options={isActiveOptions} onChange={(values) => this.onSelect(values, 'is_active')} />

              <input
                id="fposition"
                placeholder="Position"
                type="text"
                name="position"
                value={this.state.member.position}
                onChange={this.onChange}
                required/>

              <textarea
                id="finfo"
                placeholder="Info"
                name="info"
                value={this.state.member.info}
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
          <p>Có lỗi. Xin vui lòng thử lại.</p>
        </div>
      )
    }
    else {
      return(
        <div>
          <p className="success-msg-contact">Member added successfully</p>
        </div>
      )
    }
  }




}

export default NewMember;
