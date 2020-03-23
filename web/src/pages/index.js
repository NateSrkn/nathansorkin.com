import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import { PortableText } from '../components/PortableText'
import Layout from "../components/layout"
import { AnimatedText, Paragraph } from '../components/Text'
import SEO from "../components/seo"
import styled from 'styled-components'

const Wrapper = styled.div`

`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query pageQuery {
        allSanityAbout {
          nodes {
            author
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
        <AnimatedText type={`mainHeader`} heavy>{about.author}</AnimatedText>
        <Paragraph style={{fontSize: '1.3rem'}}>
          <PortableText blocks={about._rawBio} />
        </Paragraph>
      </Wrapper>
    </Layout>
  )
}

export default IndexPage