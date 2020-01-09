import React, {Component} from 'react';
import VolunteerForm from "../../Form/VolunteerForm";
import Auth from "../../../modules/Auth";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.toggle = this.toggle.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.getAuthentication = this.getAuthentication.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);

    this.state = {
      modalVolunteerIsOpen: false,
      modalDonationIsOpen: false,
      modalAuthenticationIsOpen: false,
      isOpen: false,
      userLogin: Auth.isUserAuthenticated()
    };
  }

  componentDidMount() {

  }

  openModal(word) {
    if (word == 'volunteer') {
      this.setState({
        modalVolunteerIsOpen: true
      });
    }
    if (word == 'donation') {
      this.setState({
        modalDonationIsOpen: true
      });
    }
    if (word == 'authentication') {
      this.setState({
        modalAuthenticationIsOpen: true
      });
    }
  }

  closeModal(word) {
    if (word == 'volunteer') {
      this.setState({
        modalVolunteerIsOpen: false
      });
    }
    if (word == 'donation') {
      this.setState({
        modalDonationIsOpen: false
      });
    }
    if (word == 'authentication') {
      this.setState({
        modalAuthenticationIsOpen: false
      });
    }
  }


  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });

  }

  handleDocumentClick(event) {
    event.preventDefault;
    if(this.state.isOpen){
      this.setState({
         isOpen: false
      });
    }
   }

  componentDidUpdate() {
  }

  componentWillMount(){
    var that = this;
    setTimeout(function() {
          that.getAuthentication();
        }, 100);
    document.addEventListener('click', this.handleDocumentClick, true);
  }

  getAuthentication(){
    this.setState({
      userLogin: Auth.isUserAuthenticated()
    });
  }

  render() {
    let tagPath;
    if (this.props.location.includes('/admin')){
      tagPath = 'admin-header'
    }
    else {
      tagPath = 'header'
    }

    return (
      <section id="header" className={tagPath}>
        <Navbar color="light" light expand="md" collapseOnSelect >
          <NavbarBrand href="/"><img src={require('../../../../public/assets/img/images/hun_main_logo.jpg')}
                                     alt="Logo"/></NavbarBrand>
          <NavbarToggler onClick={this.toggle}/>
          <Collapse isOpen={this.state.isOpen} navbar >
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/#about">Câu Chuyện</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#projects">Các Hoạt Động</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#meettheteam">Đội Ngũ</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#newsandevents">Tin Tức</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Shop</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#contacts">Liên Hệ </NavLink>
              </NavItem>
              {this.state.userLogin ? (
                <UncontrolledDropdown setActiveFromChild>
                <DropdownToggle tag="a" className="account-setting" caret>
                  <i className="fa fa-user user-icon" aria-hidden="true"></i>Tài khoản
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem><span className="account-shown">{Auth.getUserData().name}</span></DropdownItem>
                  <DropdownItem divider />
                  <a href="/signout"><DropdownItem>Thoát <i className="fa fa-sign-out exit-icon" aria-hidden="true"></i></DropdownItem></a>
                </DropdownMenu>
              </UncontrolledDropdown>
          ): (<NavItem>
                <NavLink href="/login"> Đăng Nhập</NavLink>
              </NavItem>)}

              <NavItem className="volunteer-tab">
                <NavLink className="highlighted nav-button" onClick={this.openModal.bind(null, 'volunteer')}><span>Tham Gia</span></NavLink>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>

        <VolunteerForm modalIsOpen={this.state.modalVolunteerIsOpen}
                       closeModal={this.closeModal.bind(null, 'volunteer')}/>


      </section>
    );
  }
}

export default NavBar;
