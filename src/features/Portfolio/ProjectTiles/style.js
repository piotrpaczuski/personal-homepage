import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-top: 24px;
`;

export const Tile = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 56px;
  max-width: 592px;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border: 6px solid rgba(209, 213, 218, 0.3);
  border-radius: 4px;
`;

export const Header = styled.div`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0.05em;
  margin-bottom: 24px;
`;

export const Text = styled.div`
  color: ${({ theme }) => theme.colors.grayText};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.05em;
`;

export const Links = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px;
  margin-top: 24px;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.darkBlue};
  text-decoration: none;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.05em;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darBlueOpacity};
`;
