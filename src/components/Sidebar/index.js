import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarSocials,
} from "./SidebarElements";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fab, fas, far);

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon></CloseIcon>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            activeClass="active"
            spy={true}
            smooth={true}
            duration={1}
            to="home"
            onClick={toggle}
          >
            HOME
          </SidebarLink>
          <SidebarLink
            activeClass="active"
            spy={true}
            smooth={true}
            duration={1}
            to="about"
            onClick={toggle}
          >
            ABOUT ME
          </SidebarLink>
          <SidebarLink
            activeClass="active"
            spy={true}
            smooth={true}
            duration={1}
            to="skills"
            onClick={toggle}
          >
            SKILLS
          </SidebarLink>
          <SidebarLink
            activeClass="active"
            spy={true}
            smooth={true}
            duration={1}
            to="work"
            onClick={toggle}
          >
            MY WORK
          </SidebarLink>
          <SidebarLink
            activeClass="active"
            spy={true}
            smooth={true}
            duration={1}
            to="contact"
            onClick={toggle}
          >
            CONTACT ME
          </SidebarLink>
        </SidebarMenu>
        <SidebarSocials>
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
        </SidebarSocials>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
