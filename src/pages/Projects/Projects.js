import React from 'react';
import PropTypes from 'prop-types';
import './Projects.scss';

import Title from '../../components/Title';

class Projects extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className="projects-page">
      <Title title="Projects" />
    </div>
    );
  }
};

Projects.defaultProps = {

};

Projects.propTypes = {

};

export default Projects;
