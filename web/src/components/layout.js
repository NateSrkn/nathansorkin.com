import React, { useCallback, useEffect } from "react"
import PropTypes from "prop-types"
import { Nav } from "./Nav"
import { Footer } from "./Footer"
import "../styles/main.scss"

import { useCursor } from "../hooks/useCursor"
import { useWindowSize } from "../hooks/useWindowSize"
const Layout = ({ children }) => {
  const alignNav = useCallback((nav) => {
    const about = document.querySelector("#about-me")
    nav.style.transform = `translateY(${about.getBoundingClientRect().y}px)`
  }, [])

  useCursor()

  const { width, height } = useWindowSize()
  useEffect(() => {
    const nav = document.querySelector(".nav-items")

    if (width >= 768 && height >= 400) {
      alignNav(nav)
      window.addEventListener("orientationchange", () => {
        alignNav(nav)
      })
    } else {
      nav.style.transform = `translateY(0px)`
    }
  }, [alignNav, width, height])

  return (
    <React.Fragment>
      <div className="cursor">
        <div className="border">
          <svg height="30" width="30">
            <circle cx="10" cy="10" r="9" strokeWidth="1"></circle>
          </svg>
        </div>
      </div>
      <div className="container">
        <Nav />
        <main>{children}</main>
        <Footer />
      </div>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
