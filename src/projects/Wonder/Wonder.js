import React from 'react';
import PropTypes from 'prop-types';
import './Wonder.scss';
import Title from '../../components/Title';
import BackButton from '../../components/BackButton';

class Wonder extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className='page'>
      <BackButton history={this.props.history}/>
      <Title title="Wonder" />
    </div>
    );
  }
};

Wonder.defaultProps = {

};

Wonder.propTypes = {

};

export default Wonder;
