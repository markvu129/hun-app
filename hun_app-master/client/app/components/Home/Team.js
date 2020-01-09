import React, { Component } from 'react';

class Team extends Component {
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
      <section id="meettheteam" className="dark bg">
        <div className="container">
          <div className="section-title team-title" style={{backgroundImage: "url("+line+")"}}>
            <h2 className="color-bg">Đội ngũ Hear.Us.Now</h2>
          </div>
          <div className="at-grid" data-column="4">
            <div className="at-column">
              <div className="at-user">
                <div className="at-user__avatar member_img"><img src={require('../../../public/assets/img/images/team/thinh.jpg')}/>
                </div>
                <div className="at-user__name">Phạm Hữu Thịnh</div>
                <div className="at-user__title">Quản Lý Dự Án </div>
                <ul className="at-social">
                  <li className="at-social__item"><a href="https://www.facebook.com/hthinh.pham09" target="_blank">
                    <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z"
                        fill-fillrule="evenodd"></path>
                    </svg>
                  </a></li>
                  <li className="at-social__item"><a href="">
                    <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z"
                        fillRule="evenodd"></path>
                    </svg>
                  </a></li>
                </ul>
              </div>
            </div>
            <div className="at-column">
              <div className="at-user">
                <div className="at-user__avatar member_img"><img
                  src={require('../../../public/assets/img/images/team/tran.jpg')}/></div>
                <div className="at-user__name">Huỳnh Nguyễn Bảo Trân</div>
                <div className="at-user__title">Quản Lý Truyền Thông</div>
                <ul className="at-social">
                  <li className="at-social__item"><a href="https://www.facebook.com/tran.huynhnguyenbao" target="_blank">
                    <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z"
                        fillRule="evenodd"></path>
                    </svg>
                  </a></li>
                  <li className="at-social__item"><a href="">
                    <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z"
                        fillRule="evenodd"></path>
                    </svg>
                  </a></li>
                </ul>
              </div>
            </div>
            <div className="at-column">
              <div className="at-user">
                <div className="at-user__avatar member_img"><img
                  src={require('../../../public/assets/img/images/team/hoang_anh.jpg')}/>
                </div>
                <div className="at-user__name">Lê Nữ Hoàng Anh</div>
              <div className="at-user__title">Quản Lý Học Thuật</div>
                <ul className="at-social">
                  <li className="at-social__item"><a href="https://www.facebook.com/nuhoanganh.le" target="_blank">
                    <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z"
                        fillRule="evenodd"></path>
                    </svg>
                  </a></li>
                  <li className="at-social__item"><a href="">
                    <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z"
                        fillRule="evenodd"></path>
                    </svg>
                  </a></li>
                </ul>
              </div>
            </div>

            <div className="at-column">
              <div className="at-user">
                <div className="at-user__avatar member_img"><img
                  src={require('../../../public/assets/img/images/team/minh.jpg')}/></div>
                <div className="at-user__name">Vũ Xuân Minh</div>
                <div className="at-user__title">Quản Lý Công Nghệ</div>
                <ul className="at-social">
                  <li className="at-social__item"><a href="https://www.facebook.com/xuanminhvu129" target="_blank">
                    <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z"
                        fillRule="evenodd"></path>
                    </svg>
                  </a></li>
                  <li className="at-social__item"><a href="https://www.linkedin.com/in/mark-vu-b5b628103/" target="_blank">
                    <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z"
                        fillRule="evenodd"></path>
                    </svg>
                  </a></li>
                </ul>
              </div>
            </div>
          </div>


          <div className="section-title advisor-title">
            <h2 className="color-bg">Ban Cố Vấn</h2>
          </div>

