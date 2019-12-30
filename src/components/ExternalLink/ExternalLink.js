import React from 'react';
import PropTypes from 'prop-types';
import './ExternalLink.scss';

class ExternalLink extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <a target={this.props.target} className={this.props.className} onClick={this.props.onClick} href={this.props.to}>
      {this.props.children}
    </a>
    );
  }
};

ExternalLink.defaultProps = {
  onClick: () => false,
};

ExternalLink.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  to: PropTypes.string,
  target: PropTypes.string,
};

export default ExternalLink;
