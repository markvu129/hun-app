import React, {Component} from 'react';
import Posts from './Post/Posts';
import Team from './Member/Team';
import Library from "./Library";
import Projects from "./Project/Projects";
import Users from "./User/Users";
import Donation from "./Donation/Donation";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: 'posts'
    };
    this.setLocation = this.setLocation.bind(this);
    this.renderAdminMain = this.renderAdminMain.bind(this);
  }

  componentDidMount() {
  }

  setLocation(location){
    this.setState({
      location: location
    })
  }

  renderAdminMain(){
    switch(this.state.location) {
      case 'posts':
          return (
            <Posts/>
        );
      case 'team':
        return (
          <Team/>
        );
      case 'library':
        return (
          <Library/>
        );
      case 'projects':
        return (
          <Projects/>
        );
      case 'users':
        return (
          <Users/>
        );
      case 'donation':
        return (
          <Donation/>
        );
      default:
        return (
          <div className="main">
            <div className="hipsum">
              <h1>Hello</h1>
            </div>
          </div>
        );
    }

  }

  render() {
    return (
      <div>
        <div className="header-admin">
          <a href="/" id="menu-action">
            <i className="fa fa-home fa-4x"></i>
          </a>
          <div className="logo">Admin</div>
        </div>

        <div className="sidebar">
          <ul>
            <li onClick={this.setLocation.bind(null, 'posts')}><a href="#"><i className="fa fa-newspaper-o"></i><span>Posts</span></a></li>
            <li onClick={this.setLocation.bind(null, 'library')}><a href="#"><i className="fa fa-picture-o"></i><span>Images</span></a></li>
            <li onClick={this.setLocation.bind(null, 'team')}><a href="#"><i className="fa fa-user-o"></i><span>Team</span></a></li>
            <li onClick={this.setLocation.bind(null, 'projects')}><a href="#"><i className="fa fa-american-sign-language-interpreting"></i><span>Projects</span></a></li>
            <li onClick={this.setLocation.bind(null, 'users')}><a href="#"><i className="fa fa-users"></i><span>Users</span></a></li>
            <li onClick={this.setLocation.bind(null, 'donation')}><a href="#"><i className="fa fa-usd"></i><span>Donation</span></a></li>
          </ul>
        </div>

        {this.renderAdminMain()}

      </div>

    )
  }

}

export default Admin;
