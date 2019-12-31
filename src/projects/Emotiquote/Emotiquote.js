import React from 'react';
import PropTypes from 'prop-types';
import './Emotiquote.scss';
import Title from '../../components/Title';
import BackButton from '../../components/BackButton';

class Emotiquote extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className='page'>
      <BackButton history={this.props.history}/>
      <Title title="Emotiquote" />
    </div>
    );
  }
};

Emotiquote.defaultProps = {

};

Emotiquote.propTypes = {

};

export default Emotiquote;
