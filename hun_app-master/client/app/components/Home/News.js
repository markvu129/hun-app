import React, {Component} from 'react';


class News extends Component {
  constructor(props) {
    super(props);

    this.state = {};


  }

  componentDidMount() {

  }


  render() {
    return (
      <section id="newsandevents">
        <div className="container">
          <div className="section-title">
            <h2 className="dark-bg">Tin Tức</h2>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12" id="latestnews">
              <h3 className="black-text">Mới Nhất</h3>

              <div className="newsitem">
                <div className="row">
                  <div className="col-lg-5 col-md-5 col-sm-5 col-xs-6">
                    <img src={require("../../../public/assets/img/images/news/trung_thu.jpg")} alt=""/>
                  </div>
                  <div className="col-lg-7 col-md-7 col-sm-7 col-xs-6">
                    <div className="news-text-wrap">
                      <div className="news-title">Trung Thu Thắp Sáng Ước Mơ
                      </div>
                      <div className="news-date">11 Tháng 9 2019
                      </div>
                      <div className="news-text">
                        <p>Chương trình "Đêm hội Trăng Rằm" thành công với: 🌙 300 bánh Trung Thu (bánh dẻo và bánh nướng) 🌙 100 bánh rau câu 🌙 140 lồng đèn bóng kính 🌙 150 quyển tập trắng 🌙 120 bịch bánh snack cùng 50 em học sinh khiếm thính tại HUN.</p>
                        <p><a href="https://www.facebook.com/hear.us.now.project/photos/a.876399822406431/2495562810490116/?type=3&theater" target="_blank" className="dark light-text">Chi
                          Tiết</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="newsitem">
                <div className="row">
                  <div className="col-lg-5 col-md-5 col-sm-5 col-xs-6">
                    <img src={require("../../../public/assets/img/images/news/midautumn.jpg")} alt=""/>
                  </div>
                  <div className="col-lg-7 col-md-7 col-sm-7 col-xs-6">
                    <div className="news-text-wrap">
                      <div className="news-title">Workshop Lồng Đèn Trung Thu
                      </div>
                      <div className="news-date">07 Tháng 9 2019
                      </div>
                      <div className="news-text">
                        <p>Chung tay thắp sáng ước mơ của các bạn khiếm thính qua những chiếc lồng đèn lung linh.</p>
                        <p><a href="https://www.facebook.com/hear.us.now.project/photos/a.876399822406431/2495562810490116/?type=3&theater" target="_blank" className="dark light-text">Chi
                          Tiết</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="newsitem">
                <div className="row">
                  <div className="col-lg-5 col-md-5 col-sm-5 col-xs-6">
                    <img src={require("../../../public/assets/img/images/news/sign_lang_class.jpg")} alt=""/>
                  </div>
                  <div className="col-lg-7 col-md-7 col-sm-7 col-xs-6">
                    <div className="news-text-wrap">
                      <div className="news-title">Buổi Tốt Nghiệp Khoá Học Ngôn Ngữ Ký Hiệu Hè/2019
                      </div>
                      <div className="news-date">22 Tháng 8 2019
                      </div>
                      <div className="news-text">
                        <p>Hear.Us.Now luôn sẵn sàng giúp đỡ các bạn trong hành trình tìm hiểu cuộc sống của người điếc/
                          khiếm thính.</p>
                        <p><a href="https://www.facebook.com/pg/hear.us.now.project/photos/?tab=album&album_id=2503417393037991&__xts__%5B0%5D=68.ARCfikfkX2ujuPkiQ4r91ed7oOCKJZKf-prdePDy1V2QI3nffL_esNi1ab88B0MSWP4sMyrai27aTpjb3spsSMDlrb5dJgbnXhVCcUsYTeBpVmRUvGkOP6upZ1KNKVkLfJLl-yYnMPFaZMNbJMbE-lmY5sVy9iacVXDFY_qO_mCYiD_s7ZCHQNdekfvhx_yiUXwrZHP6cjFtZIeT0JrOofiXbY06FZY92g8OfWux5oQk38AtiXPTTYmbFqPAJktcSFo4jgV4gI8RAUccNWYW0PHH2JPmfRf2H86zm0FQ0ZKm-aMRj9rlkru_EnNSJTV00P3C82SyjB1lNRrQt6_R3Eigoz5C6JljkO5HikUpCe1qF9ndY7SJViLVxPqMycJDKOVhs6uwK4APKCaUr8VMWw8VGJxOcb5jqg3NKXGRRiZcYg628L8dbHlfxQLBdN5fcPgpF9tGIiLo2uEH1qdI&__tn__=-UC-R" target="_blank" className="dark light-text">Chi
                          Tiết</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="events-wrap">
                <h3 className="black-text">Sự Kiện Sắp Tới</h3>
                <div className="event-item">
                  <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 event-date">17<br/><span
                    className="month">SEP</span></div>
                  <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 event-info">
                    <div className="event-title">Lớp Học Nghề Cùng Life Project For Youths</div>
                    <div className="event-text">
                      <p>Hear.Us.Now phối hợp cùng Life Project For Youth trao 17 suất học nghề cho miễn phí trong
                        vòng
                        một năm cho các bạn khiếm thính.</p>
                    </div>
                    <p><a href="#" target="_blank" className="dark light-text">Chi tiết</a>
                    </p>
                  </div>
                </div>
                <div className="event-item">
                  <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 event-date">29<br/><span
                    className="month">SEP</span></div>
                  <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 event-info">
                    <div className="event-title">Top 5 Vòng Chung Kết Giải Thưởng Thanh Niên Sáng Tạo 2019</div>
                    <div className="event-text">
                      <p>Hear.Us.Now sẽ tham gia phản biện tại vòng chung kết Giải Thưởng Thanh Niên Sáng Tạo 2019 diễn ra tại Hà Nội, cùng 5 dự án xã hội xuất sắc khác.</p>
                    </div>
                    <p><a href="#" target="_blank" className="dark light-text">Chi Tiết</a>
                    </p>
                  </div>
                </div>
                <div className="event-item">
                  <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 event-date">26<br/><span
                    className="month">OCT</span></div>
                  <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10 event-info">
                    <div className="event-title">Chương trình Rút Ngắn Khoảng Vòng tài trợ 2/2019</div>
                    <div className="event-text">
                      <p>Hear.Us.Now sẽ tham gia thuyết trình vòng tại trợ 2/2019 chương trình Narrow The Gap của Trung tâm Hỗ trợ Phát triển Cộng đồng LIN.</p>
                    </div>
                    <p><a href="https://www.facebook.com/watch/?v=2682334325327570" target="_blank" className="dark light-text">Chi Tiết</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container center-button">
          <button className="btn btn-danger btn-lg rds btn_donate btn_join" type="button" id="btn_join btn_solution">Xem thêm tin tức</button>
        </div>
      </section>
    );
  }
}

export default News;
