import React from 'react';
import PropTypes from 'prop-types';
import './BlanketsForBoston.scss';
import Title from '../../components/Title';
import BackButton from '../../components/BackButton';
import BigLink from '../../components/BigLink';
import Preview from '../../media/project-media/blankets-view.png';

class BlanketsForBoston extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className='page'>
      <BackButton history={this.props.history}/>
      <Title title="Blankets for Boston" />
      <div className="page-description">
        <p>My first responsive Tumblr theme, featuring the newly-released Bootstrap 4, FontAwesome icons, (of course) gradients, and a whole new layout style! A revamp of Starborne that is far less minimalist than the original.</p>
      </div>
      <a href={Preview} target="_blank" className="page-image-wrapper"><img src={Preview}/></a>
      <BigLink to="https://michelle-pine.github.io/BlanketsForBoston/" text="View Demo" icon="fa-laptop"/>
      <BigLink to="https://github.com/michelle-pine/BlanketsForBoston" text="View Github Code" icon="fa-github"/>
    </div>
    );
  }
};

BlanketsForBoston.defaultProps = {

};

BlanketsForBoston.propTypes = {

};

export default BlanketsForBoston;
