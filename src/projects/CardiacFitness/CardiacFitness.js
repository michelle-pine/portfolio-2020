import React from 'react';
import PropTypes from 'prop-types';
import './CardiacFitness.scss';
import Title from '../../components/Title';
import BackButton from '../../components/BackButton';
import BigLink from '../../components/BigLink';
import CF1 from '../../media/project-media/cf-screenshot1.png';
import CF2 from '../../media/project-media/cf-screenshot2.png';


class CardiacFitness extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className='page'>
      <BackButton history={this.props.history}/>
      <Title title="Cardiac Fitness" />
      <div className="page-description">
        <p>In 2018, while I was on co-op at Boston Children's Hospital, I helped develop the front-end of a fitness application intended to help children with heart problems improve their fitness! This project was mocked-up in Balsamiq, prototyped with Invision and HTML, and developed in Angular.</p>
      </div>
      <div className="side-by-side-image">
        <a href={CF1} target="_blank" className="page-image-wrapper"><img alt="" src={CF1}/></a>
        <a href={CF2} target="_blank" className="page-image-wrapper"><img alt="" src={CF2}/></a>
      </div>
      <BigLink target="_blank" to="https://michelle-pine.github.io/cf/" text="View Demo" icon="fa-laptop"/>
    </div>
    );
  }
};

CardiacFitness.defaultProps = {

};

CardiacFitness.propTypes = {

};

export default CardiacFitness;
