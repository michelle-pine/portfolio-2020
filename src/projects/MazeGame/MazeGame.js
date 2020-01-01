import React from 'react';
import PropTypes from 'prop-types';
import './MazeGame.scss';
import Title from '../../components/Title';
import BackButton from '../../components/BackButton';
import BigLink from '../../components/BigLink';
import Preview from '../../media/project-media/maze-game.png';
import LockedProject from '../../components/LockedProject';

class MazeGame extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className='page'>
      <BackButton history={this.props.history}/>
      <Title title="The Maze Game" />
      <div className="page-description">
        <p>Escape the island before it's too late! This arcade game, coded in Java, tests the player's survival skills in a race against time as the waters rise.</p>
      </div>
      <a href={Preview} target="_blank" className="page-image-wrapper no-border"><img src={Preview}/></a>
      <LockedProject/>
    </div>
    );
  }
};

MazeGame.defaultProps = {

};

MazeGame.propTypes = {

};

export default MazeGame;
