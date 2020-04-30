import React from "react"
import styled from "styled-components"
import { Link } from "./Link"
import { AnimatedText } from "./Text"
import { useStaticQuery, graphql } from "gatsby"

const ProjectLinks = styled.ul`
  list-style: none;
`

const ProjectLink = styled.li`
  text-transform: uppercase;
  font-size: 1.75rem;
  &:not(:first-child) {
    margin: 15px 0;
  }
`
export const Footer = () => {
  const data = useStaticQuery(graphql`
    query aboutQuery {
      sanityGeneral {
        links {
          href
          title
        }
        _rawContactBlurb
        featured {
          projectTitle
          slug {
            current
          }
        }
      }
    }
  `)

  const { sanityGeneral } = data
  return (
    <div
      className="root"
      style={{ paddingTop: "3rem", borderTop: "3px solid black" }}
    >
      <section className="section flex">
        <div className="sub-section">
          <AnimatedText>Featured</AnimatedText>
          <ProjectLinks>
            {sanityGeneral.featured.map(project => (
              <ProjectLink key={project.projectTitle}>
                <Link
                  to={`/project/${project.slug.current}`}
                  general
                  activeClass="project-active"
                >
                  {project.projectTitle}
                </Link>
              </ProjectLink>
            ))}
          </ProjectLinks>
        </div>
        <div className="sub-section">
          <AnimatedText>Contact</AnimatedText>
          <p className="portable-text main">
            I’m currently looking for opportunities, reach out at{" "}
            <Link
              to="mailto:hello@nathansorkin.com?Subject=Let's Talk!"
              style={{ color: "#3F61EA" }}
            >
              hello@nathansorkin.com
            </Link>
          </p>
          <div style={{ marginTop: 15 }}>
            {sanityGeneral.links.map(link => (
              <Link general to={link.href} key={link.title} column>
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
