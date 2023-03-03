import { Switcher, Image, Background, Text, Toggle } from "./styled";
import sun from "../images/sun.svg";

const SwitchButton = () => {
  return (
    <Switcher>
      <Text>Dark Mode Off</Text>
      <Background>
        <Toggle>
          <Image src={sun} />
        </Toggle>
      </Background>
    </Switcher>
  );
};

export default SwitchButton;