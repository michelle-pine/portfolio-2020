import React from 'react';
import PropTypes from 'prop-types';
import './Phases.scss';
import Title from '../../components/Title';
import BackButton from '../../components/BackButton';

class Phases extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className='page'>
      <BackButton history={this.props.history}/>
      <Title title="Phases" />
    </div>
    );
  }
};

Phases.defaultProps = {

};

Phases.propTypes = {

};

export default Phases;
