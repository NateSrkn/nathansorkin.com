import React, { useRef, useEffect, useContext } from "react"
import { PortableText } from "./common/PortableText"
import { WindowSizeContext } from "./common/WindowSizeTracker"
import { AboutContext } from "./layout"
export const About = ({ bio }) => {
  const { setPosition } = useContext(AboutContext)
  const { height, width } = useContext(WindowSizeContext)
  const aboutRef = useRef(null)

  useEffect(() => {
    setPosition({
      x: aboutRef.current.getBoundingClientRect().x,
      y: aboutRef.current.getBoundingClientRect().y,
    })
  }, [setPosition, height, width])

  return (
    <div className="hero-text">
      <div id="about-me" ref={aboutRef}>
        <PortableText blocks={bio} id="about-me" />
      </div>
    </div>
  )
}
