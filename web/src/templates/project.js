import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

import { ProjectBody } from "../components/common/ProjectBody"
class Project extends Component {
  render() {
    const { sanityProject: project } = this.props.data
    return (
      <Layout>
        <SEO
          title={project.projectTitle}
          description={project.projectTitle}
          keywords={[project.technologies]}
        />
        <ProjectBody project={project} />
      </Layout>
    )
  }
}

export const projectQuery = graphql`
  query pageBySlug($slug: String!) {
    sanityProject(slug: { current: { eq: $slug } }) {
      projectTitle
      slug {
        current
      }
      technologies
      _rawBody
      links {
        href
        title
      }
      images {
        alt
        image {
          asset {
            fluid {
              ...GatsbySanityImageFluid_noBase64
            }
          }
        }
      }
    }
  }
`

export default Project
