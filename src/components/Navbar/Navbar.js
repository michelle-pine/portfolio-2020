import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.scss';
import logo from '../../media/logo2.png';
import { Link, NavLink } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }

  isActive(match, location) {
    if (!match) {
      return false;
    }

    return match.url === "/";
  }

  renderTopbar() {

  }

  render() {
    return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          <Link to="/"><img src={logo} alt="Michelle Pine"/></Link>
        </div>
        <ul className="navbar-links">
          <li><NavLink isActive={this.isActive} activeClassName="active" className="navbar-link" to="/">projects</NavLink></li>
          <li><NavLink activeClassName="active" className="navbar-link" to="/about">about</NavLink></li>
          <li><NavLink activeClassName="active" className="navbar-link" to="/contact">contact</NavLink></li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul className="navbar-social-media">
          <li><a className="navbar-link github" href="https://github.com/michelle-pine"><i className="fa fa-github"></i><span className="sr-only">Github</span></a></li>
          <li><a className="navbar-link linkedin" href="https://www.linkedin.com/in/michelle-pine"><i className="fa fa-linkedin"></i><span className="sr-only">LinkedIn</span></a></li>
        </ul>
      </div>
    </nav>
    );
  }
};

Navbar.defaultProps = {

};

Navbar.propTypes = {

};

export default Navbar;

