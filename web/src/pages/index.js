import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { PortableText } from "../components/common/PortableText"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectLink from "../components/ProjectLink"
import { Accordion } from "../components/common/Accordion"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
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
        }
      }
    }
  `)
  const about = data.allSanityAbout.nodes[1]
  const projects = data.allSanityProject.nodes
  const [activeEventKey, setActiveEventKey] = useState(null)

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
        <div className="hero-text">
          <div id="about-me">
            <PortableText blocks={about._rawBio} id="about-me" />
          </div>
        </div>
      </section>
      <section className="project-section">
        <Accordion activeEventKey={activeEventKey} onToggle={setActiveEventKey}>
          {projects.map((project, index) => (
            <ProjectLink project={project} key={index} index={index} />
          ))}
        </Accordion>
      </section>
    </Layout>
  )
}

export default IndexPage
