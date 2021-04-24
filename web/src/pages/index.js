import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectLink from "../components/ProjectLink"
import { Accordion } from "../components/common/Accordion"
import { About } from "../components/About"

const IndexPage = ({ data }) => {
  const about = data.allSanityAbout.nodes[1]
  const projects = data.allSanityProject.nodes
  const [activeEventKey, setActiveEventKey] = useState(null)

  useEffect(() => {}, [])
  return (
    <Layout>
      <SEO
        title="Home"
        description={`I stumbled upon my interest in development while in high school and I've truly enjoyed it ever since. There is something so satisfying about being able to create something entirely new and constantly learning new things in the process that really keeps me coming back for more.`}
        keywords={[
          "nathan",
          "sorkin",
          "natesrkn",
          "n8bytes",
          "nathan sorkin",
          "nathansorkin",
          "portfolio",
          "react",
          "gatsby",
          "engineer",
        ]}
      />

      <section className="hero-section">
        <About bio={about._rawBio} />
      </section>
      <section className="project-section">
        <Accordion activeEventKey={activeEventKey} onToggle={setActiveEventKey}>
          {projects
            .sort((a, b) => a.order - b.order)
            .map((project, index) => (
              <ProjectLink project={project} key={index} index={index} />
            ))}
        </Accordion>
      </section>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query pageQuery {
    allSanityAbout {
      nodes {
        author
        _rawBio
      }
    }
    allSanityProject {
      nodes {
        projectTitle
        technologies
        _rawBody
        projectType
        projectColor {
          hex
        }
        links {
          title
          href
        }
        order
      }
    }
  }
`
