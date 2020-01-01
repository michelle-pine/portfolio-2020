import React from 'react';
import PropTypes from 'prop-types';
import './ForbiddenIsland.scss';
import Title from '../../components/Title';
import BackButton from '../../components/BackButton';
import BigLink from '../../components/BigLink';
import Preview from '../../media/project-media/forbidden-island.png';
import LockedProject from '../../components/LockedProject';

class ForbiddenIsland extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className='page'>
      <BackButton history={this.props.history}/>
      <Title title="The Forbidden Island" />
      <div className="page-description">
        <p>A maze generator/solver game that utilizes Kruskal's Algorithm, breadth-first search, and depth-first search. Developed in Java.</p>
      </div>
      <a href={Preview} target="_blank" className="page-image-wrapper no-border"><img src={Preview}/></a>
      <LockedProject/>
    </div>
    );
  }
};

ForbiddenIsland.defaultProps = {

};

ForbiddenIsland.propTypes = {

};

export default ForbiddenIsland;
