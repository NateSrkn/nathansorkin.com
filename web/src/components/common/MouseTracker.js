import React, { useState, createContext } from "react"

export const MousePositionContext = createContext({ x: 0, y: 0, target: null })

export const MouseTracker = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0, target: null })
  const handleMousePosition = (event) => {
    setMousePosition({ x: event.pageX, y: event.pageY, target: event.target })
  }
  return (
    <MousePositionContext.Provider value={mousePosition}>
      <div onMouseMove={handleMousePosition} aria-label="Container to track the mouse position">
        {children}
      </div>
    </MousePositionContext.Provider>
  )
}
