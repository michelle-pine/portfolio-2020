import React from 'react';
import PropTypes from 'prop-types';
import './ForbiddenIsland.scss';
import Title from '../../components/Title';
import BackButton from '../../components/BackButton';

class ForbiddenIsland extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className='page'>
      <BackButton history={this.props.history}/>
      <Title title="The Forbidden Island" />
    </div>
    );
  }
};

ForbiddenIsland.defaultProps = {

};

ForbiddenIsland.propTypes = {

};

export default ForbiddenIsland;
