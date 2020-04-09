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
    <div className="wrapper" style={{paddingTop: '3rem', borderTop: '3px solid black'}}>
      <div className="group">
        <AnimatedText>Featured</AnimatedText>
        <ProjectLinks>
          {general.featured.map(project => <ProjectLink key={project.projectTitle}><Link to={`/project/${project.slug.current}`} general activeClass='project-active'>{project.projectTitle}</Link></ProjectLink>)}
        </ProjectLinks>
      </div>
      <div className="group">
        <AnimatedText>Contact</AnimatedText>
        <div className="portable-text main">
          I’m currently looking for opportunities,
          reach out at <Link to="mailto:hello@nathansorkin.com?Subject=Let's Talk!" style={{color:'#3F61EA'}}>hello@nathansorkin.com</Link>
        </div>
        <div className="section" style={{marginTop: 15}}>
        {general.links.map(link => (
            <Link general to={link.href} key={link.title} column>{link.title}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}