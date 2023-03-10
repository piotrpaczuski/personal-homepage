import { Container, Header, Line, Skills, Skill } from "./style";

const SkillsList = ({header, skills}) => {
  return (
    <Container>
      <Header>{header}</Header>
      <Line />
      <Skills>
        {skills.map((skill) =>
          <Skill key={skill}>{skill}</Skill>
        )}
      </Skills>
    </Container>
  );
};

export default SkillsList;
