import React from 'react'
import { Link, Container as LinkContainer } from './Link'
import styled from 'styled-components'

const Container = styled.nav`
  padding-bottom: 55px;
  ${LinkContainer} {
    text-transform: uppercase;
    font-weight: bold;

    &.nav-active {
      &:after {
        transform: scaleX(1);
      }
    }
    &:not(:last-child) {
      margin-right: 15px;
    }

    &:after {
      transform: scaleX(0);
      transform-origin: bottom right;
      transition: transform 0.5s;
      height: 3px;
    }

    &:hover {
      &:after {
          transform: scaleX(1);
          transform-origin: bottom left;
      }
    }
  }
`
export const Nav = () => (
  <nav>
    <Link to="/" activeClass="nav-active">Home</Link>
    {/* <Link to="/about" activeClass="nav-active">About</Link>
    <Link to="/projects" activeClass="nav-active">Projects</Link> */}
  </nav>
)