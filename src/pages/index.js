import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello</h1>
      <h2>I'm Muhammad Bilal, a full stack developer from Pakistan </h2>
      <p>Need a developer? <Link to="/contact">Contact me</Link></p>
    </Layout>
  )
}
export default IndexPage