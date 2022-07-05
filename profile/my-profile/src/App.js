import React, { Component } from 'react';
import profile from './assets/img/profile-img.jpg';
import './assets/css/style.css';
import Image from 'react-bootstrap/Image';
import Typed from "react-typed";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'


export default class 
 extends Component {
  render() {
    return (
      <div>
        <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>
        <header id="header">
    <div class="d-flex flex-column">

      <div class="profile">
        <Image src={profile} fluid roundedCircle></Image>
        <h1 class="text-light"><a href="">Prabesh Kumar</a></h1>
        <h1 class="text-light"><a href="">Shrestha</a></h1>
        <div class="social-links mt-3 text-center">
          <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
          <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
          <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
          <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
          <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
        </div>
      </div>

      <nav id="navbar" class="nav-menu navbar">
        <ul>
          <li><a href="#hero" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></a></li>
          <li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a></li>
          <li><a href="#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li>
          <li><a href="#portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Portfolio</span></a></li>
          <li><a href="#services" class="nav-link scrollto"><i class="bx bx-server"></i> <span>Services</span></a></li>
          <li><a href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
        </ul>
      </nav>{/* Nav bar */}
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

  </main>
  {/* End #main */}

      </div>
    )
  }
}
