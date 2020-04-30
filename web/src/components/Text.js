import React, { useEffect } from "react"
import { globalHistory } from "@reach/router"
import styled, { css } from "styled-components"
import anime from "animejs"

export const Header = styled.h1`
  font-size: 2.5rem;
  letter-spacing: 1.2px;
  text-transform: uppercase;

  .text-wrapper {
    position: relative;
    display: inline-block;
    padding-right: 0.05em;
    padding-bottom: 0.1em;
    overflow: hidden;
  }

  .letter {
    display: inline-block;
    line-height: 1em;
  }

  @media screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`

export const SubHeader = styled.h3`
  font-size: 1.2rem;
  letter-spacing: 1.2px;
  text-transform: uppercase;

  .text-wrapper {
    position: relative;
    display: inline-block;
    padding-right: 0.05em;
    padding-bottom: 0.1em;
    overflow: hidden;
  }

  .letter {
    display: inline-block;
    line-height: 1em;
  }

  ${props =>
    props.none &&
    css`
      margin: 0;
      padding: 0;
    `}
`

export const Paragraph = styled.p`
  line-height: 1.75rem;
  max-width: 450px;

  @media screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 16px;
  }
`

const HeadAnimation = ({ children, ...other }) => (
  <Header {...other}>
    <span className="text-wrapper">
      <span className="letters">{children}</span>
    </span>
  </Header>
)

const SubAnimation = ({ children, ...other }) => (
  <SubHeader {...other}>
    <span className="text-wrapper subheader">
      <span className="letters">{children}</span>
    </span>
  </SubHeader>
)

export const AnimatedText = ({ children, type, ...other }) => {
  const currentPage = globalHistory.location.pathname

  const wrapText = () => {
    let textWrapper = document.querySelectorAll(".text-wrapper .letters")
    for (let text of textWrapper) {
      if (
        text.parentElement.classList.value.includes("subheader") &&
        currentPage.includes("project")
      )
        return
      text.innerHTML = text.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      )
    }
  }

  const animateText = () => {
    wrapText()
    anime.timeline().add({
      targets: ".text-wrapper .letter",
      translateY: ["1.1em", 0],
      translateZ: 0,
      duration: 750,
      delay: anime.stagger(50),
    })

    if (currentPage.includes("project")) {
      anime.remove(".text-wrapper.subheader .letter")
      const subheaders = document.querySelectorAll(
        ".text-wrapper.subheader .letter"
      )
      for (let sub of subheaders) {
        sub.style.transform = null
      }
    }
  }

  useEffect(() => {
    animateText()
  })

  switch (type) {
    case "mainHeader":
      return <HeadAnimation children={children} {...other} />
    default:
      return <SubAnimation children={children} {...other} />
  }
}
