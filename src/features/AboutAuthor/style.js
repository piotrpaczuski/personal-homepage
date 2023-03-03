import styled from "styled-components";

export const Container = styled.div`
  max-width: 1089px;
  display: flex;
  align-items: center;
  gap: 72px;
`;

export const AuthorImage = styled.img`
  max-width: 384px;
  max-height: 384px;
  border-radius: 50%;
`;

export const Content = styled.div`
  max-width: 633px;
`;

export const ThisIs = styled.div`
  color: ${({ theme }) => theme.colors.grayText};
  font-size: 12px;
  font-weight: 700;
  line-height: 1.3;
  text-transform: uppercase;
  margin-bottom: 12px;
`;

export const Header = styled.header`
  color: ${({ theme }) => theme.colors.blackText};
  font-size: 38px;
  font-weight: 900;
  line-height: 46px;
  letter-spacing: 0.05em;
  margin-bottom: 35px;
`;

export const Description = styled.div`
  color: ${({ theme }) => theme.colors.grayText};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.05em;
  margin-bottom: 32px;
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.darkBlue};
  padding: 12px 16px;
  border: 1px solid rgba(209, 213, 218, 0.3);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const MailIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const ButtonText = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.05em;
`;
