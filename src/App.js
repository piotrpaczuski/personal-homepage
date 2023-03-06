import React from "react";
import { ThemeProvider } from "styled-components";
import AboutAuthor from "./features/AboutAuthor";
import { Container } from "./features/Container";
import SkillsList from "./features/SkillsList";
import SwitchButton from "./features/SwitchButton";
import { theme } from "./theme.js";
import { futureSkills, skills } from "./features/skills";
import Portfolio from "./features/Portfolio/index"
import { useDispatch } from "react-redux";
import { fetchGithubRepos } from "./features/repos/reposSlice";

function App() {
  const dispatch = useDispatch();

  return (
    <ThemeProvider theme={theme}>
      <Container onLoad={() => dispatch(fetchGithubRepos())}>
        <SwitchButton />
        <AboutAuthor />
        <SkillsList header={"My skillset includes 🛠️"} skills={skills} />
        <SkillsList
          header={"What I want to learn next 🚀"}
          skills={futureSkills}
        />
        <Portfolio />
      </Container>
    </ThemeProvider>
  );
}

export default App;
