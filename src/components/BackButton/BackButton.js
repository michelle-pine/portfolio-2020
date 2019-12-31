import React from 'react';
import PropTypes from 'prop-types';
import './BackButton.scss';

class BackButton extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <button
        className="back-button"
        onClick={this.props.history.goBack}>
          <i className="fa fa-chevron-left"></i>Back
      </button>
    );
  }
};

BackButton.defaultProps = {

};

BackButton.propTypes = {
  history: PropTypes.object,
};

export default BackButton;
