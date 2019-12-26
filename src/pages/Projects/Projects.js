import React from 'react';
import PropTypes from 'prop-types';
import './Projects.scss';

import Title from '../../components/Title';
import Project from '../../components/Project';
import projects from '../../data/projects';

class Projects extends React.Component {
  constructor(props) {
    super(props)
  }
  
  renderProjects() {
    return projects.map(function(proj) {
      return <Project 
        title={proj.title} 
        description={proj.description} 
        url={proj.url}
        image={proj.image}
      />
    });
  }

  render() {
    return (
    <div className="projects-page">
      <Title title="Projects" />
      <div className="projects-container">
        {this.renderProjects()}
      </div>
    </div>
    );
  }
};

Projects.defaultProps = {

};

Projects.propTypes = {

};

export default Projects;
