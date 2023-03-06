import { Header, SubTitle, Title } from "./style";
import github from "../images/github.svg";
import { ProjectTiles } from "./ProjectTiles";

const Portfolio = () => {
  return (
    <>
      <Header>
        <img src={github} alt="Logo Github" />
        <Title>Portfolio</Title>
        <SubTitle>My recent projects</SubTitle>
      </Header>
      <ProjectTiles />
    </>
  );
};

export default Portfolio;
