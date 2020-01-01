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
    <div className="page contact-page">
      <Title title="Contact" />
      <div className="page-description">
        <p>Interested in my work? Feel free to contact me!</p>
      </div>
      {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd8Oe47N7ycLG5Dnl1kcpQ9EbvS-_NBf7vG4J4LAX5v9fnEdg/viewform?embedded=true" width="640" height="800px" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
      <div className="contact-form">
        <iframe className="contact-frame" width="100%" height="900" allowTransparency="true" id="contactform123" name="contactform123" marginwidth="0" marginheight="0" frameborder="0" src="//www.123formbuilder.com/my-contact-form-5218252.html">
          <p>
          Your browser does not support iframes. The contact form cannot be displayed. Please use another contact method (phone, fax etc)
          </p>
        </iframe>
      </div>
    </div>
    );
  }
};

Contact.defaultProps = {

};

Contact.propTypes = {

};

export default Contact;
