import React, { Component } from 'react';

class Story extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };


  }

  componentDidMount() {

  }

  render() {
    return (
      <section id="about">
        <div className="container">
          <div className="section-title">
            <h2 className="dark-bg">Câu Chuyện Hear.Us.Now</h2>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <h3>Về Hear.Us.Now</h3>
              <h4>Thành lập vào năm 2014<br/></h4>
              <br/>
              <p>Được ấp ủ và hình thành bởi những con người yêu giáo dục, Hear.Us.Now là dự án tiên phong trong việc
                giảng dạy và đào tạo hướng nghiệp cho cộng đồng người khiếm thính tại Việt Nam. Trở thành người bạn đồng
                hành trong hành trình trưởng thành và phát triển nhân cách cùng các em là sứ mệnh mà chúng tôi luôn theo
                đuổi. Những trải nghiệm, kiến thức các em nhận được từ dự án sẽ là hành trang vô giá, để biết rằng các
                em không hề đơn độc.</p>
              <a href="/our-story"><button className="btn btn-danger btn-lg rds btn_donate btn_join" type="button" id="btn_join">Xem thêm các câu chuyện</button></a>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <h3>Sứ mệnh</h3>
              <div className="ourpoints">
                <div className="row point">
                  <div className="icon-space">
                    <i className="fa fa-book fa-2x mission_1"></i>
                  </div>
                  <div className="text-space text">
                    <h4 className="mission_1">Rút ngắn khoảng cách giáo dục</h4>
                    <p>Hear.Us.Now nỗ lực không ngừng để thu hẹp khoảng cách giáo dục và nghề nghiệp cho các bạn Điếc và Khiếm Thính, giúp các bạn vượt qua rào cản khuyết tật để theo đuổi ước mơ.</p>
                  </div>
                </div>
                <div className="row point">
                  <div className="icon-space">
                    <i className="fa fa-envelope-open fa-2x mission_2"></i>
                  </div>
                  <div className="text-space text">
                    <h4 className="mission_2">Minh bạch tài chính</h4>
                    <p>Mọi khoản tiền đầu tư vào Hear.Us.Now sẽ được đưa vào xây dựng chương trình đào tạo cho các em học sinh. Chúng tôi làm việc cùng với nhà tài trợ để giúp họ hiệu rõ số tiền đóng góp được sử dụng như thế nào.</p>
                  </div>
                </div>
                <div className="row point">
                  <div className="icon-space">
                    <i className="fa fa-heart fa-2x mission_3"></i>
                  </div>
                  <div className="text-space text">
                    <h4 className="mission_3">Mãi mãi phi lợi nhuận</h4>
                    <p>Với mục tiêu phát triển dự án xã hội bền vững, Hear.Us.Now sẽ mãi là tổ chức phi lợi nhuận. Tất cả khoản tiền thu được sẽ được tái đầu tư vào các em học sinh. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Story;
