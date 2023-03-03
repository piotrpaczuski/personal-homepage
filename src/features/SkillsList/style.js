import styled from "styled-components";
import pointOfList from "../images/pointOfList.svg";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.white};
  max-width: 1216px;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  margin-top: 73px;
  padding: 32px;
`;

export const Header = styled.header`
  color: ${({ theme }) => theme.colors.blackText};
  font-size: 30px;
  font-weight: 900;
  line-height: 36px;
  letter-spacing: 0.05em;
  margin-bottom: 13px;
`;

export const Line = styled.div`
  border: 1px solid rgba(209, 213, 218, 0.3);
  margin-bottom: 32px;
`;

export const Skills = styled.ul`
  list-style: url(${pointOfList});
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 8px 115px;
`;

export const Skill = styled.li`
  color: ${({ theme }) => theme.colors.grayText};
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0.05em;
  padding-left: 16px;
`;
