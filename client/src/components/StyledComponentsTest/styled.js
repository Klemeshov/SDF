import { createGlobalStyle, css, styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 24px;
`;

export const Kwadrat = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
`;

export const Hren = styled.div`
  width: 100px;
  height: ${55 + 66}px;
  background-color: red;
`;

const primaryButton = css`
  background-color: red;
  color: white;
  border-radius: 12px;
`;

export const Button = styled.button`
  cursor: pointer;

  ${(props) => {
    console.log(props);
    switch (props.variant) {
      case 'primary':
        return primaryButton;
      case 'secondary':
        return css`
          padding: 12px;
          background-color: yellow;
        `;
    }
  }};

  &:hover {
    opacity: 0.8;
  }
`;

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${({ theme }) => theme.colors.bg.default};
        color: ${({ theme }) => theme.colors.text.default};
    }
`;
