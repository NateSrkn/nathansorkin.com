import React from "react"
import { ThemeProvider } from "styled-components"

export const Theme = ({ children }) => (
  <React.Fragment>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </React.Fragment>
)

const theme = {
  colors: {
    black: "#000",
    blue: "#3F61EA",
  },
  fonts: {
    base: "Stolzl",
  },
  breakpoints: {
    mobile: "550px",
    tablet: "768px",
    desktop: "1024px",
  },
}
