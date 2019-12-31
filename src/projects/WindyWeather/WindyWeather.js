import React from 'react';
import PropTypes from 'prop-types';
import './WindyWeather.scss';
import Title from '../../components/Title';
import BackButton from '../../components/BackButton';

class WindyWeather extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className='page'>
      <BackButton history={this.props.history}/>
      <Title title="Windy Weather" />
    </div>
    );
  }
};

WindyWeather.defaultProps = {

};

WindyWeather.propTypes = {

};

export default WindyWeather;
