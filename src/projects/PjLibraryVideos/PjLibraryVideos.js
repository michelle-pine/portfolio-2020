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
    <div className='page'>
      <BackButton history={this.props.history}/>
      <Title title="PJLibrary Videos" />
    </div>
    );
  }
};

PjLibraryVideos.defaultProps = {

};

PjLibraryVideos.propTypes = {

};

export default PjLibraryVideos;
