import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import { PortableText } from '../components/PortableText'
import Layout from "../components/layout"
import { AnimatedText, Paragraph } from '../components/Text'
import SEO from "../components/seo"
import styled from 'styled-components'

import './index.css'

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
      <SEO title="Home" 
        description={`I stumbled upon my interest in development while in high school and I've truly enjoyed it ever since. There is something so satisfying about being able to create something entirely new and constantly learning new things in the process that really keeps me coming back for more.`} 
          keywords={[
            'nathan',
            'sorkin',
            'natesrkn',
            'n8bytes',
            'nathan sorkin',
            'nathansorkin',
            'portfolio',
            'react',
            'gatsby',
            'engineer'
          ]}
        />
      <Wrapper>
        <div style={{textTransform: 'uppercase', fontSize: '20px'}}>Hello, I'm</div>
        <AnimatedText type={`mainHeader`} heavy>{about.author}</AnimatedText>
        <div className="portable-text main">
          <PortableText blocks={about._rawBio} />
        </div>
      </Wrapper>
    </Layout>
  )
}

export default IndexPage