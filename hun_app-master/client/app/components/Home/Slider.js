import React, { Component } from 'react';

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

  }

  componentDidMount() {

  }

  render() {
    let bg1= require('../../../public/assets/img/images/slides/background_1.jpg');
    let bg2= require('../../../public/assets/img/images/slides/background_2.jpg');
    let bg3= require('../../../public/assets/img/images/slides/background_3.jpg');
    let bg4= require('../../../public/assets/img/images/slides/background_4.jpg');
    return (
      <section id="slider">
        <div className="owl_slider top_slider_wrap">
          <ul className="owl-carousel top_slider">
            <li className="style-2 video-intro top-slider-item">
              <div className="contentwrap">
                  <div className="slider_video">
                    <video className="video" id="video1" >
                      <source id="mp4" src={require("../../../public/assets/video/hun_intro.mp4")} type="video/mp4" preload="true"></source>
                    </video>
                    <a className="video-control js-video-control paused" href="#" data-video="video1"></a>
                  </div>
                </div>
            </li>
            <li className="style-2 top-slider-item"  style={{backgroundImage: "url("+bg1+")"}}>
              <div className="contentwrap">
                <div className="container">
                  <div className="content">
                    <div className="slideheadingwrap">
                      <h2>2,5 Triệu Người Điếc Và Khiếm Thính Ở Việt Nam</h2>
                    </div>
                    <div className="description_wrap">
                      <div className="description_wrap">
                        <div className="description hidden-xs">
                          Rào cản ngôn ngữ khiến nhiều trẻ em Điếc và Khiếm thính khó tiếp cận các cơ hội học tập và làm
                          việc.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="style-3 top-slider-item" style={{backgroundImage: "url("+bg2+")"}}>
              <div className="contentwrap">
                <div className="container">
                  <div className="content">
                    <div className="slideheadingwrap">
                      <h2>Bình Đẳng Giáo Dục</h2>
                    </div>
                    <div className="description_wrap">
                      <div className="description hidden-xs">
                        Hear.Us.Now sẽ không ngừng xây dựng nền tảng công nghệ để đem lại
                        bình đẳng giáo dục cho Việt Nam.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="style-1 slider-3 top-slider-item"
                style={{backgroundImage: "url("+bg3+")"}}>
              <div className="contentwrap">
                <div className="container">
                  <div className="content">
                    <div className="slideheadingwrap">
                      <h2>Giáo Dục Là Tương Lai</h2>
                    </div>
                    <div className="description_wrap">
                      <div className="description hidden-xs">
                        Hear.Us.Now khát khao đem lại cơ hội giáo dục và việc làm cho người Điếc và Khiếm Thính.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="style-2 slider-4 top-slider-item"
                style={{backgroundImage: "url("+bg4+")"}}>
              <div className="contentwrap">
                <div className="container">
                  <div className="content">
                    <div className="slideheadingwrap">
                      <h2>Chắp cánh ước mơ</h2>
                    </div>
                    <div className="description hidden-xs">
                      Đội ngũ giảng viên tâm huyết của Hear.Us.Now luôn đồng hành cùng các em Điếc và Khiếm thính, giúp
                      các em xây dựng và theo đuổi ước mơ.
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Slider;
