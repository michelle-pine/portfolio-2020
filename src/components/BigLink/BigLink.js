import React from 'react';
import PropTypes from 'prop-types';
import './BigLink.scss';

class BigLink extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const arrow = this.props.locked ? null :         <div className="big-link-arrow"><i className="fa fa-chevron-right"></i></div>;
    return (
      <a tabIndex={!this.props.locked ? "0" : null} onClick={this.props.onClick} className={`big-link ${this.props.locked ? "locked" : "unlocked"}`} target="_blank" href={this.props.to}>
        <div className="big-link-icon"><i className={`fa ${this.props.icon}`}></i></div>
        <div className="big-link-text">{this.props.text}</div>
        {arrow}
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
  locked: PropTypes.bool,
  onClick: PropTypes.func,
};

export default BigLink;
