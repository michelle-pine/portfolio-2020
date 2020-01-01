import React from 'react';
import PropTypes from 'prop-types';
import './Phases.scss';
import Title from '../../components/Title';
import BackButton from '../../components/BackButton';
import BigLink from '../../components/BigLink';
import Preview from '../../media/project-media/phases-view.png';

class Phases extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className='page'>
      <BackButton history={this.props.history}/>
      <Title title="Phases" />
      <div className="page-description">
        <p>A colorful, interactive theme for Tumblr bloggers of all kinds! Developed in HTML and CSS.</p>
      </div>
      <a href={Preview} target="_blank" className="page-image-wrapper"><img src={Preview}/></a>
      <BigLink to="https://pinephasestheme.tumblr.com/" text="View Tumblr Preview" icon="fa-tumblr"/>
      <BigLink to="https://github.com/michelle-pine/PhasesThemeForTumblr" text="View Github Code" icon="fa-github"/>
    </div>
    );
  }
};

Phases.defaultProps = {

};

Phases.propTypes = {

};

export default Phases;
