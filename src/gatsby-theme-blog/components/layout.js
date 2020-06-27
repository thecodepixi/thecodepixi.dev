import React from "react"
import { Styled, Container } from "theme-ui"
import Header from "./header"
import useBlogThemeConfig from "gatsby-theme-blog/src/hooks/configOptions"
import Helmet from "react-helmet"

export default ({ children, ...props }) => {
  const blogThemeConfig = useBlogThemeConfig()
  const { webfontURL } = blogThemeConfig

  return (
    <Styled.root>
      <Helmet>
        <link rel="stylesheet" href={webfontURL} />
      </Helmet>
      <Header {...props} />
      <Container>{children}</Container>
    </Styled.root>
  )
}
