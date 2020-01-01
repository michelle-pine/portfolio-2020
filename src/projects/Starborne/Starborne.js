import React from 'react';
import PropTypes from 'prop-types';
import './Starborne.scss';
import Title from '../../components/Title';
import BackButton from '../../components/BackButton';
import BigLink from '../../components/BigLink';
import Preview from '../../media/project-media/starborne-view.png';

class Starborne extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className='page'>
      <BackButton history={this.props.history}/>
      <Title title="Starborne" />
      <div className="page-description">
        <p>Clean up your blog with this minimalistic but still colorful Tumblr theme. Developed in HTML and CSS.</p>
      </div>
      <a href={Preview} target="_blank" className="page-image-wrapper"><img src={Preview}/></a>
      <BigLink to="https://pinestarbornetheme.tumblr.com/"  text="View Tumblr Preview" icon="fa-tumblr"/>
      <BigLink to="https://github.com/michelle-pine/StarborneThemeForTumblr" text="View Github Code" icon="fa-github"/>
    </div>
    );
  }
};

Starborne.defaultProps = {

};

Starborne.propTypes = {

};

export default Starborne;
