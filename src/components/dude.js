import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

const getDude = graphql`
  {
    file(relativePath: { eq: "bcg-images/person.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default function dude({ data }) {
  return (
    <StaticQuery
      query={getDude}
      render={data => {
        console.log(data)
        return (
          <div style={{ maxWidth: 300 }}>
            <Img fluid={data.file.childImageSharp.fluid} alt="" />
          </div>
        )
      }}
    />
  )
}
