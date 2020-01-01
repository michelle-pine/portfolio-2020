import React from 'react';
import PropTypes from 'prop-types';
import './Experience.scss';

class Experience extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const description = this.props.description ? <div className="experience-description"><p>{this.props.description}</p></div> : null; 
    return (
    <div className="experience">
      <div className="experience-organization">
        <h4>{this.props.organization}</h4>
      </div>
      <div className="experience-position">
        <h5>{this.props.position} ({this.props.year})</h5>
      </div>
      {description}
    </div>
    );
  }
};

Experience.defaultProps = {

};

Experience.propTypes = {

};

export default Experience;
