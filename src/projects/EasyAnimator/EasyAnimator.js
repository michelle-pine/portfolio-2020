import React from 'react';
import PropTypes from 'prop-types';
import './EasyAnimator.scss';
import Title from '../../components/Title';
import BackButton from '../../components/BackButton';

class EasyAnimator extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className='page'>
      <BackButton history={this.props.history}/>
      <Title title="The Easy Animator" />
    </div>
    );
  }
};

EasyAnimator.defaultProps = {

};

EasyAnimator.propTypes = {

};

export default EasyAnimator;
