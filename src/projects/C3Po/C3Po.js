import React from 'react';
import PropTypes from 'prop-types';
import './C3Po.scss';
import Title from '../../components/Title';
import BackButton from '../../components/BackButton';

class C3Po extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className='page'>
      <BackButton history={this.props.history}/>
      <Title title="C3PO-R3" />
    </div>
    );
  }
};

C3Po.defaultProps = {

};

C3Po.propTypes = {

};

export default C3Po;
