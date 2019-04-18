import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    {/* <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p> */}
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">Hello World !</div>
        <div className="col-12 col-md-6">Hello World !</div>
      </div>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
