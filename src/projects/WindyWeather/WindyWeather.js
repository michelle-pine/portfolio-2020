import React from 'react';
import PropTypes from 'prop-types';
import './WindyWeather.scss';
import Title from '../../components/Title';
import BackButton from '../../components/BackButton';
import BigLink from '../../components/BigLink';

class WindyWeather extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className='page'>
      <BackButton history={this.props.history}/>
      <Title title="Windy Weather" />
      <div className="page-description">
        <p>An animated wind speed visualizer, created using the APIXU Weather API, Adobe Illustrator, and the p5 Javascript library!</p>
      </div>
      <BigLink onClick={() => {window.open('https://michelle-pine.github.io/WindyWeather/','pagename','resizable,height=720,width=1024'); return false;}} text="View App" icon="fa-laptop"/>
      <BigLink to="https://github.com/michelle-pine/WindyWeather" text="View Code" icon="fa-github"/>
    </div>
    );
  }
};

WindyWeather.defaultProps = {

};

WindyWeather.propTypes = {

};

export default WindyWeather;
