import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import profile from "./assets/img/profile-img.jpg";
import CVPhoto from "./assets/img/CV.png";
import CV from "./assets/files/Prabesh-Kumar-Shrestha-cv.pdf";

import "./assets/css/style.css";
import { Image, ProgressBar, Button } from "react-bootstrap";
import Typed from "react-typed";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaDiscord,
  FaLinkedinIn,
  FaHome,
  FaUser,
  FaFile,
  FaCode,
  FaAngleRight,
  FaArrowDown,
} from "react-icons/fa";
import { BsGeoAlt } from "react-icons/bs";
import { BiEnvelope, BiLink, BiMobile, BiPlus } from "react-icons/bi";
import Scrollspy from "react-scrollspy";
import ContactForm from "./contactForm";

export default class extends Component {
  state = { clicked: false };

  handelClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div className={this.state.clicked ? "mobile-nav-active" : ""}>
        <header id="header">
          <button
            className={
              this.state.clicked
                ? "bi mobile-nav-toggle d-xl-none-bi-x"
                : "bi mobile-nav-toggle d-xl-none bi-list"
            }
            onClick={this.handelClick}
          >
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </button>

          <div class="d-flex flex-column">
            <div class="profile">
              <Image src={profile} fluid roundedCircle />
              <h1 class="text-light">
                <a href="">Prabesh Kumar</a>
              </h1>
              <h1 class="text-light">
                <a href="">Shrestha</a>
              </h1>
              <div class="social-links mt-3 text-center">
                <a href="https://twitter.com/pkkk19" class="twitter">
                  <FaTwitter />
                </a>
                <a
                  href="https://www.facebook.com/prabeshkstha"
                  class="facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/prabeshk_shrestha/?hl=en"
                  class="instagram"
                >
                  <FaInstagram />
                </a>
                <a href="https://discord.gg/aG4gDs6jng" class="discord">
                  <FaDiscord />
                </a>
                <a
                  href="https://www.linkedin.com/in/prabesh-kumar-shrestha-281394195"
                  class="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            <nav id="navbar" className="nav-menu navbar">
              <ul>
                <Scrollspy
                  items={["hero", "about", "resume", "portfolio", "contact"]}
                  currentClassName="active"
                >
                  <li>
                    <a href="#hero" class="nav-link scrollto">
                      <i>
                        <FaHome />
                      </i>{" "}
                      <span>&nbsp;&nbsp;Home</span>
                    </a>
                  </li>
                  <li>
                    <a href="#about" class="nav-link scrollto">
                      <i>
                        <FaUser />
                      </i>{" "}
                      <span>&nbsp;&nbsp;About</span>
                    </a>
                  </li>
                  <li>
                    <a href="#resume" class="nav-link scrollto">
                      <i>
                        <FaFile />
                      </i>{" "}
                      <span>&nbsp;&nbsp;Resume</span>
                    </a>
                  </li>
                  <li>
                    <a href="#contact" class="nav-link scrollto">
                      <i>
                        <BiEnvelope />
                      </i>{" "}
                      <span>&nbsp;&nbsp;Contact</span>
                    </a>
                  </li>
                </Scrollspy>
              </ul>
            </nav>
            {/* Nav bar */}
          </div>
        </header>

        <section
          id="hero"
          class="d-flex flex-column justify-content-center align-items-center"
        >
          <div class="hero-container">
            <h1>Prabesh Kumar Shrestha</h1>
            <p>
              I
              <Typed
                strings={[
                  "'m a Full-Stack Developer.",
                  "&nbsp; Love Software Development.",
                ]}
                typeSpeed={140}
                backSpeed={90}
                loop
              />
            </p>
          </div>
        </section>

        <main id="main">
          {/* -- ======= About Section ======= -- */}
          <section id="about" class="about">
            <div class="container">
              <div class="section-title">
                <h2>About</h2>
                <p>
                  I am a hard-working and driven individual who isn't afraid to
                  face a challange. I'm passonate about my work and I know how
                  to get the job done. I would describe myself as an open and
                  honest individual.
                </p>
              </div>

