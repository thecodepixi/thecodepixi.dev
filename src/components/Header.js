import React from "react"
import { Styled, NavLink, Divider } from "theme-ui"

export default ({ children }) => {
  return (
    <div id="header-nav">
      <Styled.h1 href="/">TheCodePixi</Styled.h1>
      <NavLink href="/blog">Blog</NavLink>
      <NavLink href="#about">About</NavLink>
      <NavLink href="#projects">Portfolio</NavLink>
      <NavLink href="#contact">Contact</NavLink>
      {children}
    </div>
  )
}
