import React from 'react';
import PropTypes from 'prop-types';
import './Daylight.scss';
import Title from '../../components/Title';
import BackButton from '../../components/BackButton';
import BigLink from '../../components/BigLink';
import Preview from '../../media/project-media/daylight-view.png';

class Daylight extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className='page'>
      <BackButton history={this.props.history}/>
      <Title title="Daylight" />
      <div className="page-description">
        <p>My first responsive Tumblr theme, featuring the newly-released Bootstrap 4, FontAwesome icons, (of course) gradients, and a whole new layout style! A revamp of Starborne that is far less minimalist than the original.</p>
      </div>
      <a href={Preview} target="_blank" className="page-image-wrapper"><img src={Preview}/></a>
      <BigLink to="https://daylight-thm.tumblr.com/" text="View Tumblr Preview" icon="fa-tumblr"/>
      <BigLink to="https://github.com/michelle-pine/daylight-theme" text="View Github Code" icon="fa-github"/>
    </div>
    );
  }
};

Daylight.defaultProps = {

};

Daylight.propTypes = {

};

export default Daylight;
