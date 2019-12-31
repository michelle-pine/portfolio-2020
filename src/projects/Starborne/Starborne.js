import React from 'react';
import PropTypes from 'prop-types';
import './Starborne.scss';
import Title from '../../components/Title';
import BackButton from '../../components/BackButton';

class Starborne extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className='page'>
      <BackButton history={this.props.history}/>
      <Title title="Starborne" />
    </div>
    );
  }
};

Starborne.defaultProps = {

};

Starborne.propTypes = {

};

export default Starborne;
