import React from "react"
import { Styled, NavLink } from "theme-ui"

export default () => {
  return (
    <div id="header-nav">
      <Styled.h1>TheCodePixi</Styled.h1>
      <NavLink href="/blog">Blog</NavLink>
      <NavLink href="#about">About</NavLink>
      <NavLink href="#projects">Portfolio</NavLink>
      <NavLink href="#contact">Contact</NavLink>
    </div>
  )
}
