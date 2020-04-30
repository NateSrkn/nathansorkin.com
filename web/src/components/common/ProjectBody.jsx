import React from "react"
import { ProjectDescription } from "./ProjectDescription"
import { ProjectImages } from "./ProjectImages"
import { useSpring, animated } from "react-spring"

export const ProjectBody = ({ project }) => {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  })
  return (
    <animated.div style={props}>
      <div id="project-root">
        <div className="root top-level">
          <section className="section">
            <ProjectDescription project={project} />
          </section>
        </div>
        {project.images.length ? (
          <div className="root top-level">
            <section className="section">
              <ProjectImages images={project.images} />
            </section>
          </div>
        ) : null}
      </div>
    </animated.div>
  )
}
