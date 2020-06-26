import React from "react";
import styled from "styled-components";
import { SCREEN_MAX } from "./../../util/screen";

function AboutMe() {
  return (
    <MainWrapper>
      <InnerWrapper>
        <Text>{"Hi, my name is Ulises. I do web things."}</Text>
      </InnerWrapper>
    </MainWrapper>
  );
}

export { AboutMe };

const MainWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex: 1 1 100%;
  justify-content: center;
  align-items: center;
  background-color: #2d3436;
  background-image: linear-gradient(315deg, #2d3436 0%, #000000 74%);
`;

const Text = styled.h1`
  font-family: "Bree Serif", cursive;
  font-size: 5rem;
  color: ${props => props.theme.aboutMeText};
  text-shadow: ${props => props.theme.aboutMeTextShadow};
  padding: 1rem 4rem;
  display: flex;

  @media only screen and (max-width: ${SCREEN_MAX.xs}) {
    font-size: 3rem;
    padding: 1rem 1.75rem;
  }
`;