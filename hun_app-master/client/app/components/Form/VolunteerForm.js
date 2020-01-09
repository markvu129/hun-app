import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Select from 'react-select';
import apiRoutes from "../../routes/ApiRoutes";

class VolunteerForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSelect = this.onSelect.bind(this);

    this.state = {
      modalIsOpen: this.props.modalIsOpen ? this.props.modalIsOpen : false,
      contact: {
        name: '',
        email: '',
        msg: '',
        interest: []
      },
      submitSuccess: false
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.modalIsOpen !== prevProps.modalIsOpen) {
      this.setState({
        modalIsOpen: this.props.modalIsOpen
      })
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    let postData = {
      'name': this.state.contact.name,
      'email': this.state.contact.email,
      'note': this.state.contact.msg,
      'type': 'volunteer',
      'project': this.state.contact.interest
    };

    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('post', apiRoutes.contact);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          submitSuccess: true
        });
      } else {
        this.setState({
          error: xhr.response.errors[0].messages[0]
        });
      }
      this.setState({
        contact: {
          name: '',
          email: '',
          msg: '',
          interest: []
        }
      })
    });
    xhr.send(JSON.stringify(postData));

  }

  onChange(event){
    event.preventDefault();
    const field = event.target.name;
    const contact = this.state.contact;
    contact[field] = event.target.value;
    this.setState({
      contact: contact
    });
  }

  onSelect(values){
    const contact = this.state.contact;
    contact['interest'] = values;
    this.setState({
      contact: contact
    });
  }

  render() {
    let options;
    if (this.props.volunteerType){
      options = [{"label": this.props.volunteerType, "value": this.props.volunteerType}];
    }
    else {
      options = [{"label": "Lớp học Ngôn Ngữ Ký Hiệu", "value": "Lớp học Ngôn Ngữ Ký Hiệu"},
        {"label": "Xây dựng video tiếng Anh", "value": "Xây dựng vieo tiếng Anh"},
        {"label": "Bread and Smiles", "value": "Bread and Smiles"},
        {"label": "Lớp học nghề kỹ năng", "value": "Lớp học nghề kỹ năng"},
        {"label": "Life Project For Youths", "value": "Life Project For Youths"}
      ];
    }
    return (
      <Modal id='volunteering' show={this.state.modalIsOpen} onHide={this.props.closeModal} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>TÌNH NGUYỆN VIÊN HEAR.US.NOW</Modal.Title>
        </Modal.Header>
        {!this.state.submitSuccess ? (
          <div>
            <Modal.Body>Trở thành thành viên gia đình Hear.Us. để cùng xây dựng sứ mệnh bình đẳng giáo dục cho mọi người</Modal.Body>
            <form className="cmxform" id="volunteer-form" onSubmit={this.handleSubmit}>
              <input
                id="fname"
                placeholder="Tên Của Bạn"
                type="text"
                name="name"
                value={this.state.contact.name}
                onChange={this.onChange}
                required/>
              <input
                id="femail"
                placeholder="Email"
                type="email"
                name="email"
                value={this.state.contact.email}
                onChange={this.onChange}
                required/>
              <textarea
                id="fmsg"
                placeholder="Bạn có những kỹ năng/sở trường nào hoặc nguyện vọng của bạn là gì khi tham gia Hear.Us.Now?"
                name="msg"
                value={this.state.contact.msg}
                onChange={this.onChange}></textarea>
              <p>Bạn thích tham gia dự án nào của HUN?</p>
              <Select placeholder={this.props.volunteerType ? this.props.volunteerType : "Hoạt động"} isMulti options={options} onChange={(values) => this.onSelect(values)} />
              <button className="btn btn-secondary send-modal">Gửi</button>
            </form>
          </div>) : (
          <Modal.Body><p className="success-msg-contact">Cảm ơn bạn chúng tôi đã nhận được đăng ký của bạn. Hear.Us.Now sẽ sớm liên lạc với bạn.</p></Modal.Body>
        )}
        </Modal>
    );
  }
}

export default VolunteerForm;
