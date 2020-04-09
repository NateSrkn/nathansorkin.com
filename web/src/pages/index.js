import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import { PortableText } from '../components/PortableText'
import Layout from "../components/layout"
import { AnimatedText, Paragraph } from '../components/Text'
import SEO from "../components/seo"
import styled from 'styled-components'

import './index.css'

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
      <div className="wrapper main">
        <div className="group">
          <h3 className="subheader">Hello, I'm</h3>
          <AnimatedText type={`mainHeader`}>{about.author}</AnimatedText>
       
        </div>
        <div className="group">
        <div className="portable-text main">
            <PortableText blocks={about._rawBio} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage