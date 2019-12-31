import React from 'react';
import PropTypes from 'prop-types';
import './PjGraphics.scss';
import Title from '../../components/Title';
import BackButton from '../../components/BackButton';

class PjGraphics extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className='page'>
      <BackButton history={this.props.history}/>
      <Title title="PJ Graphics" />
    </div>
    );
  }
};

PjGraphics.defaultProps = {

};

PjGraphics.propTypes = {

};

export default PjGraphics;
