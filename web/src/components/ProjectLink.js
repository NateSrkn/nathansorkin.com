import React from "react"
import styled from "styled-components"
import { Accordion } from "../components/common/Accordion"
import { PortableText } from "../components/common/PortableText"
import { Link } from "../components/Link"

const Container = styled("div")`
  padding: 60px 0;
  h3,
  h6,
  a,
  p {
    ::selection {
      color: white;
      background: ${(props) => props.color};
    }
  }

  a {
    color: ${(props) => props.color};
    text-decoration: none;
    font-family: "Cabin";
    font-size: calc(16px + (18 - 16) * ((100vw - 300px) / (1000 - 300)));
  }

  h6 {
    color: black;
  }


   h3 {
    color: ${(props) => props.color};
    }
  }
`

const ProjectInfo = styled("div")`
  p {
    font-size: calc(14px + (18 - 14) * ((100vw - 300px) / (1000 - 300)));
    margin: 10px 0;
    a {
      font-size: inherit;
    }
  }
`

const ProjectHeader = styled("div")`
  width: 100%;
`

const projectLink = ({ project, index }) => {
  const {
    projectTitle,
    projectType,
    projectColor: { hex },
    _rawBody,
    links,
  } = project

  return (
    <Container className="project-link" color={hex}>
      <Accordion.Toggle
        element={ProjectHeader}
        eventKey={index}
        className="project-header hoverable"
      >
        <h6>{projectType}</h6>
        <h3>{projectTitle}</h3>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={index} element={ProjectInfo} classNames="project-info">
        <PortableText blocks={_rawBody} />
        <div className="link-section">
          {links.map(({ title, href }) => (
            <Link to={href} column general color={hex} key={`${title}${index}`}>
              {title}
            </Link>
          ))}
        </div>
      </Accordion.Collapse>
    </Container>
  )
}

export default projectLink
