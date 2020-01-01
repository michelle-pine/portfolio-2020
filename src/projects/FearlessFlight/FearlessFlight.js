import React from 'react';
import PropTypes from 'prop-types';
import './FearlessFlight.scss';
import Title from '../../components/Title';
import BackButton from '../../components/BackButton';
import BigLink from '../../components/BigLink';
import Preview2 from '../../media/project-media/fearless-flight/2.gif';
import Preview3 from '../../media/project-media/fearless-flight/3.png';
import Preview4 from '../../media/project-media/fearless-flight/4.png';

class FearlessFlight extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className='page'>
      <BackButton history={this.props.history}/>
      <Title title="Fearless Flight" />
      <div className="page-description">
        <p>Boldly soar across the sky, dodging obstacles and shooting down adversaries to reach your goals! Fearless Flight is the fun and exciting game for the fighter pilot in all of us!</p>
      </div>
      <BigLink onClick={() => {window.open('https://michelle-pine.github.io/FearlessFlight/','pagename','resizable,height=800,width=600'); return false;}} text="Play Game" icon="fa-gamepad"/>
      <BigLink to="https://github.com/michelle-pine/FearlessFlight" text="View Code" icon="fa-github"/>
      <a href={Preview2} target="_blank" className="page-image-wrapper no-border"><img src={Preview2}/></a>
      <a href={Preview3} target="_blank" className="page-image-wrapper no-border"><img src={Preview3}/></a>
      <a href={Preview4} target="_blank" className="page-image-wrapper no-border"><img src={Preview4}/></a>
    </div>
    );
  }
};

FearlessFlight.defaultProps = {

};

FearlessFlight.propTypes = {

};

export default FearlessFlight;
