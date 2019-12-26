import React from 'react';
import PropTypes from 'prop-types';
import './Contact.scss';
import Title from '../../components/Title';


class Contact extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className="contact-page">
      <Title title="Contact" />
    </div>
    );
  }
};

Contact.defaultProps = {

};

Contact.propTypes = {

};

export default Contact;
