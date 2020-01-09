import React, { Component } from 'react';
import ContactForm from '../Form/ContactForm';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };


  }

  componentDidMount() {

  }




  render() {
    return (
      <section id="contacts" className="colored">
        <div className="container">
          <div className="section-title">
            <h2 className="dark-bg">Liên Hệ</h2>
          </div>
          <div className="section-body">
            <div className="col-lg-3 col-md-3 col-sm-5 col-xs-10 centered contact-details">
              <div className="social-icons">
                <a href="https://www.facebook.com/hear.us.now.project" target="_blank"><img className="contact-icon" src={require('../../../public/assets/img/images/contacts/facebook.jpg')}/></a>
                <a href="https://www.instagram.com/hearusnowproject" target="_blank"><img className="contact-icon" src={require('../../../public/assets/img/images/contacts/instagram.jpg')}/></a>
                <a href="https://www.youtube.com/channel/UCBfXaqhRopUGkOP6neqaorA" target="_blank"><img className="contact-icon" src={require('../../../public/assets/img/images/contacts/youtube.jpg')}/></a>
              </div>
              <div className="contacts">
                <span className="details"><img className="phone-icon" src="https://img.icons8.com/metro/26/000000/phone.png"/> (+84) 0933 857 500</span>
                <hr/>
                  <span className="details email-by-word">Email: hear.us.now.project@gmail.com</span>
                  <div className="social-icons email-by-image"><a href="mailto:hear.us.now.project@gmail.com" target="_blank"><img className="contact-icon" src={require('../../../public/assets/img/images/contacts/gmail.jpg')}/></a></div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <h3 className="black-text">Địa Điểm</h3>
                <p><img className="address-icon" src="https://img.icons8.com/plasticine/100/000000/address.png"/>89 Vạn Kiếp, Phường 3, Quận Bình Thạnh, TPHCM, Việt Nam</p>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 sendmessage">
                <h3 className="black-text">Gửi Tin Nhắn Cho HUN</h3>
                <ContactForm/>
                <div id="contactemailsendresponse" className="emailsendresponse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
