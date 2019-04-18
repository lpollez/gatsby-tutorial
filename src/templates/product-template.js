import React from 'react'
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default function({ data }) {
  const { title, price } = data.product
  const { description } = data.product.description
  return (
    <Layout>
      <h1>Single product template</h1>
      <Img fluid={data.product.image.fluid} />
      <h2>
        {title}
        <span style={{ marginLeft: '2rem', color: 'grey' }}>{price} €</span>
      </h2>
      <p>{description}</p>
      <Link to="/products/">Back to products</Link>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    product: contentfulProduct(id: { eq: $id }) {
      title
      description {
        description
      }
      price
      image {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`
