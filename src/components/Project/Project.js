import React from 'react';
import PropTypes from 'prop-types';
import './Project.scss';
import { Link } from 'react-router-dom';
import ExternalLink from '../ExternalLink';

class Project extends React.Component {
  constructor(props) {
    super(props)
  }

  getUrl() {
    if (this.props.redirect) {
      return this.props.url;
    }
    else {
      return `/projects/${this.props.url}`;
    }
  }

  render() {
    const Tag = this.props.redirect ? ExternalLink : Link;
    const link = this.props.redirect ? this.props.url : `/projects/${this.props.url}`;
    return (
      <Tag className="project" to={link} target={this.props.redirect ? "_blank" : null}>
        <div className="project-image" style={{backgroundImage: `url(${this.props.image})`}}>
        </div>
        <div className="project-info">
          <h3 className="project-title">{this.props.title}</h3>
          <div className="project-year"><span className="sr-only">Year Produced: </span> {this.props.year}</div>
          <p className="project-description">{this.props.description}</p>
        </div>
      </Tag>
    );
  }
};

Project.defaultProps = {

};

Project.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  redirect: PropTypes.bool,
};

export default Project;
