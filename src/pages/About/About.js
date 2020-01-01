import React from 'react';
import PropTypes from 'prop-types';
import './About.scss';
import Title from '../../components/Title';
import Skills from '../../components/Skills';
import Experience from '../../components/Experience';

import { Link } from 'react-router-dom';


class About extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className="page about-page">
      <Title title="About" />
      <div className="about-bio">
        <div className="about-bio-image"/>
        <div className="about-bio-info">
          <strong>My name is Michelle Pine: developer, designer, video editor, aspiring writer, and incurable dog-lover!</strong>
          <p>As a computer scientist and designer, I'm constantly exploring ways to use code and visuals to display my ideas in creative and exciting ways. I generally focus on front-end development and UI/UX design, but I have back-end development experience as well. Check out my <Link to="/projects">projects</Link> for a taste of what I've done so far.</p>
          <p>Right now, I'm a senior at <strong>Northeastern University</strong> in Boston, where I'm pursuing a combined major in my passions: Computer Science and Design. Currently, I'm the president of <strong>Northeastern University Women in Technology (nuWIT)</strong>, a gender-diversity focused student organization. I also spend much of my free time writing and hope to be a novelist one day.</p>
        </div>
      </div>
      <Title title="Skills" />
      <div className="skill-set">
        <Skills header="Languages" icon="fa-code" skills={["Ruby","Java","Javascript","PostgreSQL","R","Python","Typescript","HTML","CSS","SCSS","LESS","Racket","Command Line"]}/>
        <Skills header="Libraries" icon="fa-file-archive-o" skills={["Bootstrap","Angular","React","p5","Processing"]}/>
        <Skills header="Design" icon="fa-crop" skills={["Photoshop","Illustrator","Premiere Pro","InDesign","After Effects","Figma", "Marvel","Invision","Balsamiq"]}/>
        <Skills header="More" icon="fa-plus-circle" skills={["Public Speaking","Social Media","Copywriting"]}/>
      </div>
      <Title title="Leadership" />
      <div className="leadership-set">
        <Experience organization="Northeastern University Women in Technology" position="President" year="2019-present"></Experience>
        <Experience organization="Northeastern University Women in Technology" position="Web Chair" year="2018-2019"></Experience>
      </div>
      <Title title="Experience" />
      <div className="experience-set">
        <Experience organization="HubSpot" position="Software Engineering Co-op" year="present"></Experience>
        <Experience organization="BookBub" position="Software Engineering Co-op"  description="Edited, maintained, and developed the Bookbub software using React, Ruby on Rails, Postgres, automated tests, and continuous integration practices." year="Jan 2019 - Dec 2019"></Experience>
        <Experience organization="Boston Children's Hospital" description="Designed, implemented, and improved the front-end design of various Heart Center web applications, utilizing technologies such as Angular, Javascript, HTML, CSS, Balsamiq, SCSS, and LESS" position="Web UI Innovator and Graphics Designer" year="Jan 2018 - June 2018"></Experience>
        <Experience organization="Harold Grinspoon Foundation" description="Designed various social media graphics; Composed, edited, and animated book trailers and other promotional videos; Marketed the organization through social media copy." position="Social Media Intern and Freelancer" year="July 2016 - June 2018"></Experience>
      </div>

    </div>
    );
  }
};

About.defaultProps = {

};

About.propTypes = {

};

export default About;
