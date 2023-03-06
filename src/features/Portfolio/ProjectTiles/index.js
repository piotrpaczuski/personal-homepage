import { useSelector } from "react-redux";
import { selectTitle } from "../../repos/reposSlice";
import { Container, Text, Header, Links, Tile, Link } from "./style";

export const ProjectTiles = () => {
  const title = useSelector(selectTitle);

  return (
    <Container>
      {title.map(({ id, name, description, homepage, html_url }) => (
        <Tile key={id}>
          <div>
            <Header>{name}</Header>
            <Text>{description}</Text>
            <Links>
              <Text>Demo:</Text>
              <Link target="_blank" href={homepage}>
                <Link>{homepage}</Link>
              </Link>
              <Text>Code:</Text>
              <Link target="_blank" href={html_url}>
                <Link href={html_url}>{html_url}</Link>
              </Link>
            </Links>
          </div>
        </Tile>
      ))}
    </Container>
  );
};
