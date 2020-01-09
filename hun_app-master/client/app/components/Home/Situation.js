import React, { Component } from 'react';
import SituationChartOne from "../Charts/Situation/SituationChartOne";

class Situation extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };


  }

  componentDidMount() {

  }

  render() {
    return (
      <section id="situation">
        <div className="situation-section">
          <div className="column-50-inline situation-session">
            <h2 className="situation-title">Thực Trạng</h2>
            <div>
              <div className="column-inline-33 situation-chart">
                <SituationChartOne percent={42}/>
                <p className="situation-description">2.6 triệu người điếc và khiếm thính trong số 6.2 triệu người khuyết tật ở Việt Nam.</p>
              </div>
              <div className="column-inline-33 situation-chart">
                <SituationChartOne percent={2}/>
                <p className="situation-description">2% trường tiểu học và THCS có thiết kế phù hợp với học sinh khuyết tật.</p>
              </div>
              <div className="column-inline-33 situation-chart">
                <SituationChartOne percent={1}/>
                <p className="situation-description">1% trong số những người khuyết tật ở Việt Nam có thể học lên bậc Cao Đẳng, Đại Học.</p>
              </div>
            </div>
            <p className="situation-source">Nguồn: Điều Tra Quốc gia về Người Khuyết tật 2016-2017 do Tổng cục Thống kê (Bộ Kế hoạch và Đầu tư) phối hợp với Quỹ Nhi đồng Liên hợp quốc tại Việt Nam (UNICEF)
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Situation;
