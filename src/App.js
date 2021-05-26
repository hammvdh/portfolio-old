import "./App.css";
import "fullpage.js/vendors/scrolloverflow";
import Parallax from "react-rellax";

import { Flicker, Jitter, JumpAround, Blink } from "react-flicker";

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
        <div class="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
          <a href="#skills">Skills</a>
          <a href="#work">My Work</a>
          <a href="#contact">Contact</a>
        </div>

        <div class="nav-bars">
          <i class="fas fa-bars"></i>
        </div>
      </div>

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
      <a href="#home">
        <div class="iconRight">
          <div class="upIcon" id="bottom-right">
            <i class="far fa-arrow-alt-circle-up"></i>
          </div>
        </div>
      </a>

      <div id="home" class="section1 page1 active">
        <div class="home-heading">
          <Parallax speed={2}>
            <h3>Hey there! I'm Hammadh,</h3>
          </Parallax>
          <Parallax speed={1.5}>
            <h1>
              <a
                class="typewrite"
                data-period="2000"
                data-type='[ "Graphic Designer and Front-end Developer.", "Enhancing Brands Since 2016." ]'
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
              <a href="mailto:contactelitepsd@gmail.com" target="_blank">
                <div class="home-buttons emailBtn">Email</div>
              </a>

              <a href="https://twitter.com/elitepsd" target="_blank">
                <div class="home-buttons twitterBtn">Twitter</div>
              </a>
              <a href="https://instagram.com/hammvdh" target="_blank">
                <div class="home-buttons instaBtn">Instagram</div>
              </a>
              <a
                href="https://www.linkedin.com/in/hammadharquil/"
                target="_blank"
              >
                <div class="home-buttons linkedBtn">LinkedIn</div>
              </a>
              <a
                href="https://drive.google.com/file/d/1WdzuEOjCXXaYnKtfEUOPGn8nfnnkYM36/view?usp=sharing"
                target="_blank"
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
              data-aos="fade-left"
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
                <div class="appIcon"></div>
                <h3 class="text-white skill">HTML</h3>
              </div>

              <div class="skill-app skill-leftpad">
                <div class="appIcon">
                  {/* <img class="icon" src="../images/AppIcons/java.svg" /> */}
                </div>
                <h3 class="text-white skill">Java</h3>
              </div>

              <div class="skill-app skill-leftpad">
                <div class="appIcon"></div>
                <h3 class="text-white skill">R Language</h3>
              </div>

              <div class="skill-app skill-leftpad">
                <div class="appIcon"></div>
                <h3 class="text-white skill">Python</h3>
              </div>

              <div class="skill-app skill-leftpad">
                <div class="appIcon"></div>
                <h3 class="text-white skill">CSS</h3>
              </div>

              <div class="skill-app skill-leftpad">
                <div class="appIcon"></div>
                <h3 class="text-white skill">SQL</h3>
              </div>

              <div class="skill-app skill-leftpad">
                <div class="appIcon"></div>
                <h3 class="text-white skill">Javascript</h3>
              </div>

              <div class="skill-app skill-leftpad">
                <div class="appIcon"></div>
                <h3 class="text-white skill">Typescript</h3>
              </div>

              <div class="skill-app skill-leftpad">
                <div class="appIcon"></div>
                <h3 class="text-white skill">NoSQL</h3>
              </div>
            </div>
          </div>

          <h2 class="text-white skills-subheading"> Frameworks & Databases </h2>

          <div class="skills">
            <div class="skill-app skill-leftpad">
              <div class="appIcon icon-row2">
                {/* <img class="icon" src="../images/AppIcons/dart.svg" /> */}
              </div>
              <h3 class="text-white skill">Angular</h3>
            </div>

            <div class="skill-app skill-leftpad">
              <div class="appIcon icon-row2"></div>
              <h3 class="text-white skill">Spring Boot</h3>
            </div>

            <div class="skill-app skill-leftpad">
              <div class="appIcon icon-row2">
                {/* <img class="icon" src="../images/AppIcons/java.svg" /> */}
              </div>
              <h3 class="text-white skill">React</h3>
            </div>

            <div class="skill-app skill-leftpad">
              <div class="appIcon icon-row2"></div>
              <h3 class="text-white skill">MongoDB</h3>
            </div>

            <div class="skill-app skill-leftpad">
              <div class="appIcon icon-row2"></div>
              <h3 class="text-white skill">MySQL</h3>
            </div>

            <div class="skill-app skill-leftpad">
              <div class="appIcon icon-row2"></div>
              <h3 class="text-white skill">JQuery</h3>
            </div>

            <div class="skill-app skill-leftpad">
              <div class="appIcon icon-row2"></div>
              <h3 class="text-white skill">Flutter</h3>
            </div>

            <div class="skill-app skill-leftpad">
              <div class="appIcon icon-row2"></div>
              <h3 class="text-white skill">JavaFX</h3>
            </div>
          </div>

          <h2 class="text-white skills-subheading">
            Design & Dev. Technologies
          </h2>
          <div class="skills lastrow">
            <div class="skill-app skill-leftpad">
              <div class="appIcon icon-row3">
                {/* <img class="icon" src="../images/AppIcons/dart.svg" /> */}
              </div>
              <h3 class="text-white skill">Photoshop</h3>
            </div>

            <div class="skill-app skill-leftpad">
              <div class="appIcon icon-row3"></div>
              <h3 class="text-white skill">Illustrator</h3>
            </div>

            <div class="skill-app skill-leftpad">
              <div class="appIcon icon-row3"></div>
              <h3 class="text-white skill">Adobe XD</h3>
            </div>

            <div class="skill-app skill-leftpad">
              <div class="appIcon icon-row3"></div>
              <h3 class="text-white skill">Figma</h3>
            </div>

            <div class="skill-app skill-leftpad">
              <div class="appIcon icon-row3"></div>
              <h3 class="text-white skill">After Effects</h3>
            </div>

            <div class="skill-app skill-leftpad">
              <div class="appIcon icon-row3"></div>
              <h3 class="text-white skill">Cinema4D</h3>
            </div>

            <div class="skill-app skill-leftpad">
              <div class="appIcon icon-row3"></div>
              <h3 class="text-white skill">Lightroom</h3>
            </div>

            <div class="skill-app skill-leftpad">
              <div class="appIcon icon-row3"></div>
              <h3 class="text-white skill">Git</h3>
            </div>

            <div class="skill-app skill-leftpad">
              <div class="appIcon icon-row3"></div>
              <h3 class="text-white skill">
                Github<br></br>Desktop
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div class="page4"></div>
    </div>
  );
}

export default App;
