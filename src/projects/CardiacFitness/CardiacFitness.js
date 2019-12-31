import React from 'react';
import PropTypes from 'prop-types';
import './CardiacFitness.scss';
import Title from '../../components/Title';
import BackButton from '../../components/BackButton';

class CardiacFitness extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className='page'>
      <BackButton history={this.props.history}/>
      <Title title="Cardiac Fitness" />
    </div>
    );
  }
};

CardiacFitness.defaultProps = {

};

CardiacFitness.propTypes = {

};

export default CardiacFitness;
