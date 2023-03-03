import React from "react";
import { ThemeProvider } from "styled-components";
import AboutAuthor from "./features/AboutAuthor";
import { Container } from "./features/Container";
import SwitchButton from "./features/SwitchButton";
import { theme } from "./theme.js";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <SwitchButton />
        <AboutAuthor />
      </Container>
    </ThemeProvider>
  );
}

export default App;
