import React from 'react';
import PropTypes from 'prop-types';
import './FearlessFlight.scss';
import Title from '../../components/Title';
import BackButton from '../../components/BackButton';

class FearlessFlight extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className='page'>
      <BackButton history={this.props.history}/>
      <Title title="Fearless Flight" />
    </div>
    );
  }
};

FearlessFlight.defaultProps = {

};

FearlessFlight.propTypes = {

};

export default FearlessFlight;
