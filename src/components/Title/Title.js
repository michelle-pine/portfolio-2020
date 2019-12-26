import React from 'react';
import PropTypes from 'prop-types';
import './Title.scss';

class Title extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <h2 className="title">{this.props.title}</h2>
    );
  }
};

Title.defaultProps = {

};

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
