import React, {Component} from 'react';

class Solution extends Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  render() {
    return (
      <section id="solutions">
        <div className="container">
          <div className="section-title">
            <h2 className="dark-bg">Giải Pháp Của HUN</h2>
          </div>
          <div className="row">
            <div className="column-white column-30-width">
              <p className="solution-title">Giải Pháp Giáo Dục</p>
              <p className="solution-description">Xây dựng hệ thống giáo theo chương trình của Bộ Giáo dục và Đào tạo,
                tiếng Anh ở trình độ A2 theo Khung châu Âu (CEFR), Tin học trình độ Chứng chỉ gia. Bài học được giảng
                dạy bởi các giáo viên được HUN trang bị Ngôn Ngữ Ký Hiệu và các hình thức học sinh động sử dụng CNTT
                (e-learning, blended learning). </p>

            </div>
            <div className="column-white column-30-width">
              <p className="solution-title">Giải Pháp Kỹ Năng</p>
              <p className="solution-description">Kết hợp với các tổ chức là các đối tác phi chính phủ về giáo dục và
                các chuyên gia trong các lĩnh vực khác nhau thực hiện các buổi workshop như kỹ năng mềm như sơ cấp
                cứu, giáo dục giới tính,… cung cấp kiến thức và thực hành cho nhóm đối tượng trẻ khiếm thính.</p>
            </div>
            <div className="column-white column-30-width">
              <p className="solution-title">Giải Pháp Nghề Nghiệp</p>
              <p className="solution-description">HUN đang kết hợp thực hiện chương trình hướng nghiệp trên các lĩnh
                vực : hội họa (xưởng vẽ Queen Art của Thạc sĩ mỹ thuật Đỗ Quyên, IT (Adobe Photoshop/Illustrator và
                làm bánh (Bread and Smiles).</p>
            </div>
          </div>
        </div>
        
      </section>
    );
  }
}

export default Solution;