          <div className="at-grid" data-column="3">
            <div className="at-column">
              <div className="at-user">
                <div className="at-user__avatar member_img"><img
                  src={require('../../../public/assets/img/images/team/hieu.jpg')}/></div>
                <div className="at-user__name">Lê Đình Hiếu</div>
                <div className="at-user__title">Founder. Forbes Vietnam Under 30</div>
                <ul className="at-social">
                  <li className="at-social__item"><a href="https://www.facebook.com/pianistLDH" target="_blank">
                    <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z"
                        fillRule="evenodd"></path>
                    </svg>
                  </a></li>
                  <li className="at-social__item"><a href="https://www.linkedin.com/in/hieudinhlevn/" target="_blank">
                    <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z"
                        fillRule="evenodd"></path>
                    </svg>
                  </a></li>
                </ul>
              </div>
            </div>

            <div className="at-column">
              <div className="at-user">
                <div className="at-user__avatar member_img"><img
                  src={require('../../../public/assets/img/images/team/oanh.jpg')}/></div>
                <div className="at-user__name">Đoàn Thị Kiều Oanh</div>
                <div className="at-user__title">Giảng Viên Đại Học Văn Lang</div>
              </div>
            </div>

            <div className="at-column">
              <div className="at-user">
                <div className="at-user__avatar member_img"><img
                  src={require('../../../public/assets/img/images/team/nam.jpg')}/></div>
                <div className="at-user__name">Bùi Khắc Nam</div>
                <div className="at-user__title">CEO MAX Education và Học Viện GAP</div>
              </div>
            </div>
          </div>

          <div className="section-title teacher-title">
            <h2 className="color-bg">Giáo viên</h2>
          </div>

          <div className="at-grid" data-column="3">
          <div className="at-column">
            <div className="at-user">
              <div className="at-user__avatar member_img"><img
                src={require('../../../public/assets/img/images/team/ngoc.jpg')}/></div>
              <div className="at-user__name">Đỗ Như Ngọc</div>
              <div className="at-user__title">Giáo Viên Tiếng Anh</div>
            </div>
          </div>

          <div className="at-column">
            <div className="at-user">
              <div className="at-user__avatar member_img"><img
                src={require('../../../public/assets/img/images/team/huy.jpg')}/></div>
              <div className="at-user__name">Huỳnh Nguyễn Thanh Huy</div>
              <div className="at-user__title">Giáo Viên Tiếng Anh</div>
            </div>
          </div>

          <div className="at-column">
            <div className="at-user">
              <div className="at-user__avatar member_img"><img
                src={require('../../../public/assets/img/images/team/quynh.jpg')}/></div>
              <div className="at-user__name">Nguyễn Thị Quỳnh</div>
              <div className="at-user__title">Giáo Viên Tiếng Anh</div>
            </div>
          </div>

          <div className="at-column">
            <div className="at-user">
              <div className="at-user__avatar member_img"><img
                src={require('../../../public/assets/img/images/team/dung.jpg')}/></div>
              <div className="at-user__name">Lại Thuỳ Dung</div>
              <div className="at-user__title">Giáo Viên Tiếng Anh</div>
            </div>
          </div>

          <div className="at-column">
            <div className="at-user">
              <div className="at-user__avatar member_img"><img
                src={require('../../../public/assets/img/images/team/thi.jpg')}/></div>
              <div className="at-user__name">Lê Thi Trúc Thi</div>
              <div className="at-user__title">Giáo Viên Tiếng Anh</div>
            </div>
          </div>
          <div className="at-column">
            <div className="at-user">
              <div className="at-user__avatar member_img"><img
                src={require('../../../public/assets/img/images/team/phuong_thao.jpg')}/></div>
              <div className="at-user__name">Phạm Phương Thảo</div>
              <div className="at-user__title">Giáo Viên Tiếng Anh</div>
            </div>
          </div>
          <div className="at-column">
            <div className="at-user">
              <div className="at-user__avatar member_img"><img
                src={require('../../../public/assets/img/images/team/sang.jpg')}/></div>
              <div className="at-user__name">Cao Nguyễn Sang</div>
              <div className="at-user__title">Giáo Viên Tiếng Anh</div>
            </div>
          </div>
          </div>


        </div>
      </section>
    );
  }
}

export default Team;
