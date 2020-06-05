import React from "react"
import { Link } from "gatsby"
import { Styled, NavLink } from "theme-ui"

export default ({ children }) => {
  return (
    <header id="header-nav">
      <Styled.h1 as={Link} href="/">
        TheCodePixi
      </Styled.h1>
      <nav>
        <NavLink href="/blog">Blog</NavLink>
        <NavLink href="#projects">Portfolio</NavLink>
        <NavLink href="#community">Community</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </nav>
      {children}
    </header>
  )
}
