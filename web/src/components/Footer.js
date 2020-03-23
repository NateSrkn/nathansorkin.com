import React from 'react'
import styled from 'styled-components'
import { Link } from './Link'
import { AnimatedText, Paragraph } from './Text'
import { useStaticQuery, graphql } from "gatsby"

const Container = styled.div`
  border-top: 3px solid ${props => props.theme.colors.black};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`

const Wrapper = styled.div`
  position: relative;
  flex: 1;
  margin: 60px 0;

  @media screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    margin: 15px 0;
  }
`

const ProjectLinks = styled.ul`
  list-style: none;
`

const ProjectLink = styled.li`
  text-transform: uppercase;
  font-size: 2rem;
  &:not(:first-child) {
    margin: 15px 0;
  }

`

const Section = styled.div`
  margin-top: 15px;
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

  const general = data.sanityGeneral
  return (
    <Container>
      <Wrapper>
        <AnimatedText>Featured</AnimatedText>
        <ProjectLinks>
          {general.featured.map(project => <ProjectLink key={project.projectTitle}><Link to={`/project/${project.slug.current}`} general activeClass='project-active'>{project.projectTitle}</Link></ProjectLink>)}
        </ProjectLinks>
      </Wrapper>
      <Wrapper>
        <AnimatedText>Contact</AnimatedText>
        <Paragraph style={{fontSize: '1.3rem'}}>
          I’m currently looking for opportunities,
          reach out at <Link to="mailto:hello@nathansorkin.com?Subject=Let's Talk!" style={{color:'#3F61EA'}}>hello@nathansorkin.com</Link>
        </Paragraph>
        <Section>
        {general.links.map(link => (
            <Link general to={link.href} key={link.title} column>{link.title}</Link>
          ))}
        </Section>
      </Wrapper>
    </Container>
  )
}