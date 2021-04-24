import React, { useState, createContext } from "react"
import { Nav } from "./Nav"
import { Footer } from "./Footer"
import "../styles/main.scss"

import { MouseTracker } from "./common/MouseTracker"
import { WindowSizeTracker } from "./common/WindowSizeTracker"
import { Cursor } from "./Cursor"
export const AboutContext = createContext({ position: { x: 0, y: 0 }, setPosition: null })
const Layout = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  return (
    <WindowSizeTracker>
      <MouseTracker>
        <AboutContext.Provider value={{ position, setPosition }}>
          <div className="container">
            <Nav />
            <main>{children}</main>
            <Footer />
          </div>
          <Cursor />
        </AboutContext.Provider>
      </MouseTracker>
    </WindowSizeTracker>
  )
}

export default Layout
