import React from 'react';
import PropTypes from 'prop-types';
import './Projects.scss';

import Title from '../../components/Title';
import Project from '../../components/Project';
import projects from '../../data/projects';
import michelle from '../../media/michelle1.jpeg';

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
        year={proj.year}
        image={proj.image}
        redirect={proj.redirect}
      />
    });
  }

  render() {
    return (
    <div className="projects-page page">
      <Title title="Projects" />
      <div className="info-section">
        <div style={{backgroundImage: `url(${michelle})`}} className="info-photo"/>
        <div className="info-description">
          Michelle Pine is a student, designer, developer, and writer specializing in client-facing technology. 
        </div>
      </div>
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
