import React from "react"
import { Container } from "theme-ui"
import Header from "./Header"

export default props => {
  return (
    <Container>
      <Header />
      {props.children}
    </Container>
  )
}
