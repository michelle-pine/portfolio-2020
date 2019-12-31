import React from 'react';
import PropTypes from 'prop-types';
import './BigLink.scss';

class BigLink extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <a className="big-link" target="_blank" href={this.props.to}>
        <div className="big-link-icon"><i className={`fa ${this.props.icon}`}></i></div>
        <div className="big-link-text">{this.props.text}</div>
        <div className="big-link-arrow"><i className="fa fa-chevron-right"></i></div>
      </a>
    )
  }
};

BigLink.defaultProps = {

};

BigLink.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  to: PropTypes.string,
};

export default BigLink;
