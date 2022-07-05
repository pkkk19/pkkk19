import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import profile from './assets/img/profile-img.jpg';
import CVPhoto from './assets/img/CV.png';
import CV from './assets/files/Prabesh-Kumar-Shrestha-cv.pdf';
import './assets/css/style.css';
import {Image, ProgressBar} from 'react-bootstrap';
import Typed from "react-typed";
import { FaTwitter, FaFacebookF, FaInstagram, FaDiscord, FaLinkedinIn, FaListUl, FaHome, FaUser, FaFile, FaArrowUp } from "react-icons/fa";


export default class 
 extends Component {
  render() {
    return (
      <div>
        <button class="mobile-nav-toggle d-xl-none"><FaListUl/></button>
        <header id="header">
    <div class="d-flex flex-column">

      <div class="profile">
        <Image src={profile} fluid roundedCircle></Image>
        <h1 class="text-light"><a href="">Prabesh Kumar</a></h1>
        <h1 class="text-light"><a href="">Shrestha</a></h1>
        <div class="social-links mt-3 text-center">
          <a href="#" class="twitter"><FaTwitter/></a>
          <a href="#" class="facebook"><FaFacebookF/></a>
          <a href="#" class="instagram"><FaInstagram/></a>
          <a href="#" class="discord"><FaDiscord/></a>
          <a href="#" class="linkedin"><FaLinkedinIn/></a>
        </div>
      </div>

      <nav id="navbar" class="nav-menu navbar">
        <ul>
          <li><a href="#hero" class="nav-link scrollto active"><FaHome/> <span>&nbsp;&nbsp;Home</span></a></li>
          <li><a href="#about" class="nav-link scrollto">< FaUser/> <span>&nbsp;&nbsp;About</span></a></li>
          <li><a href="#resume" class="nav-link scrollto"><FaFile/> <span>&nbsp;&nbsp;Resume</span></a></li>
          <li><a href="#portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Portfolio</span></a></li>
          <li><a href="#services" class="nav-link scrollto"><i class="bx bx-server"></i> <span>Services</span></a></li>
          <li><a href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
        </ul>
      </nav>
      {/* Nav bar */}
    </div>
  </header>

  <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
    <div class="hero-container">
      <h1>Prabesh Kumar Shrestha</h1>
      <p>I<Typed
      strings={[
            "'m a Full-Stack Developer.",
            "&nbsp; Love Software Development."
          ]}
          typeSpeed={140}
          backSpeed={90}
          loop
        /></p>
    </div>
  </section>

  <main id="main">

    {/* -- ======= About Section ======= -- */}
    <section id="about" class="about">
      <div class="container">

        <div class="section-title">
          <h2>About</h2>
          <p>
            I am a hard-working and driven individual who isn't afraid to face a challange.
             I'm passonate about my work and I know how to get the job done.
              I would describe myself as an open and honest individual.</p>
        </div>

        <div class="row">
          <div class="col-lg-4" data-aos="fade-right">
          <Image src={profile} fluid className="about-profile"></Image>
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>UI/UX Designer &amp; Web Developer.</h3>
            <p class="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>07 July 2001</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>9824289863</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Kathmandu, Nepal</span></li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>21</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelors ongoing</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>prabesh065@gmail.com</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p>
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
              Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
            </p>
          </div>
        </div>

      </div>
    </section>
    {/* -- End About Section -- */}

    {/* -- ======= Skills Section ======= -- */}
    <section id="skills" class="skills section-bg">
      <div class="container">

        <div class="section-title">
          <h2>Skills</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row skills-content">

          <div class="col-lg-6" data-aos="fade-up">

            <div class="progress">
              <span class="skill">HTML <i class="val">100%</i></span>
              <div class="progress-bar-wrap">
              <ProgressBar now={100}/>
              </div>
            </div>

            <div class="progress">
              <span class="skill">CSS <i class="val">90%</i></span>
              <div class="progress-bar-wrap">
              <ProgressBar now={90}/>
              </div>
            </div>

            <div class="progress">
              <span class="skill">JavaScript <i class="val">75%</i></span>
              <div class="progress-bar-wrap">
              <ProgressBar now={75}/>
              </div>
            </div>

          </div>

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">

            <div class="progress">
              <span class="skill">PHP <i class="val">80%</i></span>
              <div class="progress-bar-wrap">
              <ProgressBar now={80}/>
              </div>
            </div>

            <div class="progress">
              <span class="skill">WordPress/CMS <i class="val">90%</i></span>
              <div class="progress-bar-wrap">
              <ProgressBar now={90}/>
              </div>
            </div>

            <div class="progress">
              <span class="skill">Photoshop <i class="val">55%</i></span>
              <div class="progress-bar-wrap">
              <ProgressBar now={55}/>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
    {/* -- End Skills Section -- */}

    {/* -- ======= Resume Section ======= -- */}
    <section id="resume" class="resume">
      <div class="container">

        <div class="section-title">
        <a href={ CV } download>Click to download</a>
          <h2>Resume</h2>
          <img src={CVPhoto} className="Resume"></img>
        </div>

      </div>
    </section>
    {/* -- End Resume Section -- */}

  </main>
  {/* End #main */}

  

  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><FaArrowUp/></a>

      </div>
    )
  }
}
