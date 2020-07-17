/* @jsx jsx */
import React from "react"
import { Styled, jsx } from "theme-ui"
import { Link } from "gatsby"

export default props => {
  return (
    <nav id="navbar">
      <Styled.h2>TheCodePixi</Styled.h2>
      <ul>
        <li>
          <Styled.h3 as={Link} to="/blog">
            Blog
          </Styled.h3>
        </li>
        <li>
          <Styled.h3 as={Link} to="/portfolio">
            Portfolio
          </Styled.h3>
        </li>
        <li>
          <Styled.h3 as={Link} to="#contact">
            Contact
          </Styled.h3>
        </li>
        <li>
          <a href="https://github.com/thecodepixi">
            <i
              className="fab fa-github"
              id="github-icon"
              aria-hidden="true"
            ></i>
            <span className="visible-hidden">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/thecodepixi">
            <i
              className="fab fa-twitter"
              id="twitter-icon"
              aria-hidden="true"
            ></i>
            <span className="visible-hidden">GitHub</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}
