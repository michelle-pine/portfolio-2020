import React from 'react';
import PropTypes from 'prop-types';
import './Footer.scss';

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const date = new Date();
    return (
    <div className="footer">
      © Copyright {date.getFullYear()} Michelle Pine. All rights reserved.
    </div>
    );
  }
};

Footer.defaultProps = {

};

Footer.propTypes = {

};

export default Footer;
