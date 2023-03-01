import { StyledImg, StyledInfoContainer } from "./styled";
import img from "../Images/authorPhoto.jpg";

export const Author = () => {
    return (
      <>
        <StyledInfoContainer>
          <StyledImg src={img} alt="" />
          
            <p>THIS IS</p>
            <h2>Piotr Paczuski</h2>
            <p>Lorem</p>
            <button>Hire me</button>
          
        </StyledInfoContainer>
      </>
    );
}