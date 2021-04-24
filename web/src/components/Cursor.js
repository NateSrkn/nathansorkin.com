import React, { useContext, useEffect } from "react"
import { motion, useMotionValue } from "framer-motion"
import { MousePositionContext } from "./common/MouseTracker"

export const Cursor = () => {
  const { x, y, target } = useContext(MousePositionContext)
  const isScaled = target?.matches("a") || target?.closest(".hoverable")
  const [mouseX, mouseY] = [useMotionValue(x), useMotionValue(y)]

  useEffect(() => {
    mouseX.set(x - 10)
    mouseY.set(y - 10)
  }, [mouseX, mouseY, x, y])

  return (
    <motion.div
      className="cursor"
      style={{
        translateY: mouseY,
        translateX: mouseX,
      }}
      animate={{ scale: isScaled ? 2 : 1 }}
    >
      <motion.svg height="30" width="30">
        <motion.circle cx="10" cy="10" r="9" strokeWidth="1"></motion.circle>
      </motion.svg>
    </motion.div>
  )
}
