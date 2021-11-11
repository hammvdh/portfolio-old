import "./App.css";
import { Link } from "react-scroll";

import { BrowserRouter as Router } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import Sidebar from "./components/Sidebar";
import { useState } from "react";

library.add(fab, fas, far);

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div class="App">
      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle} />

        <div class="nav-bar" toggle={toggle}>
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
              <FontAwesomeIcon
                icon={["fab", "twitter"]}
                className="socialIcon"
              />
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
              <FontAwesomeIcon
                icon={["fab", "behance"]}
                className="socialIcon"
              />
            </a>

            <a
              href="https://github.com/hammvdh"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={["fab", "github"]}
                className="socialIcon"
              />
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
              ABOUT
            </Link>

            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              duration={1}
              to="work"
            >
              WORK
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              duration={1}
              to="contact"
            >
              CONTACT
            </Link>
          </div>

          <div class="nav-bars" onClick={toggle}>
            <FaBars />
          </div>
        </div>
      </Router>

      <Link activeClass="active" to="home" smooth={true} duration={1}>
        <div class="iconRight">
          <div class="upIcon" id="bottom-right">
            <FontAwesomeIcon icon={["far", "arrow-alt-circle-up"]} />
          </div>
        </div>
      </Link>

      <div id="home" class="section1 page1">
        <div class="home-heading">
          <div>
            <h3>Hey, I'm Hammadh</h3>
          </div>
          <h1>Graphic Designer and Full-stack Developer based in Sri lanka.</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
