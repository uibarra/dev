import React from "react";
import styled from "styled-components";
import { SCREEN_MAX } from "./../../util/screen";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function NavigationBar() {
  return (
    <TopNav>
      <NavLink>Home</NavLink>
      <NavLink>About me</NavLink>
      <NavLink>
        <StyledIcon icon={faBars} />
      </NavLink>
    </TopNav>
  );
}

export { NavigationBar };

const TopNav = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 2.25rem;
  overflow: hidden;
  background-color: transparent;
  position: absolute;
  top: 0;
  z-index: 100;
  width: 100%;
  cursor: pointer;
`;

const NavLink = styled.a`
  display: block;
  color: ${props => props.theme.navLinkText};
  text-align: center;
  padding: 0.5rem 1.5rem;
  font-weight: bold;
  text-decoration: none;
  font-variant: unicase;
  border-radius: 5px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    color: rgba(0, 0, 0, 0.1);
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  display: none;

  @media only screen and (max-width: ${SCREEN_MAX.xs}) {
    display: block;
  }
`;
