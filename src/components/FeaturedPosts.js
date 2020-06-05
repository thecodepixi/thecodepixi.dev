import React from "react"
import { Styled } from "theme-ui"
import { useStaticQuery, graphql, Link } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    {
      allBlogPost {
        edges {
          node {
            slug
            excerpt
            date
            title
          }
        }
      }
    }
  `)

  const renderPosts = () => {
    data.allBlogPost.edges.forEach(post => {
      return (
        <section id="featured-post">
          <p>{post.node.tile}</p>
        </section>
      )
    })
  }

  return <section id="featured-blog-posts">{renderPosts}</section>
}
