import React from 'react';
import PropTypes from 'prop-types';
import './Daylight.scss';
import Title from '../../components/Title';
import BackButton from '../../components/BackButton';

class Daylight extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className='page'>
      <BackButton history={this.props.history}/>
      <Title title="Daylight" />
    </div>
    );
  }
};

Daylight.defaultProps = {

};

Daylight.propTypes = {

};

export default Daylight;