              <div class="row">
                <div class="col-lg-4" data-aos="fade-right">
                  <Image src={profile} fluid className="about-profile"></Image>
                </div>
                <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                  <h3>Web Developer.</h3>
                  <p class="fst-italic">
                    I build professional full stack websites using django,
                    django REST Framework and react.js.
                  </p>
                  <div class="row">
                    <div class="col-lg-6">
                      <ul>
                        <li>
                          <i>
                            <FaAngleRight />
                          </i>{" "}
                          <strong>Birthday:</strong> <span>08 July 2001</span>
                        </li>
                        <li>
                          <i>
                            <FaAngleRight />
                          </i>{" "}
                          <strong>Website:</strong>{" "}
                          <a a href="https://pkkk19.github.io/pkkk19/">
                            <span>https://pkkk19.github.io/pkkk19/</span>
                          </a>
                        </li>
                        <li>
                          <i>
                            <FaAngleRight />
                          </i>{" "}
                          <strong>Phone:</strong> <span>9824289863</span>
                        </li>
                        <li>
                          <i>
                            <FaAngleRight />{" "}
                          </i>
                          <strong>City:</strong> <span>Kathmandu, Nepal</span>
                        </li>
                      </ul>
                    </div>
                    <div class="col-lg-6">
                      <ul>
                        <li>
                          <i>
                            <FaAngleRight />
                          </i>{" "}
                          <strong>Age:</strong> <span>21</span>
                        </li>
                        <li>
                          <i>
                            <FaAngleRight />
                          </i>{" "}
                          <strong>Degree:</strong>{" "}
                          <span>BSc (Hons) in Computer Science</span>
                        </li>
                        <li>
                          <i>
                            <FaAngleRight />
                          </i>{" "}
                          <strong>Email:</strong>{" "}
                          <span>prabesh065@gmail.com</span>
                        </li>
                        <li>
                          <i>
                            <FaAngleRight />
                          </i>{" "}
                          <strong>Freelance:</strong> <span>Available</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p>
                    I have been coding since couple of years and have a good
                    experience in web development. Currently I am studying BSc.
                    (hons) in computer science in Herald College Kathmandu.
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
                <p>
                  Python, Java and JavaScript are my most used programming
                  language. Beside programming, I also have some soft skills
                  like great communication, leadership and Work ethic.
                </p>
              </div>

              <div class="row skills-content">
                <div class="col-lg-6" data-aos="fade-up">
                  <div class="progress">
                    <span class="skill">
                      HTML <i class="val">100%</i>
                    </span>
                    <div class="progress-bar-wrap">
                      <ProgressBar now={100} />
                    </div>
                  </div>

                  <div class="progress">
                    <span class="skill">
                      CSS <i class="val">90%</i>
                    </span>
                    <div class="progress-bar-wrap">
                      <ProgressBar now={90} />
                    </div>
                  </div>

                  <div class="progress">
                    <span class="skill">
                      Python <i class="val">80%</i>
                    </span>
                    <div class="progress-bar-wrap">
                      <ProgressBar now={80} />
                    </div>
                  </div>

                  <div class="progress">
                    <span class="skill">
                      JavaScript <i class="val">75%</i>
                    </span>
                    <div class="progress-bar-wrap">
                      <ProgressBar now={75} />
                    </div>
                  </div>
                </div>

                <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                  <div class="progress">
                    <span class="skill">
                      PHP <i class="val">80%</i>
                    </span>
                    <div class="progress-bar-wrap">
                      <ProgressBar now={80} />
                    </div>
                  </div>

                  <div class="progress">
                    <span class="skill">
                      WordPress/CMS <i class="val">90%</i>
                    </span>
                    <div class="progress-bar-wrap">
                      <ProgressBar now={90} />
                    </div>
                  </div>

                  <div class="progress">
                    <span class="skill">
                      Java
                      <i class="val">80%</i>
                    </span>
                    <div class="progress-bar-wrap">
                      <ProgressBar now={80} />
                    </div>
                  </div>

                  <div class="progress">
                    <span class="skill">
                      Photoshop <i class="val">55%</i>
                    </span>
                    <div class="progress-bar-wrap">
                      <ProgressBar now={55} />
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
                <div class="row">
                  <div class="col-lg-4">
                    <h2>Resume</h2>
                  </div>
                  <div class="col-lg-4">
                    <Button variant="outline-primary" href={CV} download>
                      Click to download <FaArrowDown />
                    </Button>
                  </div>
                </div>
                <br />
                <div className="Resume-img">
                  <img src={CVPhoto} />
                </div>
              </div>
            </div>
          </section>
          {/* -- End Resume Section -- */}
          <br />

          <br />
          {/* -- ======= Contact Section ======= -- */}
          <section id="contact" class="contact">
            <div class="container">
              <div class="section-title">
                <h2>Contact</h2>
              </div>

              <div class="row" data-aos="fade-in">
                <div class="col-lg-5 d-flex align-items-stretch">
                  <div class="info">
                    <div class="address">
                      <i class="bi bi-geo-alt">
                        <BsGeoAlt />
                      </i>
                      <h4>Location:</h4>
                      <p>Kathmandu, Nepal</p>
                    </div>

                    <div class="email">
                      <i>
                        <BiEnvelope />
                      </i>
                      <h4>Email:</h4>
                      <p>prabesh065@gmail.com</p>
                    </div>

                    <div class="phone">
                      <i>
                        <BiMobile />
                      </i>
                      <h4>Call:</h4>
                      <p>+977 9824289863</p>
                    </div>
                  </div>
                </div>

                <ContactForm />
              </div>
            </div>
          </section>
          {/* -- End Contact Section -- */}
        </main>
        {/* End #main */}
      </div>
    );
  }
}
