import React, {Component} from 'react';

class Goal extends Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  render() {
    return (
      <section id="goals">
        <div className="container">
          <div className="section-title">
            <h2 className="dark-bg">Mục tiêu của HUN trong 2019-2020</h2>
          </div>
          <div className="row">
            <div className="column-white column-30-width">
              <div className="goal-icon">
                <i className="fa fa-line-chart fa-5x achievement-icon"></i>
              </div>
              <p className="solution-title">Mô hình tài chính bền vững</p>
              <p className="solution-description">Xây dựng hệ thống kêu gọi và quản lý các nguồn đóng góp, cùng với mô hình kinh doanh phi lợi nhuận bền vững giúp HUN xây dựng chương trình giáo dục hiệu quả nhất.</p>
            </div>
            <div className="column-white column-30-width">
              <div className="goal-icon">
                <i className="fa fa-university fa-5x achievement-icon"></i>
              </div>
              <p className="solution-title">Hoàn thiện mô hình giáo dục</p>
              <p className="solution-description">Tiếp tục cải tiến mô hình giáo dục phù hợp với học sinh khiếm thính, kết hợp với CNTT để lan toả ảnh hưởng, với 3 tiêu chí (effective, accessible, effective). </p>
            </div>
            <div className="column-white column-30-width">
              <div className="goal-icon">
                <i className="fa fa-graduation-cap f fa-5x achievement-icon"></i>
              </div>
              <p className="solution-title">Đào tạo hướng nghiệp</p>
              <p className="solution-description">Phối hợp cùng các doanh nghiệp đào tạo và đảm bảo nghề nghiệp ổn định và phù hợp cho người khiếm thính, cùng các kỹ năng mềm giúp họ nhanh chóng hoà nhập với cộng đồng. </p>
              <p className="solution-description"></p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Goal;
