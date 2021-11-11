import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";

export const SidebarContainer = styled.aside`
    position fixed;
    z-index:999;
    width: 100%;
    height:100%;
    backgroundImage: url("../../images/black_bg.png");
    background-color: #000000;
    display:grid;
    align-items:center;
    top:0;
    left:0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
    top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 2.4rem;
  right: 2rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-templaye-columns: 1fs;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6 60px);
  }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: left;
  justify-content: left;
  font-size: 1.2rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-weight: 500;

  &:hover {
    color: #f72076;
    transition: 0.2s ease-in-out;
  }
`;

export const SidebarSocials = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  font-size: 1.2rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  padding-left: 1em;
  &:hover {
    color: #f72076;
    transition: 0.2s ease-in-out;
  }
`;
