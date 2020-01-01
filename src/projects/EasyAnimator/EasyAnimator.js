import React from 'react';
import PropTypes from 'prop-types';
import './EasyAnimator.scss';
import Title from '../../components/Title';
import BackButton from '../../components/BackButton';
import BigLink from '../../components/BigLink';
import Preview from '../../media/project-media/easy-animator.svg';
import LockedProject from '../../components/LockedProject';

class EasyAnimator extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className='page'>
      <BackButton history={this.props.history}/>
      <Title title="The Easy Animator" />
      <div className="page-description">
        <p>A complex animator software which takes textual instructions as an input and outputs a working visual animation. Coded in Java with the Swing Library, this software can produce a textual description of the animation, an interactive animation, or an svg animation per the user's preference. This project was completed in collaboration with Abigail Hodge.</p>
      </div>
      <a href={Preview} target="_blank" className="page-image-wrapper"><img src={Preview}/></a>
      <div className="page-description no-top-border">
        <p>An svg animation produced using the Easy Animator</p>
      </div>
      <LockedProject/>
    </div>
    );
  }
};

EasyAnimator.defaultProps = {

};

EasyAnimator.propTypes = {

};

export default EasyAnimator;
