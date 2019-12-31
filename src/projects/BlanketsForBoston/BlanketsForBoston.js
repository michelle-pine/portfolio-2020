import React from 'react';
import PropTypes from 'prop-types';
import './BlanketsForBoston.scss';
import Title from '../../components/Title';
import BackButton from '../../components/BackButton';

class BlanketsForBoston extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className='page'>
      <BackButton history={this.props.history}/>
      <Title title="Blankets for Boston" />
    </div>
    );
  }
};

BlanketsForBoston.defaultProps = {

};

BlanketsForBoston.propTypes = {

};

export default BlanketsForBoston;
