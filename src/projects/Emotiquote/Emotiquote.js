import React from 'react';
import PropTypes from 'prop-types';
import './Emotiquote.scss';
import Title from '../../components/Title';
import BackButton from '../../components/BackButton';
import BigLink from '../../components/BigLink';

import EmotiquoteImg from '../../media/project-media/hackbeanpot.jpg';

class Emotiquote extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className='page emotiquote'>
      <BackButton history={this.props.history}/>
      <Title title="Emotiquote" />
      <div className="page-description">
        <p>A ReactJS application for analyzing the emotions of famous (and not-so-famous) people, books, movies, and TV shows. Utilizes the extensive data contained in the Mediawiki API and takes advantage of the Indico API's emotional machine learning. Made in collaboration with Abigail Hodge, Samantha Price, and Sharon He.</p>
      </div>
      <a href={EmotiquoteImg} target="_blank" className="page-image-wrapper"><img alt="" src={EmotiquoteImg}/></a>
      <p className="page-description no-top-border">Sam Price, Abigail Hodge, myself, and Sharon He accepting their awards for <i>Emotiquote</i> at HackBeanpot 2018.</p>

      <div class="emotiquote-accomplishments-wrapper">
        <ul class="emotiquote-accomplishments">
          <li class="emotiquote-accomplishment accomplishment-title">
              <h3>Created for HackBeanpot 2018!</h3>
          </li>
          <li class="emotiquote-accomplishment">
            <i class="fa fa-trophy"></i>&nbsp;
            Winner of Best UI/UX Design
          </li>
          <li class="emotiquote-accomplishment">
              <i class="fa fa-trophy"></i>&nbsp;
              Winner of Best Use of the Indico API
          </li>
          <li class="emotiquote-accomplishment">
              <i class="fa fa-trophy"></i>&nbsp;
              Among the Top 10 Projects
          </li>
          <li class="emotiquote-accomplishment">
            <i class="fa fa-newspaper-o"></i>&nbsp;
            Featured in the <a href="https://www.bizjournals.com/boston/news/2018/02/13/hackbeanpot-hackathon-winners-focus-on-emotion-ai.html">Boston Business Journal</a>
          </li>
        </ul>
      </div>
      <BigLink to="https://abigailhodge.github.io/emotiquote/" text="Try the App" icon="fa-laptop"/>
      <BigLink to="https://github.com/michelle-pine/emotiquote" text="View Code on Github" icon="fa-github"/>
    </div>
    );
  }
};

Emotiquote.defaultProps = {

};

Emotiquote.propTypes = {

};

export default Emotiquote;
