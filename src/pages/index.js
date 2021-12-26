import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import Layout from "../components/layout"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata{
                author
            }
        }
    }
    `)
  return (
    <Layout>
      <h1>Hello</h1>
      <h2>I'm {data?.site?.siteMetadata?.author}, a full stack developer from Pakistan </h2>
      <p>Need a developer? <Link to="/contact">Contact me</Link></p>
    </Layout>
  )
}
export default IndexPage