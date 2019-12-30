import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import city from '../../media/city.svg';
import logo from '../../media/logo_1.png'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className="header">
      <h1 className="sr-only">Michelle Pine</h1>
      <button className="down-button"><span className="sr-only">Scroll Down</span><i className="fa fa-chevron-down"></i></button>
      <div className="header-city"></div>
    </div>
    );
  }
};

Header.defaultProps = {

};

Header.propTypes = {

};

export default Header;
