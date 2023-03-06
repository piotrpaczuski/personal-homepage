import styled from "styled-components";

export const Header = styled.div`
  margin-top: 72px;
  text-align: center;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.blackText};
  font-size: 30px;
  font-weight: 900;
  line-height: 36px;
  letter-spacing: 0.05em;
  margin: 12px 0 0 0;
  `;

export const SubTitle = styled.div`
  color: ${({ theme }) => theme.colors.blackText};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.05em;
  margin-top: 8px;
`;

