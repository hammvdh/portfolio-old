import "./App.css";
import Parallax from "react-rellax";
import ScrollContainer from "react-indiana-drag-scroll";
import { Link } from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fab, fas, far);

function App() {
  return (
    <div class="App">
      <div class="nav-bar">
        <div class="logo-text">
          <img
            alt="Elite Logo"
            src={process.env.PUBLIC_URL + "/images/logo.svg"}
          />
        </div>

        <div class="nav-socials">
          <a
            href="https://twitter.com/elitepsd"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "twitter"]} className="socialIcon" />
          </a>

          <a
            href="https://www.linkedin.com/in/hammadharquil/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              className="socialIcon"
            />
          </a>
          <a
            href="https://behance.com/hammadh"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={["fab", "behance"]} className="socialIcon" />
          </a>

          <a href="https://github.com/hammvdh" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={["fab", "github"]} className="socialIcon" />
          </a>
        </div>

        <div class="nav-links">
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            duration={1}
            to="home"
          >
            HOME
          </Link>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            duration={1}
            to="about"
          >
            ABOUT ME
          </Link>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            duration={1}
            to="skills"
          >
            SKILLS
          </Link>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            duration={1}
            to="work"
          >
            MY WORK
          </Link>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            duration={1}
            to="contact"
          >
            CONTACT ME
          </Link>
        </div>

        <div class="nav-bars">
          <FontAwesomeIcon icon={["fas", "bars"]} className="socialIcon" />
        </div>
      </div>

      <Link activeClass="active" to="home" smooth={true} duration={1}>
        <div class="iconRight">
          <div class="upIcon" id="bottom-right">
            <FontAwesomeIcon icon={["far", "arrow-alt-circle-up"]} />
          </div>
        </div>
      </Link>

      <div id="home" class="section1 page1 active">
        <div class="sticky-footer">
          <h2 class="footer1">
            <div>HAMMADH A.</div>
          </h2>
          <h2 class="footer2">
            <div>GRAPHIC DESIGNER & FRONTEND DEVELOPER</div>
          </h2>
          <h2 class="footer3">
            <div>ENHANCING BRANDS SINCE 2016</div>
          </h2>
        </div>
        <div class="home-heading">
          <Parallax speed={2}>
            <h3>Hello, I'm Hammadh Arquil</h3>
          </Parallax>
          <Parallax speed={3}>
            <h1>
              <a
                class="typewrite"
                data-period="2000"
                data-type='[ "Graphic Designer and Front-end Developer based in Sri lanka.", "Enhancing Brands Since 2016." ]'
              >
                <span class="wrap"></span>
              </a>
            </h1>
          </Parallax>
          <Parallax speed={3}>
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
              data-aos-anchor-placement="center-bottom"
            >
              <a
                href="mailto:contactelitepsd@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <div class="home-buttons emailBtn">Email</div>
              </a>

              <a
                href="https://twitter.com/elitepsd"
                target="_blank"
                rel="noreferrer"
              >
                <div class="home-buttons twitterBtn">Twitter</div>
              </a>
              <a
                href="https://instagram.com/hammvdh"
                target="_blank"
                rel="noreferrer"
              >
                <div class="home-buttons instaBtn">Instagram</div>
              </a>
              <a
                href="https://www.linkedin.com/in/hammadharquil/"
                target="_blank"
                rel="noreferrer"
              >
                <div class="home-buttons linkedBtn">LinkedIn</div>
              </a>
              <a
                href="https://drive.google.com/file/d/1WdzuEOjCXXaYnKtfEUOPGn8nfnnkYM36/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <div class="home-buttons cvBtn">CV</div>
              </a>
            </div>
          </Parallax>
        </div>
      </div>

      <div id="about" class="section page2">
        <div class="about-container">
          <div class="aboutSection column1">
            <Parallax speed={0.2}>
              <h2>
                <strong>About Me</strong>
              </h2>
            </Parallax>
            <p>
              Hey! I’m Hammadh, a 19 year-old freelance graphic designer &
              aspiring front-end developer based in Sri Lanka. I have been
              designing since 2016 under the internet alias “ElitePSD,” Back
              when I ran a YouTube channel, I found myself constantly in need of
              designs like channel banners and youtube thumbnails in order to
              present myself. Though, after contacting countless designers and
              artists within the YouTube community, I was unable to find any
              that fit my own vision of the brand. This drove me to create my
              own designs. Through constant free trial expirations and alternate
              emails, I was eventually able to learn and master Adobe Photoshop
              through YouTube tutorials and experimentation on my own. Although
              my designs were initially born from need, I found myself enjoying
              myself doing it more and more, and what was once a chore became a
              hobby, and by mid 2017, I began to accept commissions for my work.
              Since then, I’ve been striving to expand my skillset and for the
              past four years, I’ve been tirelessly working to perfect my
              skills. Though I’m very far away from actually amazing someone
              with my work, I take immense pride in showcasing it because of the
              amount of work and time that goes into making every design.
            </p>
            <Parallax speed={-0.1}>
              <a
                href="https://drive.google.com/file/d/1WdzuEOjCXXaYnKtfEUOPGn8nfnnkYM36/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <div
                  class="cv"
                  data-aos="fade-up"
                  data-aos-delay="1000"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in-out"
                  data-aos-once="true"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  VIEW CURRICULUM VITAE
                </div>
              </a>
            </Parallax>
          </div>

          <div class="imageSection column2">
            <div
              data-aos="fade-down"
              data-aos-delay="500"
              data-aos-duration="1300"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              data-aos-anchor-placement="bottom-center"
            >
              <Parallax speed={-0.2}>
                <img
                  class="aboutimage"
                  alt="Image of Hammadh"
                  src={process.env.PUBLIC_URL + "/images/image.png"}
                />
              </Parallax>
            </div>
          </div>
        </div>
      </div>

      <div id="skills" class="page3">
        <div class="skills-section">
          <h1 class="text-white">My Skills</h1>

          <h2 class="text-white skills-subheading">Coding Languages</h2>
          <div class="skill-flex">
            <div class="skills">
              <div class="skill-app skill-leftpad">
                <div class="appIcon darticon"></div>
                <h3 class="text-white skill">Dart</h3>
              </div>

              <div class="skill-app skill-leftpad">
                <div class="appIcon htmlicon"></div>
                <h3 class="text-white skill">HTML</h3>
              </div>

              <div class="skill-app skill-leftpad">
                <div class="appIcon javaicon"></div>
                <h3 class="text-white skill">Java</h3>
              </div>

              <div class="skill-app skill-leftpad">
                <div class="appIcon ricon"></div>
                <h3 class="text-white skill">R Language</h3>
              </div>

              <div class="skill-app skill-leftpad">
                <div class="appIcon pythonicon"></div>
                <h3 class="text-white skill">Python</h3>
              </div>

              <div class="skill-app skill-leftpad">
                <div class="appIcon cssicon"></div>
                <h3 class="text-white skill">CSS</h3>
              </div>

              <div class="skill-app skill-leftpad">
                <div class="appIcon sqlicon"></div>
                <h3 class="text-white skill">SQL</h3>
              </div>

              <div class="skill-app skill-leftpad">
                <div class="appIcon jsicon"></div>
                <h3 class="text-white skill">Javascript</h3>
              </div>

              <div class="skill-app skill-leftpad">
                <div class="appIcon tsicon"></div>
                <h3 class="text-white skill">Typescript</h3>
              </div>

              <div class="skill-app skill-leftpad">
                <div class="appIcon nosqlicon"></div>
                <h3 class="text-white skill">NoSQL</h3>
              </div>
            </div>
          </div>

          <h2 class="text-white skills-subheading"> Frameworks & Databases </h2>

          <div class="skills">
            <div class="skill-app skill-leftpad">
              <div class="appIcon icon-row2 fluttericon"></div>
              <h3 class="text-white skill">Flutter</h3>
            </div>

            <div class="skill-app skill-leftpad">
              <div class="appIcon icon-row2 reacticon"></div>
              <h3 class="text-white skill">React</h3>
            </div>

            <div class="skill-app skill-leftpad">
              <div class="appIcon icon-row2 mysqlicon"></div>
              <h3 class="text-white skill">MySQL</h3>
            </div>

            <div class="skill-app skill-leftpad">
              <div class="appIcon icon-row2 javafxicon"></div>
              <h3 class="text-white skill">JavaFX</h3>
            </div>

            <div class="skill-app skill-leftpad">
              <div class="appIcon icon-row2 jqueryicon"></div>
              <h3 class="text-white skill">JQuery</h3>
            </div>

            <div class="skill-app skill-leftpad">
              <div class="appIcon icon-row2 angularicon"></div>
              <h3 class="text-white skill">Angular</h3>
            </div>

            <div class="skill-app skill-leftpad">
              <div class="appIcon icon-row2 spingicon"></div>
              <h3 class="text-white skill">Spring Boot</h3>
            </div>

            <div class="skill-app skill-leftpad">
              <div class="appIcon icon-row2 mongoicon"></div>
              <h3 class="text-white skill">MongoDB</h3>
            </div>
          </div>

          <h2 class="text-white skills-subheading">
            Design & Dev. Technologies
          </h2>
          <div class="skills lastrow">
            <div class="skill-app skill-leftpad">
              <div class="appIcon icon-row3 psicon"></div>
              <h3 class="text-white skill">Photoshop</h3>
            </div>

            <div class="skill-app skill-leftpad">
              <div class="appIcon icon-row3 aiicon"></div>
              <h3 class="text-white skill">Illustrator</h3>
            </div>

            <div class="skill-app skill-leftpad">
              <div class="appIcon icon-row3 xdicon"></div>
              <h3 class="text-white skill">Adobe XD</h3>
            </div>

            <div class="skill-app skill-leftpad">
              <div class="appIcon icon-row3 figmaicon"></div>
              <h3 class="text-white skill">Figma</h3>
            </div>

            <div class="skill-app skill-leftpad">
              <div class="appIcon icon-row3 aeicon"></div>
              <h3 class="text-white skill">After Effects</h3>
            </div>

            <div class="skill-app skill-leftpad">
              <div class="appIcon icon-row3 c4dicon"></div>
              <h3 class="text-white skill">Cinema4D</h3>
            </div>

            <div class="skill-app skill-leftpad">
              <div class="appIcon icon-row3 lricon"></div>
              <h3 class="text-white skill">Lightroom</h3>
            </div>

            <div class="skill-app skill-leftpad">
              <div class="appIcon icon-row3 githubicon"></div>
              <h3 class="text-white skill">
                Github<br></br>Desktop
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div id="work" class="page4">
        <div class="work-section">
          <h1>Recent Projects</h1>
          <p>
            The following showcases some of the recent projects that i have
            worked on, some design, some programming.. Most of the programming
            projects are available under my github profile so feel free to check
            them out :)
          </p>
          <ScrollContainer className="scroll-container">
            {
              <div class="projects">
                <div class="project">
                  <div>
                    <img
                      alt="ONCO"
                      class="project-img"
                      src={process.env.PUBLIC_URL + "/images/projects/onco.png"}
                    />
                  </div>
                  <h2 class="project-name">ONCO</h2>
                  <div class="project-desc">
                    ONCO is an Open Source mobile application developed with
                    Flutter that specializes in the diagnosis and prognosis of
                    Skin, Lung, and Breast Cancer, utilizing deep convolutional
                    neural networks for diagnosis, and machine learning and risk
                    models for prognosis - Developed by a team of 6
                    undergraduates
                  </div>
                </div>

                <div class="project">
                  <div>
                    <img
                      alt="Settle"
                      class="project-img"
                      src={
                        process.env.PUBLIC_URL + "/images/projects/Settle.png"
                      }
                    />
                  </div>
                  <h2 class="project-name">Settle</h2>
                  <div class="project-desc">
                    A website designed and developed to allow users to buy and
                    rent houses and apartment properties in the United Kingdom.
                  </div>
                </div>

                <div class="project">
                  <a
                    href="https://www.behance.net/gallery/89504333/Poster-Designs"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      alt="Posters"
                      class="project-img"
                      src={
                        process.env.PUBLIC_URL + "/images/projects/posters.png"
                      }
                    />
                  </a>
                  <h2 class="project-name">Movie & Game Poster Designs</h2>
                  <div class="project-desc">
                    A behance project consisting of several movie and game
                    posters that i had designed over the past few months.
                    Project can be viewed under my behance profile.
                  </div>
                </div>

                <div class="project">
                  <div>
                    <img
                      alt="Premier League Manager"
                      class="project-img"
                      src={
                        process.env.PUBLIC_URL +
                        "/images/projects/premierleague.png"
                      }
                    />
                  </div>
                  <h2 class="project-name">Premier League Manager</h2>
                  <div class="project-desc">
                    A Premier League Football Manager where clubs and matches
                    can be added from the console and viewed using GUI. It has
                    additional features to sort points, generate random matches
                    and filter a match by date.
                  </div>
                </div>

                <div class="project">
                  <a
                    href="https://www.behance.net/gallery/114498957/GenG-Esports"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      alt="GenG Esports"
                      class="project-img"
                      src={process.env.PUBLIC_URL + "/images/projects/geng.png"}
                    />
                  </a>
                  <h2 class="project-name">Gen.G Esports</h2>
                  <div class="project-desc">
                    A behance project consisting of several social media design
                    pieces for the eSports organisation GenG Esports. The
                    Project can be viewed under my behance profile.
                  </div>
                </div>
              </div>
            }
          </ScrollContainer>
        </div>
      </div>
      <div id="contact" class="page1">
        <div class="contact-section">
          <h1>Stay in touch!</h1>
          <h2>
            Looking to get some work done? Interested in purchasing my services?
            <strong> Feel free to send me a message.</strong>
          </h2>
        </div>
      </div>
      <div class="footer">
        <h2> &#169; Copyright - Hammadh Arquil 2021.</h2>
      </div>
    </div>
  );
}

export default App;
