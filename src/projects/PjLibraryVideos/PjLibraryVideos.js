import React from 'react';
import PropTypes from 'prop-types';
import './PjLibraryVideos.scss';
import Title from '../../components/Title';
import BackButton from '../../components/BackButton';

class PjLibraryVideos extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className='page pj-library-videos'>
      <BackButton history={this.props.history}/>
      <Title title="PJ Library Videos" />
      <div className="page-description">
        <p>These professional-quality videos were made using Adobe Premiere Pro and Adobe Photoshop for the Harold Grinspoon Foundation, a non-profit which promotes Jewish cultural engagement. The videos were displayed on social media to market their PJ Library program to parents and children. All image and music rights belong to the foundation.</p>
      </div>
      <div className="video-wrapper">
        <iframe frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen src="https://drive.google.com/file/d/1kM4S0GMg__gsSFwpLM4ePcJZ2QCwLWd3/preview" width="560" height="315"></iframe>
      </div>
      <div className="video-wrapper">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/A4LJV8Xsu88" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>     
      </div>
      <div className="video-wrapper">
        <iframe frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen src="https://drive.google.com/file/d/1NZ7eGvYODQP-lEISgZhw_dM2M1NZEEJ2/preview" width="560" height="315"></iframe>
      </div>
      <div className="video-wrapper">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/cfxCfly1WGk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div className="video-wrapper">
        <iframe frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen src="https://drive.google.com/file/d/1fRCljSOZeKw80ZfNGTYfU5l4WDRb3bfz/preview" width="560" height="315"></iframe>
      </div>
      <div className="video-wrapper">
      <iframe frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen src="https://drive.google.com/file/d/1DhEHXhMfJCwOCmp-1z6xpSCr8ojloX1N/preview" width="560" height="315"></iframe>
      </div>
    </div>
    );
  }
};

PjLibraryVideos.defaultProps = {

};

PjLibraryVideos.propTypes = {

};

export default PjLibraryVideos;
