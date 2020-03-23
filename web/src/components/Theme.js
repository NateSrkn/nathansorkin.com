import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

export const Theme = ({ children }) => (
  <React.Fragment>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </React.Fragment>
)

const theme = {
  colors: {
    black: '#000',
    blue: '#3F61EA'
  },
  fonts: {
    base: 'Stolzl'
  },
  breakpoints: {
    mobile: '550px',
    tablet: '768px',
    desktop: '1024px',
  }
}

const GlobalStyle = createGlobalStyle`
  @import url('https://use.typekit.net/ord5qwu.css');

  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
    width: 100%;
    font-family: 'Stolzl';
  }

  body { 
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (min-width: 550px) and (max-width: 1024px) {
      display: block;
      margin: 15px;
    }

    @media screen and (max-width: 550px) {
      display: flex;
      margin-top: 20px;
      justify-content: flex-start;
    }
  }
`