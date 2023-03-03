import { Container, Header, Line, Skills, Skill } from "./style";

const SkillsList = ({header, skills}) => {
  return (
    <Container>
      <Header>{header}</Header>
      <Line />
      <Skills>
        {skills.map((skill) =>
          <Skill>{skill}</Skill>
        )}
      </Skills>
    </Container>
  );
};

export default SkillsList;
