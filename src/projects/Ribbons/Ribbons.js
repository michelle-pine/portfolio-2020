import React from 'react';
import PropTypes from 'prop-types';
import './Ribbons.scss';
import Title from '../../components/Title';
import BackButton from '../../components/BackButton';


class Ribbons extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className='page'>
      <BackButton history={this.props.history}/>
      <Title title="Ribbons" />
    </div>
    );
  }
};

Ribbons.defaultProps = {

};

Ribbons.propTypes = {

};

export default Ribbons;
