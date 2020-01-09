import React, {Component} from 'react';
import apiRoutes from "../../routes/ApiRoutes";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      contact: {
        name: '',
        email: '',
        note: ''
      },
      submitSuccess: false
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    let postData = {
      'name': this.state.contact.name,
      'email': this.state.contact.email,
      'note': this.state.contact.note,
      'type': 'contact'
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
          email: '',
          name: '',
          note: ''
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




  componentDidMount() {

  }


  render() {
    if (!this.state.submitSuccess){
      return (
        <div>
          <p>HUN rất mong được nghe từ bạn, chúng tôi sẽ trả lời sớm nhất.</p>
          <form className="cmxform" id="ContactForm" onSubmit={this.handleSubmit}>
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
              placeholder="Tin Nhắn"
              name="note"
              value={this.state.contact.note}
              onChange={this.onChange}></textarea>
            <button className="btn btn-secondary">Gửi</button>
          </form>
        </div>
      )
    }
    else if (this.state.error){
      return(
        <div className="error-msg">
          <p>{this.state.error}</p>
          <p>Tin nhắn có lỗi. Xin vui lòng thử lại.</p>
        </div>
      )
    }
    else {
      return(
        <div>
          <p className="success-msg-contact">Tin nhắn của bạn đã được gửi đến HUN. Chúng tôi sẽ trả lời bạn sớm nhất :) Xin cảm ơn.</p>
        </div>
      )
    }
  }
}

export default ContactForm;
