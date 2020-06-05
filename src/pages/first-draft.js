import React from "react"
import Layout from "../components/Layout"
import Bio from "../components/Bio"
import FeaturedPosts from "../components/FeaturedPosts"

export default () => {
  return (
    <Layout>
      <Bio />
      <FeaturedPosts />
    </Layout>
  )
}
