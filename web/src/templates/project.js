import React, { Component } from 'react'
import Layout from '../components/Layout'
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
      <SEO title={project.projectTitle}/>
      <Container>
        <Wrapper>
          <SubHeader none>Project</SubHeader>
          <AnimatedText type="mainHeader">{project.projectTitle}</AnimatedText>
        </Wrapper>
        <Wrapper>
          <Section>
            <SubHeader none>Technologies</SubHeader>
            <List>
              {project.technologies.map(tech => (
                <ListItem key={tech}>{tech}</ListItem>
              ))}
            </List>
          </Section>
          <Section>
            <SubHeader none>Description</SubHeader>
            <Paragraph>
              <PortableText blocks={project._rawBody} />
            </Paragraph>
          </Section>
          <Section>
            {project.links.map(link => (
              <Link to={link.href} style={{marginRight: '15px'}} general={true} key={link.title}>{link.title}</Link>
            ))}
          </Section>
        </Wrapper>
      </Container>
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