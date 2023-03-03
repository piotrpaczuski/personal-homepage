import {
  Button,
  Container,
  Content,
  Description,
  Header,
  AuthorImage,
  ThisIs,
  MailIcon,
  ButtonText,
} from "./style";
import authorImg from "../images/authorPhoto.jpg";
import mail from "../images/mail.svg";

const AboutAuthor = () => {
  return (
    <Container>
      <AuthorImage src={authorImg} />
      <Content>
        <ThisIs>This is</ThisIs>
        <Header>Piotr Paczuski</Header>
        <Description>
          👨🏻‍💻 I'm a passionate Frontend Developer in love with React,currently
          looking for new job opportunities.
        </Description>
        <Button>
            <MailIcon src={mail}/>
            <ButtonText>Hire Me</ButtonText>
        </Button>
      </Content>
    </Container>
  );
};

export default AboutAuthor;
