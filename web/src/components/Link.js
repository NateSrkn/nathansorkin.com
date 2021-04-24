import React from "react"
import { Link as GatsbyLink } from "gatsby"
import styled, { css } from "styled-components"

export const Container = styled(GatsbyLink)`
  color: black;
  cursor: none;
  position: relative;
  z-index: 1;
  text-decoration: none;
  @media screen and (min-width: 768px) {
    &:after {
      content: "";
      position: absolute;
      width: 100%;
      z-index: -1;
      bottom: 0;
      left: 0;
      color: black;
      background: ${(props) => (props.color ? props.color : "black")};
    }

    ${(props) =>
      props.general &&
      css`
        &:after {
          height: 3px;
          width: 0;
          transition: width 0.5s;
        }

        &:hover {
          &:after {
            width: 100%;
            transition: width 0.5s;
          }
        }
      `}
  }

  ${(props) =>
    props.column &&
    css`
      &:not(:last-child) {
        margin-right: 15px;
      }
    `}
`

export const Link = ({ to, children, activeClass = null, ...props }) => {
  const newTab = to.startsWith("http")
  const internal = /^\/(?!\/)/.test(to)

  if (!internal)
    return (
      <Container
        as="a"
        href={to}
        target={newTab ? `_blank` : ""}
        rel={newTab ? `noopener noreferrer` : ""}
        className="hoverable"
        {...props}
      >
        {children}
      </Container>
    )

  return (
    <Container
      as={GatsbyLink}
      to={to}
      {...props}
      activeClassName={activeClass}
      className="hoverable"
    >
      {children}
    </Container>
  )
}
