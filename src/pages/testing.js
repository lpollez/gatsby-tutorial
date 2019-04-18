import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

export default function testing() {
  return (
    <Layout>
      <div>Hello !</div>
      <Link to="/">Go to home page</Link>
    </Layout>
  )
}
