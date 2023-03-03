import styled from "styled-components";

export const Switcher = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-end;
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.grayText};
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
`;

export const Background = styled.div`
  width: 48px;
  background: ${({ theme }) => theme.colors.backgroundColor};
  border: 1px solid rgba(209, 213, 218, 0.3);
  border-radius: 30px;
  padding: 2px;
`;

export const Toggle = styled.div`
  width: 20px;
  height: 20px;
  background: ${({ theme }) => theme.colors.grayText};
  border-radius: 50%;
`;

export const Image = styled.img`
  position: relative;
  top: 8%;
  left: 15%;
`;
