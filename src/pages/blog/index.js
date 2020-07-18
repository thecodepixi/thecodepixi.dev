import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"

export default ({ data }) => {
  let blogPosts = data.allMdx.edges
  console.log(blogPosts)

  return (
    <Layout>
      {blogPosts.map((post, index) => (
        <li key={index}>{post.node.frontmatter.title}</li>
      ))}
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            tags
            title
          }
          excerpt(pruneLength: 250)
          timeToRead
        }
      }
    }
  }
`
