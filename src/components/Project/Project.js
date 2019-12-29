import React from 'react';
import PropTypes from 'prop-types';
import './Project.scss';
import { Link } from 'react-router-dom';


class Project extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <Link className="project" to={this.props.url}>
      <div className="project-image" style={{backgroundImage: `url(${this.props.image})`}}>
      </div>
      <div className="project-info">
        <h3 className="project-title">{this.props.title}</h3>
        <div className="project-year"><span className="sr-only">Year Produced: </span> {this.props.year}</div>
        <p className="project-description">{this.props.description}</p>
      </div>
    </Link>
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
};

export default Project;
