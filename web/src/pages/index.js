import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from "../components/Link"
import { PortableText } from '../components/PortableText'
import Layout from "../components/layout"
import { AnimatedText, Paragraph } from '../components/Text'
import SEO from "../components/seo"
import styled from 'styled-components'

const Wrapper = styled.div`

`

const Section = styled.div`
  margin-top: 35px;
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query pageQuery {
        allSanityAbout {
          nodes {
            Author
            links {
              title
              href
            }
            _rawBio
          }
        }
      }
  `)
  const about = data.allSanityAbout.nodes[1]
  return (
    <Layout>
      <SEO title="Home" />
      <Wrapper>
        <div style={{textTransform: 'uppercase', fontSize: '20px'}}>Hello, I'm</div>
        <AnimatedText type={`mainHeader`} heavy>{about.Author}</AnimatedText>
        <Paragraph style={{fontSize: '1.3rem'}}>
          <PortableText blocks={about._rawBio} />
        </Paragraph>
        <Section>
          {about.links.map(link => (
            <Link general to={link.href} key={link.title} column>{link.title}</Link>
          ))}
        </Section>
      </Wrapper>
    </Layout>
  )
}

export default IndexPage