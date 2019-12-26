import React from 'react';
import PropTypes from 'prop-types';
import './About.scss';
import Title from '../../components/Title';


class About extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className="about-page">
      <Title title="About" />
    </div>
    );
  }
};

About.defaultProps = {

};

About.propTypes = {

};

export default About;
