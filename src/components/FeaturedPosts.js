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
            date(formatString: "MMMM Do, YYYY")
            title
          }
        }
      }
    }
  `)

  const createPosts = () => {
    for (let post of data.allBlogPost.edges) {
      return (
        <section className="featured-post">
          <Styled.h3 as={Link} href={post.node.slug}>
            {post.node.title}
          </Styled.h3>
          <Styled.p>{post.node.date}</Styled.p>
          <Styled.p>{post.node.excerpt}</Styled.p>
        </section>
      )
    }
  }

  return (
    <section id="featured-blog-posts">
      <Styled.h2>Featured Blog Posts:</Styled.h2>
      {createPosts()}
    </section>
  )
}
