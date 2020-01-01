import React from 'react';
import PropTypes from 'prop-types';
import './PjGraphics.scss';
import Title from '../../components/Title';
import BackButton from '../../components/BackButton';

function importAll(r) {
  return r.keys().map(r);
}

class PjGraphics extends React.Component {
  constructor(props) {
    super(props)
  }

  importAll(r) {
    return r.keys().map(r);
  }

  renderImages() {
    const images = importAll(require.context('../../media/project-media/pj-graphics', false, /\.(png|jpe?g|svg)$/));
    return images.map(function(image) {
      return (
        <a target="_blank" className="pj-graphic-wrapper" href={image} style={{backgroundImage: `url(${image})`}}></a>
      );
    });
  }

  render() {
    return (
    <div className='page pj-graphics'>
      <BackButton history={this.props.history}/>
      <Title title="PJ Graphics" />
      <div className="page-description">
        <p>A series of graphics designed for the Harold Grinspoon Foundation's social media.</p>
      </div>
      <div className="graphics-container">
        {this.renderImages()}
      </div>
    </div>
    );
  }
};

PjGraphics.defaultProps = {

};

PjGraphics.propTypes = {

};

export default PjGraphics;
