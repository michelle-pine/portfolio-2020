import React from 'react';
import PropTypes from 'prop-types';
import './Project.scss';
import { Link } from 'react-router-dom';
import ExternalLink from '../ExternalLink';

class Project extends React.Component {
  constructor(props) {
    super(props)
  }

  getIcons() {
    return this.props.project.type.map(function(type) {
      let icon = "";
      switch(type) {
        case "design":
          icon = "fa-crop";
          break;
        case "video": 
          icon = "fa-play";
          break;
        case "writing":
          icon = "fa-pencil";
          break;
        default:
          icon = "fa-code";
          break;
      }
      return <div className="project-icon"><div className="sr-only">{type} </div><i className={`fa ${icon}`}></i></div>
    });
  }

  render() {
    const Tag = this.props.project.redirect ? ExternalLink : Link;
    const link = this.props.project.redirect ? this.props.project.url : `/projects/${this.props.project.url}`;
    return (
      <Tag className="project" to={link} target={this.props.project.redirect ? "_blank" : null}>
        <div className="project-image" style={{backgroundImage: `url(${this.props.project.image})`}}>
        </div>
        <div className="project-info">
          <h3 className="project-title">{this.props.project.title}</h3>
          <div className="project-topbar">
            <div className="project-icons">{this.getIcons()}</div>
            <div className="project-year"><span className="sr-only">Year Produced: </span> {this.props.project.year}</div>
          </div>
          <p className="project-description">{this.props.project.description}</p>
        </div>
      </Tag>
    );
  }
};

Project.defaultProps = {

};

Project.propTypes = {
  project: PropTypes.object,
};

export default Project;
