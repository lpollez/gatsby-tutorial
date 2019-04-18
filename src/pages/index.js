import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import { Button } from '../components/styles/Button'
import { FaReact } from 'react-icons/fa'
import Info from '../components/info'
import Dude from '../components/dude'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Info />
    <Dude />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/images/">Go to images page</Link>
    <FaReact className="icon" />
    <Button>Click me !</Button>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/testing/">Go to testing page</Link>
    <Link to="/products/">Go to products page</Link>
  </Layout>
)

export default IndexPage
