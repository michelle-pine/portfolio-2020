import React from 'react';
import PropTypes from 'prop-types';
import './MazeGame.scss';
import Title from '../../components/Title';
import BackButton from '../../components/BackButton';

class MazeGame extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className='page'>
      <BackButton history={this.props.history}/>
      <Title title="The Maze Game" />
    </div>
    );
  }
};

MazeGame.defaultProps = {

};

MazeGame.propTypes = {

};

export default MazeGame;
