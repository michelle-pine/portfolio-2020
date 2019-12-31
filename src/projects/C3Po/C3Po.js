import React from 'react';
import PropTypes from 'prop-types';
import './C3Po.scss';
import Title from '../../components/Title';
import BackButton from '../../components/BackButton';
import BigLink from '../../components/BigLink';
import C3POImg from '../../media/project-media/c3po-screenshot.png';

class C3Po extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className='page c3po'>
      <BackButton history={this.props.history}/>
      <Title title="C3PO-R3" />
      <div className="page-description">
        <p>In 2018, <a _ngcontent-c23="" href="https://c3po-r3.chboston.org/#/about/background/c3po">The Congenital Cardiac Catheterization Project on Outcomes (C3PO) </a>sought to update their website to their third iteration: C3PO-R3. As a UI designer and front-end developer at Boston Children's Hospital, I was enlisted to aid them in this endeavor. In doing so, I was able to both design and develop the front end of their website entirely from scratch. The external site is still live and available to users and hospital employees all over the world, but you can view a demo of my original design as well!</p>
        <p>This project was mocked-up in Balsamiq, prototyped in HTML, and developed in Angular 4 + typescript. Below is a demo separated from Boston Children's databases to preserve patient priacy. The login credentials for the demo are 'username' and 'password'.</p>
      </div>
      <a href={C3POImg} target="_blank" className="page-image-wrapper"><img src={C3POImg}/></a>
      <BigLink to="https://michelle-pine.github.io/c3por3portfolio/" text="View Original Design" icon="fa-laptop"/>
      <div className="page-description no-top-border">
        <p>On the live site below, the internal site is not accessible to the public. Sorry!</p>
      </div>
      <BigLink to="https://c3po-r3.chboston.org/" text="View Live Site" icon="fa-globe"/>
    </div>
    );
  }
};

C3Po.defaultProps = {

};

C3Po.propTypes = {

};

export default C3Po;
