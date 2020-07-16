import React from "react"
import { Styled } from "theme-ui"
import { Link } from "gatsby"

export default props => {
  return (
    <nav id="navbar">
      <Styled.h1>TheCodePixi</Styled.h1>
      <ul>
        <li>
          <Styled.h2 as={Link} to="/blog">
            Blog
          </Styled.h2>
        </li>
        <li>
          <Styled.h2 as={Link} to="/portfolio">
            Portfolio
          </Styled.h2>
        </li>
        <li>
          <Styled.h2 as={Link} to="#contact">
            Contact
          </Styled.h2>
        </li>
        <li>
          <a href="https://github.com/thecodepixi">
            <i class="fab fa-github" id="github-icon" aria-hidden="true"></i>
            <span class="visible-hidden">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/thecodepixi">
            <i class="fab fa-twitter" id="twitter-icon" aria-hidden="true"></i>
            <span class="visible-hidden">GitHub</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}
