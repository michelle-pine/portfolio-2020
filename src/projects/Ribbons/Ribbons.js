import React from 'react';
import PropTypes from 'prop-types';
import './Ribbons.scss';
import Title from '../../components/Title';
import BackButton from '../../components/BackButton';
import BigLink from '../../components/BigLink';
import Preview from '../../media/project-media/ribbons-view.png';

class Ribbons extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className='page'>
      <BackButton history={this.props.history}/>
      <Title title="Ribbons" />
      <div className="page-description">
        <p>A striking Tumblr theme that practically glows. Use colors and dynamic hover effects to beautify your blog. Developed in HTML and CSS.</p>
      </div>
      <a href={Preview} target="_blank" className="page-image-wrapper"><img src={Preview}/></a>
      <BigLink to="https://pineribbonstheme.tumblr.com/" text="View Tumblr Preview" icon="fa-tumblr"/>
      <BigLink to="https://github.com/michelle-pine/RibbonsThemeForTumblr" text="View Github Code" icon="fa-github"/>
    </div>
    );
  }
};

Ribbons.defaultProps = {

};

Ribbons.propTypes = {

};

export default Ribbons;
