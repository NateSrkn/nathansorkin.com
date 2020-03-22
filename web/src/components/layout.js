import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'
import { Theme } from './Theme'
import { Nav } from './Nav'
import { Footer } from './Footer'

const Container = styled.div`
  max-width: 1136px;
  height: 100%;
  margin: 0 auto;
  padding: 0 1.0875rem 1.45rem;

`

const Layout = ({ children }) => {
  return (
    <Theme>
      <Container>
        <Nav />
        <main style={{minHeight: 450}}>{children}</main>
        <Footer />
      </Container>
    </Theme>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout