import React, { Component } from 'react';

class VotingDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };


  }

  componentDidMount() {

  }

  render() {
    let bg1 = require('../../../public/assets/img/images/voting/hun_lin_info_1.jpg');
    return (
      <div>
        <section id="slider">
          <div className="owl_slider top_slider_wrap">
            <ul className="owl-carousel top_slider">
              <li className="style-3 top-slider-item" style={{backgroundImage: "url("+bg1+")"}} id="voting-slider">
              </li>
            </ul>
          </div>
        </section>

        <section>
          // <div className="row">
          //   <div className="column-50-inline">
          //     <div className="competition_img"><img src={require('../../../public/assets/img/images/events/tnst_2.JPG')}/></div>
          //   </div>
          //   <div className="column-50-inline padding-right-20">
          //     <h2 className="voting-title">Vòng Chung Kết Phản Biện Giải thưởng Thanh niên Kiến tạo 2019</h2>
          //     <p className="competition_desc">
          //       Hình thức tranh giải: Mỗi nhóm cử 01 đại diện tham gia vòng Pitching trực tiếp với thời lượng 30 phút/nhóm.
          //     </p>
          //     <p className="competition_desc">Hội đồng BĐG: gồm 50 đại diện đến từ các tổ chức Phi chính phủ, các đơn vị báo chí và các thủ lĩnh thanh niên khắp nơi trên cả nước. Dựa vào kết quả của BĐG, BTC sẽ chọn ra những dự án xứng đáng nhất. </p>
          //     <p className="competition_desc"> Thời gian diễn ra vòng pitching: 08:30 – 12:00 Chủ nhật, ngày 29/09/2019</p>
          //     <p className="competition_desc">Thời gian diễn ra lễ trao giải: 14:30 – 15:30 Chủ nhật, ngày 29/09/2019</p>
          //     <p className="competition_desc">Địa điểm: Học Viện Thanh Thiếu Niên Việt Nam - 58 Nguyễn Chí Thanh, Láng Thượng, Đống Đa, Hà Nội.</p>
          //   </div>
          // </div>
        </section>
      </div>
    );
  }
}

export default VotingDetail;
