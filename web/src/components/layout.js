import React from "react"
import PropTypes from "prop-types"
import { Theme } from './Theme'
import { Nav } from './Nav'
import { Footer } from './Footer'
import '../styles/main.scss'

const Layout = ({ children }) => {
  return (
    <Theme>
      <div className="container">
        <Nav />
        <main>{children}</main>
        <Footer />
      </div>
    </Theme>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
