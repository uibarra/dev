import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./themes/default";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { Provider } from "react-awesome-slider/dist/navigation";

import { GlobalStyle } from "./components/GlobalStyle";
import { Main } from "./scenes/Main";
import { NavigationBar } from "./scenes/NavigationBar";
import { AboutMe } from "./scenes/AboutMe";

function Slider() {
  return (
    <AwesomeSlider
      className={"c-awesome-slider"}
      bullets={false}
      mobileTouch={true}
      cancelOnInteraction={true}
      interval={6000}
    >
      <div slug="page-one" className={"c-slider-slug"}>
        <Main />
        <AboutMe />
      </div>
      <div>ds</div>
      <div>ds</div>
    </AwesomeSlider>
  );
}

function App() {
  const slug = "page-one";

  return (
    <ThemeProvider theme={theme}>
      <Provider slug={slug}>
        <NavigationBar />
        <Slider />
        <GlobalStyle />
      </Provider>
    </ThemeProvider>
  );
}

export { App };
