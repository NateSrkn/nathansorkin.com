import React from "react"
import { Link as GatsbyLink } from "gatsby"
import styled, { css } from "styled-components"

export const Container = styled(GatsbyLink)`
  color: ${props => props.theme.colors.black};
  position: relative;
  cursor: pointer;
  z-index: 1;
  text-decoration: none;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    z-index: -1;
    bottom: 0;
    left: 0;
    background-color: ${props => props.theme.colors.blue};
  }

  &.project-active {
    &:after {
      height: 100%;
      transform: scaleX(1);
    }
  }

  ${props =>
    props.general &&
    css`
      &:after {
        height: 3px;
        transition: height 0.5s;
      }

      &:hover {
        &:after {
          height: 100%;
          transition: height 0.5s;
        }
      }
    `}

  ${props =>
    props.column &&
    css`
      &:not(:last-child) {
        margin-right: 15px;
      }
      font-size: 20px;
    `}
`

export const Link = ({ to, children, activeClass, ...props }) => {
  const newTab = to.startsWith("http")
  const internal = /^\/(?!\/)/.test(to)

  if (!internal)
    return (
      <Container
        as="a"
        href={to}
        target={newTab && `_blank`}
        rel={newTab && `noopener noreferrer`}
        {...props}
      >
        {children}
      </Container>
    )

  return (
    <Container as={GatsbyLink} to={to} {...props} activeClassName={activeClass}>
      {children}
    </Container>
  )
}
