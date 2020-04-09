import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'
import { AnimatedText, SubHeader, Paragraph } from '../components/Text'
import { Link } from '../components/Link'
import { PortableText } from '../components/PortableText'
import { graphql } from 'gatsby'

const Container = styled.div`
  display: flex;

  @media screen and (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`

const Wrapper = styled.div`
  position: relative;
  flex: 1;

  &:last-child {
    margin-bottom: 25px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    &:not(:last-child) {
      padding-right: 30px;
    }
  }
`

const Section = styled.div`
  &:not(:first-child) {
    margin-top: 15px;
  }

  p {
    a {
      color: ${props => props.theme.colors.blue};
        text-decoration: none;
    }
  }
`

const List = styled.ul`
  list-style-type: none;
  display: flex;
`

const ListItem = styled.li`
  position: relative;
  &:not(:last-child) {
    &:after {
      content: '/';
      padding: 0 5px;
    }
  }
`

class Project extends Component {
  render() {
    const project = this.props.data.sanityProject
    return (
      <Layout>
      <SEO title={project.projectTitle} 
          description={project.projectTitle}
          keywords={[
            project.technologies
          ]} />
      <div className="wrapper main">
        <div className="group">
          <h3 className="subheader">Project</h3>
          <AnimatedText type="mainHeader">{project.projectTitle}</AnimatedText>
        </div>
        <div className="group">
          <section className="section">
            <h3 className="subheader">Technologies</h3>
            <ul className="list flex">
              {project.technologies.map(tech => (
                <ListItem key={tech}>{tech}</ListItem>
              ))}
            </ul>
          </section>
          <section className="section">
            <h3 className="subheader">Description</h3>
            <div className="portable-text">
              <PortableText blocks={project._rawBody} />
            </div>
          </section>
          <section className="section">
            {project.links.map(link => (
              <Link to={link.href} style={{marginRight: '15px'}} general={true} key={link.title}>{link.title}</Link>
            ))}
          </section>
        </div>
      </div>
    </Layout>
    )
  }
}

export const projectQuery = graphql`
  query pageBySlug($slug: String!) {
    sanityProject(slug: { current: { eq: $slug }}) {
      projectTitle,
      slug {
        current
      }
      technologies
      _rawBody,
      links {
        href,
        title
      }
    }
  }
`

export default Project