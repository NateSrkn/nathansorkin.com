import React from "react"
import { AnimatedText } from "../Text"
import { PortableText } from "./PortableText"
import { Link } from "../Link"

export const ProjectDescription = ({ project }) => {
  return (
    <React.Fragment>
      <h3 className="subheader">Project</h3>
      <AnimatedText type="mainHeader">{project.projectTitle}</AnimatedText>
      <div className="group">
        <h3 className="subheader">Technologies</h3>
        <div>{project.technologies.join(" / ")}</div>
      </div>
      <div className="group">
        <h3 className="subheader">Description</h3>
        <div className="portable-text">
          <PortableText blocks={project._rawBody} />
        </div>
      </div>
      <div className="group">
        {project.links.map(link => (
          <Link
            to={link.href}
            general={true}
            key={link.href}
            style={{ marginRight: "10pt" }}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </React.Fragment>
  )
}
