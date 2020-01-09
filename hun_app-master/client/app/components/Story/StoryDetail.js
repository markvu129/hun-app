import React, {Component} from 'react';

class StoryDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {};


  }

  componentDidMount() {

  }

  render() {
    let bg1 = require('../../../public/assets/img/images/news_detail/news_detail_cover.jpg');
    return (
      <div>
        <section id="slider">
          <div className="owl_slider top_slider_wrap">
            <ul className="owl-carousel top_slider">
              <li className="style-3 top-slider-item" style={{backgroundImage: "url(" + bg1 + ")"}} id="voting-slider">
                <div className="contentwrap">
                  <div className="container">
                    <div className="content">
                      <div className="slideheadingwrap">
                        <h2>We empower Vietnamese deaf youths. </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <div className="row">
            <div className="column-50-inline">
              <div className="container">
                <iframe className="news-details-vid" height="315" src="https://www.youtube.com/embed/Nsmz4Vmwx0U"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
              </div>
            </div>
            <div className="column-50-inline">
              <div className="container">
                <iframe className="news-details-vid" height="315" src="https://www.youtube.com/embed/qmct_k15YOM"
                        frameborder="0" frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </section>

        <section className="news-section">
          <div className="container">
            <div className="main-title-box text-center">
              <div className="small-title">News & Blog</div>
              <h2 className="big-title">Câu chuyện Hear.Us.Now</h2>
            </div>
            <div className="row">

              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0ms">
                <div className="news-item">
                  <div className="news_box">
                    <a href="http://www.htv.com.vn/du-an-hear-us-now-day-tieng-anh-cho-nguoi-khiem-thinh" target="blank">
                      <div classname="newsimg"><img className="img-responsive"
                                                  src={require('../../../public/assets/img/images/news_detail/news_detail_1.jpg')} alt=""/></div>
                    </a>
                    <div className="news-content">
                      <div className="news_postdate">
                        <span>Thứ sáu, ngày 10/05/2019</span>
                      </div>
                      <a href="https://vtv.vn/chuyen-dong-24h/le-dinh-hieu-va-du-an-hear-us-now-20190510184239397.htm" target="blank">
                        <h3>Lê Đình Hiếu và dự án Hear Us Now</h3>
                      </a>
                      <p>VTV.vn - Dự án "Hear us now" của Lê Đình Hiếu đã nỗ lực xây dựng nhiều chương trình dạy tiếng Anh cho trẻ khiếm thính.</p>
                      <div className="news_authorinfo">
                        <span><i className="fa fa-user"></i>  <a href="">Nguồn: Chuyển Động 24h - VTV News </a></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0ms">
                <div className="news-item">
                  <div className="news_box">
                    <a href="http://www.htv.com.vn/du-an-hear-us-now-day-tieng-anh-cho-nguoi-khiem-thinh"
                       target="blank">
                      <div className="newsimg"><img className="img-responsive"
                                                    src={require('../../../public/assets/img/images/news_detail/news_detail_2.jpg')}
                                                    alt=""/></div>
                    </a>
                    <div className="news-content">
                      <div className="news_postdate">
                        <span>Thứ tư, ngày 27/03/2019</span>
                      </div>
                      <a href="http://www.htv.com.vn/du-an-hear-us-now-day-tieng-anh-cho-nguoi-khiem-thinh"
                         target="blank">
                        <h3>Dự án "Hear us now" - Dạy tiếng Anh cho người khiếm thính</h3>
                      </a>
                      <p>Với mong muốn mang đến sự bình đẳng giáo dục, dự án "Hear us now" đã nỗ lực xây dựng nhiều chương trình dạy tiếng Anh cho người khiếm thính.</p>
                      <div className="news_authorinfo">
                        <span><i className="fa fa-user"></i>  <a href="">Nguồn: HTV  </a></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0ms">
                <div className="news-item">
                  <div className="news_box">
                    <a href="http://doanthanhnien.vn/tin-tuc/mo-hinh-tinh-nguyen/toa-sang-vi-cong-dong-day-tre-cam-diec-hoc-tieng-anh"
                       target="blank">
                      <div className="newsimg"><img className="img-responsive"
                                                    src={require('../../../public/assets/img/images/news_detail/news_detail_3.jpg')}
                                                    alt=""/></div>
                    </a>
                    <div className="news-content">
                      <div className="news_postdate">
                        <span>Thứ sáu, ngày 15/03/2019</span>
                      </div>
                      <a href="http://doanthanhnien.vn/tin-tuc/mo-hinh-tinh-nguyen/toa-sang-vi-cong-dong-day-tre-cam-diec-hoc-tieng-anh"
                         target="blank">
                        <h3>Tỏa sáng vì cộng đồng: Dạy trẻ câm điếc học tiếng Anh</h3>
                      </a>
                      <p>Một lớp học không có tiếng giảng bài, cũng không có những lời thì thầm trao đổi của học sinh mà lâu lâu chỉ nghe được hai tiếng 'ơ, a'.</p>
                      <div className="news_authorinfo">
                        <span><i className="fa fa-user"></i>  <a href="">Nguồn: Đoàn Thanh Niên  </a></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    );
  }
}

export default StoryDetail;
