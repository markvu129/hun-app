import React, { Component } from 'react';

class Timeline extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };


  }

  componentDidMount() {

  }


  render() {
    return(
      <section id="project-timeline">
          <div className="container">
            <div className="row">
              <div className="project-timeline-title">
                  <h2>Chặng đường của Hear.Us.Now</h2>
              </div>
              <ul className="timeline">
                  <li>
                    <div className="timeline-badge"><i className="glyphicon glyphicon-check"></i></div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4 className="timeline-title">Tháng 1/2015</h4>
                      </div>
                      <div className="timeline-body">
                        <p>Dự án được thành lập với sự hợp tác của Everest Education và Global Shapers HCMC.</p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-badge warning"><i className="glyphicon glyphicon-credit-card"></i></div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4 className="timeline-title">Tháng 9/2015</h4>
                      </div>
                      <div className="timeline-body">
                        <p>Mở rộng lớp tiếng Anh tại trường Khiếm thính Anh Minh với 30 học sinh cấp 2.</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-badge danger"><i className="glyphicon glyphicon-credit-card"></i></div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4 className="timeline-title">Tháng 11/2015</h4>
                      </div>
                      <div className="timeline-body">
                        <p>Được Tổng Cty Cơ khí GTVT SAMCO tài trợ, tổ chức lớp Thiết kế Đồ họa cho 26 học sinh & chương trình Bơi lội cho cho 21 học sinh cấp 2 trường Anh Minh.</p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-badge"></div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4 className="timeline-title">Tháng 6/2016</h4>
                      </div>
                      <div className="timeline-body">
                        <p>Dạy tiếng Anh cho 3 lớp 6,7,9 ở trường Anh Minh. Dạy người điếc trưởng thành</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-badge info"><i className="glyphicon glyphicon-floppy-disk"></i></div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4 className="timeline-title">Tháng 5/2017</h4>
                      </div>
                      <div className="timeline-body">
                        <p>10 em lớp 9 tốt nghiệp với số điểm tuyệt đối.</p>
                        <p></p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-panel">
                      <div className="timeline-body">
                        <p>Thắng giải nhất chương trình Narrow the gap do Lin Center tổ chức</p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-badge success"><i className="glyphicon glyphicon-thumbs-up"></i></div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4 className="timeline-title">Tháng 12/2017</h4>
                      </div>
                      <div className="timeline-body">
                        <p>Xây dựng hệ thống bài giảng Tiếng Anh trực tuyến cho người khiếm thính trên YouTube.</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-badge danger"><i className="glyphicon glyphicon-credit-card"></i></div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4 className="timeline-title">Tháng 7/2018</h4>
                      </div>
                      <div className="timeline-body">
                        <p>Dự án giảng dạy 7 lớp tại trường Anh Minh với số học sinh nhân đôi.</p></div>
                    </div>
                  </li>
              </ul>
            </div>
        </div>
      </section>
    );
  }
}

export default Timeline;
