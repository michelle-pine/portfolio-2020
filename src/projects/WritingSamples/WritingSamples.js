import React from 'react';
import PropTypes from 'prop-types';
import './WritingSamples.scss';
import Title from '../../components/Title';
import BackButton from '../../components/BackButton';
import AdvWriting1 from '../../media/documents/adv-writing-1.pdf';
import AdvWriting3 from '../../media/documents/adv-writing-3.pdf';

class WritingSamples extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className='page writing-samples'>
      <BackButton history={this.props.history}/>
      <Title title="Writing Samples" />
      <div className="page-description">
        For Northeastern's Interdisciplinary Advanced Writing class, students are required to complete several writing projects. You may find these writing projects below.
      </div>
      <div className="writing-sample-links">
        <a className="writing-sample-link" target="_blank" href={AdvWriting1}>
          <div className="icon-container">
            <i className="fa fa-file-pdf-o"></i>
          </div>
          <div className="writing-info">
            <h4 className="writing-title">Genre, Rhetoric, and Discourse Analysis</h4>
            <p className="writing-description">An analysis of “The Racist History Behind Facial Recognition” by New York Times graphics editor Sahil Chinoy</p>
          </div>
        </a>
      </div>
      <div className="writing-sample-links">
        <a className="writing-sample-link" target="_blank" href="https://michelle-pine.github.io/accessible-front-end-dev/">
          <div className="icon-container">
            <i className="fa fa-link"></i>
          </div>
          <div className="writing-info">
            <h4 className="writing-title">Accessible Front-End Development</h4>
            <p className="writing-description">A reference document describing common mistakes and solutions when creating accessible websites.</p>
          </div>
        </a>
      </div>
      <div className="writing-sample-links">
        <a className="writing-sample-link" target="_blank" href={AdvWriting3}>
          <div className="icon-container">
            <i className="fa fa-file-pdf-o"></i>
          </div>
          <div className="writing-info">
            <h4 className="writing-title">Robot Recruiters: The Rise of AI in Recruiting</h4>
            <p className="writing-description">A literature review examining the circumstances the led to use of AI in recruiting practices, as well as the potentially consequences of such use.</p>
          </div>
        </a>
      </div>
    </div>
    );
  }
};

WritingSamples.defaultProps = {

};

WritingSamples.propTypes = {

};

export default WritingSamples;
