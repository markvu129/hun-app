import React, { Component } from 'react';

class TeamDetail extends Component {
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
      <div>
        <section id="slider" className="bg">
          <div className="container">
            <div className="section-title" style={{backgroundImage: "url("+line+")"}}>
              <h2 className="color-bg">Team HUN</h2>
            </div>

            <div className="at-grid no-border at-grid-white" data-column="2">
              <div className="column-thirty column-left column-white">
                <h4>Lê Đình Hiếu</h4>
                <p className="member-title">Founder & Educator</p>
                <img>
                </img>
              </div>
              <div className="column-seventy column-right column-white">
                <div>
                  <p className="member-description"></p>
                </div>
              </div>
            </div>

            <div className="at-grid no-border at-grid-white" data-column="2">
              <div className="half-column column-left column-white">
                <h4>Lê Hoàng Phong</h4>
                <p className="member-title">Project Manager</p>
                <img>
                </img>
              </div>
              <div className="half-column column-right column-white">
                <div>
                  <p className="member-description"></p>
                </div>
              </div>
            </div>
            <div className="at-grid no-border" data-column="2">
              <div className="half-column column-left column-white">
                <h4>Nguyễn Huỳnh Bảo Trân</h4>
                <p className="member-title">Creative Director</p>
                <img>
                </img>
              </div>
              <div className="half-column column-right column-white">
                <div>
                  <p className="member-description"></p>
                </div>
              </div>
            </div>
            <div className="at-grid no-border" data-column="2">
              <div className="half-column column-left column-white">
                <h4>Lê Nữ Hoàng Anh</h4>
                <p className="member-title">Academic Manager</p>
                <img>
                </img>
              </div>
              <div className="half-column column-right column-white">
                <div>
                  <p className="member-description"></p>
                </div>
              </div>
            </div>
            <div className="at-grid no-border" data-column="2">
              <div className="column-forty column-left column-white">
                <h4>Vũ Xuân Minh</h4>
                <p className="member-title">Technology Lead</p>
                <div className="member-detail-image">
                  <img src={require('../../../public/assets/img/images/team_details/minh_detail.JPG')}>
                  </img>
                </div>
              </div>
              <div className="column-sixty column-right column-white">
                <div>
                  <p className="member-description">Tốt nghiệp cử nhân từ Đại Học Quốc Gia Singapore và đang là kỹ sư phần mềm tại Tập Đoàn Alibaba (trụ sở Singapore), Minh đang đảm nhiệm vai trò phát triển công nghệ cho Hear.Us.Now. Đam mê về giáo dục, Minh đã từng giảng dạy và tư vấn cho nhiều bạn trẻ mong muốn được đi du học. Khát vọng của Minh là sủ dụng công nghệ để thu hẹp khoàng cách trong giáo dục, giúp nhân rộng giá trị đến tất cả mọi người. Lúc rảnh rỗi mình thường đọc sách, nghe nhạc hoặc và tập gym.
                  </p>
                </div>
              </div>
            </div>
            <div className="section-title advisor-section" style={{backgroundImage: "url("+line+")"}}>
              <h2 className="color-bg">Ban Cố Vấn</h2>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default TeamDetail;
