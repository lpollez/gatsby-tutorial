import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

export default function info() {
  return (
    <StaticQuery
      query={getSiteData}
      render={data => {
        const siteData = data.getSiteData.siteMetadata
        const { title, description, author, info } = siteData
        return (
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <h2>{author}</h2>
            <p>{info}</p>
          </div>
        )
      }}
    />
  )
}

const getSiteData = graphql`
  {
    getSiteData: site {
      siteMetadata {
        title
        description
        author
        info
      }
    }
  }
`
