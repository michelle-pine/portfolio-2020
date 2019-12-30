import React from 'react';
import PropTypes from 'prop-types';
import './Projects.scss';

import Title from '../../components/Title';
import Project from '../../components/Project';
import projects from '../../data/projects';
import michelle from '../../media/michelle1.jpeg';
import MultiSelect from "@khanacademy/react-multi-select";

const yearOptions = [
  {label: "2020", value: 2020},
  {label: "2019", value: 2019},
  {label: "2018", value: 2018},
  {label: "2017", value: 2017},
  {label: "2016", value: 2016},
]

const typeOptions = [
  {label: "design", value: "design"},
  {label: "coding", value: "coding"},
  {label: "video", value: "video"},
  {label: "writing", value: "writing"},
]

class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      yearSelected: [],
      typeSelected: [],
      searchValue: "",
      displayedProjects: projects,
    }
    this.onTypeSelect = this.onTypeSelect.bind(this);
    this.onYearSelect = this.onYearSelect.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onYearSelect(selected) {
    this.setState({yearSelected: selected});
  }

  onTypeSelect(selected) {
    this.setState({typeSelected: selected});
  }

  onSearch(e) {
    const search = e.target.value;
    this.setState({searchValue: search});
  }

  hasAnyMatch(typeSelected, proj) {
    let match = false;
    proj.type.map(function(value) { match = match || typeSelected.indexOf(value) !== -1})
    return match;
  }

  matchesSearch(project, searchValue) {
    let specialChars = "!@#$^&%*()+=-[]\/{}|:<>?,.";

    let nameUpper = project.title.toUpperCase();
    let descriptionUpper = project.description.toUpperCase();
    let string2 = searchValue.toUpperCase();
    for (var i = 0; i < specialChars.length; i++) {
      string2 = string2.replace(new RegExp("\\" + specialChars[i], "gi"), "");
    }
    let regex = new RegExp( string2, 'g' );
    let matchesName = nameUpper.match(regex);
    let matchesDescription = descriptionUpper.match(regex);
    return matchesName || matchesDescription;
  }

  filterProjects(yearSelected, typeSelected, searchValue) {
    return projects.filter(function(proj) {
      return (yearSelected.length === 0 || yearSelected.indexOf(proj.year) !== -1)
        && (typeSelected.length === 0 || this.hasAnyMatch(typeSelected, proj))
        && (!searchValue || searchValue.length === 0 || this.matchesSearch(proj, searchValue));
    }.bind(this));
  }

  renderProjects() {
    const filteredProjects = this.filterProjects(this.state.yearSelected, this.state.typeSelected, this.state.searchValue);
    return filteredProjects.map(function(proj) {
      return <Project 
        project={proj}
      />
    });
  }

  render() {
    const {yearSelected, typeSelected} = this.state;

    return (
    <div className="projects-page page">
      <Title title="Projects" />
      <div className="info-section">
        <div style={{backgroundImage: `url(${michelle})`}} className="info-photo"/>
        <div className="info-description">
          Michelle Pine is a student, designer, developer, and writer specializing in client-facing technology. 
        </div>
      </div>
      <div className="projects-filter">
        <form className="searchbox">
          <label htmlFor="search-box" className="sr-only">Search</label>
          <input id="search-box" onChange={this.onSearch} name="searchbox" type="text" placeholder="Search..."/>
          <i className="fa fa-search search-icon"></i>
        </form>
        <div className="year-filter">
          <MultiSelect
            options={yearOptions}
            selected={yearSelected}
            disableSearch
            onSelectedChanged={this.onYearSelect}
            overrideStrings={{
              selectSomeItems: "Year...",
              allItemsAreSelected: "All Years",
              selectAll: "Select All",
              search: "Search",
            }}
          />
        </div>
        <div className="type-filter">
          <MultiSelect
            options={typeOptions}
            disableSearch
            selected={typeSelected}
            onSelectedChanged={this.onTypeSelect}
            overrideStrings={{
              selectSomeItems: "Project Type...",
              allItemsAreSelected: "All Project Types",
              selectAll: "Select All",
              search: "Search",
            }}
          />
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
