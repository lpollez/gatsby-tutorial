import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

export default function images({ data }) {
  const images = data.allFile.edges
  return (
    <Layout>
      <h1>All images</h1>
      {images.map(({ node }, i) => (
        <h2 key={i}>{node.relativePath}</h2>
      ))}
    </Layout>
  )
}

export const req = graphql`
  {
    allFile(filter: { size: { gt: 1000 } }) {
      totalCount
      edges {
        node {
          relativePath
        }
      }
    }
  }
`
