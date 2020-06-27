import React, { Fragment } from "react"
import { Container } from "theme-ui"
import Header from "../gatsby-theme-blog/components/header"

export default props => {
  return (
    <Fragment>
      <Header />
      <Container>{props.children}</Container>
    </Fragment>
  )
}
