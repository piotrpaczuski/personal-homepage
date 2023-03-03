import React from "react";
import { ThemeProvider } from "styled-components";
import AboutAuthor from "./features/AboutAuthor";
import { Container } from "./features/Container";
import SkillsList from "./features/SkillsList";
import SwitchButton from "./features/SwitchButton";
import { theme } from "./theme.js";
import {futureSkills, skills} from "./features/skills"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <SwitchButton />
        <AboutAuthor />
        <SkillsList header={"My skillset includes 🛠️"} skills={skills} />
        <SkillsList
          header={"What I want to learn next 🚀"}
          skills={futureSkills}
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;
