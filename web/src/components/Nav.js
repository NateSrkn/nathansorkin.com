import React, { useContext } from "react"
import { AboutContext } from "./layout"
import { Link } from "./Link"
import { motion } from "framer-motion"
import { WindowSizeContext } from "./common/WindowSizeTracker"
export const Nav = () => {
  const { position } = useContext(AboutContext)
  const { width, height } = useContext(WindowSizeContext)
  return (
    <nav>
      <motion.div
        className="nav-items"
        style={{ transform: `translateY(${width < 768 || height <= 550 ? 0 : position.y}px)` }}
      >
        <h1>
          Nathan <br />
          Sorkin
        </h1>

        <ul>
          <ol>
            <Link to="mailto:hello@nathansorkin.com?Subject=Let's Talk!" general>
              Email
            </Link>
          </ol>
          <ol>
            <Link to="https://www.linkedin.com/in/natesrkn" general>
              Linkedin
            </Link>
          </ol>
          <ol>
            <Link to="https://www.instagram.com/n8bytes/" general>
              Instagram
            </Link>
          </ol>
          <ol>
            <Link to="https://github.com/NateSrkn" general>
              Github
            </Link>
          </ol>
        </ul>
      </motion.div>
    </nav>
  )
}
