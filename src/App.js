import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Greeting from './components/Greeting';

const GlobalStyle = createGlobalStyle`
  /* Reset box-sizing to border-box */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin and padding */
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
    padding: 0;
  }

  /* Remove list styles */
  ol,
  ul {
    list-style: none;
  }

  /* Set default font size and line height */
  html {
    font-size: 62.5%;
    line-height: 1.4;
  }

  /* Set default font family */
  body {
    font-family: sans-serif;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ period }) => {
    switch(period) {
      case 'morning':
        return '#F9A825'; // Amarelo
      case 'afternoon':
        return '#DD783D'; // lilas
      case 'evening':
        return '#191919'; // Preto
      default:
        return '#fff'; // Branco (caso não seja reconhecido um período)
    }
  }};
`;

function App() {
  const currentHour = new Date().getHours();

  let period = 'morning'; // Define um período padrão como "manhã"
  if (currentHour >= 12 && currentHour < 18) {
    period = 'afternoon'; // Define o período como "tarde" se estiver entre meio-dia e 6pm
  } else if (currentHour >= 18 || currentHour < 6) {
    period = 'evening'; // Define o período como "noite" se for 6pm ou mais tarde, ou antes das 6am
  }

  return (
    <Container period={period}>
      <GlobalStyle />
      <Greeting />
    </Container>
  );
}

export default App;
