import React from 'react';
import PropTypes from 'prop-types';
import './Wonder.scss';
import Title from '../../components/Title';
import BackButton from '../../components/BackButton';
import BigLink from '../../components/BigLink';
import Preview from '../../media/project-media/wonder-view.png';

class Wonder extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className='page'>
      <BackButton history={this.props.history}/>
      <Title title="Wonder" />
      <div className="page-description">
        <p>An extremely colorful, responsive Tumblr theme featuring bright gradients and tons of hover effects. Developed in HTML and CSS. The code alone has over 4,500 hits on Pastebin, and 1,400 notes on Tumblr.</p>
      </div>
      <a href={Preview} target="_blank" className="page-image-wrapper"><img src={Preview}/></a>
      <BigLink to="https://pinewondertheme.tumblr.com/" text="View Tumblr Preview" icon="fa-tumblr"/>
      <BigLink to="https://github.com/michelle-pine/WonderThemeForTumblr" text="View Github Code" icon="fa-github"/>
    </div>
    );
  }
};

Wonder.defaultProps = {

};

Wonder.propTypes = {

};

export default Wonder;
