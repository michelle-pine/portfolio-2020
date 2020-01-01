import React from 'react';
import PropTypes from 'prop-types';
import './LockedProject.scss';
import BigLink from '../../components/BigLink';
import { Link } from 'react-router-dom';

class LockedProject extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div>
      <BigLink locked text="This Project is Locked" icon="fa-lock"/>
      <div className="page-description no-top-border">
        <p>To prevent plagiarism, this project can only be viewed upon <Link to="/contact">request.</Link></p>
      </div>
    </div>
    );
  }
};

LockedProject.defaultProps = {

};

LockedProject.propTypes = {

};

export default LockedProject;
