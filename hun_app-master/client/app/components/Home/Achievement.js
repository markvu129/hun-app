import React, { Component } from 'react';

class Achievement extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };


  }

  componentDidMount() {

  }




  render() {
    let line = require('../../../public/assets/img/images/line_yellow.jpg');
    return (
      <section id="achievements" className="dark bg">
        <div className="container">
          <div className="section-title" style={{backgroundImage: "url("+line+")"}}>
            <h2 className="color-bg">Chặng đường của HUN</h2>
          </div>
          <div className="at-grid" data-column="4">
            <div className="at-column">
              <div className="at-user">
                  <i className="fa fa-user-circle-o fa-5x achievement-icon"></i>
                <div className="at-user__title achievement">200 người khiếm thính</div>
              </div>
            </div>

            <div className="at-column">
              <div className="at-user">
                <i className="fa fa-youtube-play fa-5x achievement-icon"></i>
                <div className="at-user__title achievement">81 video Tiếng Anh</div>
              </div>
            </div>

            <div className="at-column">
              <div className="at-user">
                <i className="fa fa-wrench fa-5x achievement-icon"></i>
                <div className="at-user__title achievement">15 workshop kỹ năng</div>
              </div>
            </div>

            <div className="at-column">
              <div className="at-user">
                <i className="fa fa-american-sign-language-interpreting  fa-5x achievement-icon"></i>
                <div className="at-user__title achievement">24 lớp sign language</div>
              </div>
            </div>
          </div>
          <div className="at-grid" data-column="2">
            <div className="half-column column-left">
              <iframe height="350" src="https://www.youtube.com/embed/477JWaVE5fE" frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen></iframe>
            </div>
            <div className="half-column column-right column-white">
              <div>
                <p className="funding-public-title">Với sự tin tưởng của cộng đồng</p>
                <p className="funding-public-text">Hear.Us.Now đã đem lại giá trị đến hơn <span>200</span> người khiếm thính từ độ tuổi <span>12-25</span> trên khắp TPHCM.</p>
              </div>
            </div>
          </div>
          <div className="container achievement-csds">
            <h3>Giải nhất cuộc thi Thanh Niên Kiến Tạo 2019</h3>
            <div className="container">
              <p className="csds-description">Tham gia cuộc thi Thanh Niên Kiến Tạo 2019 CSDS VN, Hear.Us.Now không chỉ có cơ hội giới thiệu dự án và những hoạt động dành cho người khiếm thính đến gần hơn với cộng đồng, mà còn là nguồn động viên để chúng tôi ngày một cố gắng hơn, tạo ra nhiều giá trị hơn, lắng nghe chân thành hơn những người khiếm thính. </p>
            </div>
          </div>
          <div className="at-grid award-section" data-column="2">
            <div className="half-column column-left csds-image-section">
              <img src={require("../../../public/assets/img/images/story/csds_1.JPG")} alt=""/>
            </div>
            <div className="half-column csds-image-section">
              <img src={require("../../../public/assets/img/images/story/csds_2.JPG")} alt=""/>
            </div>
          </div>
          <div className="container center-button">
            <a href="/HUN-road"><button className="btn btn-danger btn-lg rds btn_donate btn_join" type="button" id="btn_join btn_solution">Tìm hiểu thêm về dự án</button></a>
          </div>
        </div>
      </section>
    );
  }
}

export default Achievement;
