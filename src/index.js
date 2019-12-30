import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter as Router } from 'react-router-dom'
import $ from 'jquery';

import projectList from './data/projects';

import './index.scss';
import 'font-awesome/css/font-awesome.min.css'

import App from './App';
//pages
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

//components
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';

//images
import logo from './media/logo.png'

const routing = (
  <Router basename='/'>
    <div id="stars"/>
    <div id="stars2"/>
    <div id="stars3"/>
    <div className="logo-bg"><img src={logo} alt="" className="header-logo"/></div>
    <Navbar />
    <Header />
    <div className="page-content">
      <div className="content-wrapper">
        <Route exact path="/" component={Projects} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        {projectList.filter((project) => !project.redirect).map((project) => <Route exact path={`/projects/${project.url}`} component={project.page} />)}
        <Footer />
      </div>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

function scrollPastHeader() {
  var $header = $(".header");

  if ($(document).scrollTop() < $header.height() - 100) {
    $([document.documentElement, document.body]).animate({
      scrollTop: $header.height()
     }, 1500);
  };
}

$(function () {
  $(".navbar-link").click(function () {
    scrollPastHeader();
  });
  $(".down-button").click(function () {
    scrollPastHeader();
  });
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    var $header = $(".header");
     //>=, not <=
    if (scroll >= $header.height() - 50) {
        //clearHeader, not clearheader - caps H
        $(".navbar").addClass("scrolled");
    }
    else {
      //clearHeader, not clearheader - caps H
      $(".navbar").removeClass("scrolled");
    }
  });
});

