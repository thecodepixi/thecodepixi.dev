import React from "react"
import { Styled } from "theme-ui"
import { Link } from "gatsby"
import Twitter from "../../content/assets/icons/twitter-icon.svg"
import GitHub from "../../content/assets/icons/github-icon.svg"

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
      </ul>
      <ul id="social-links">
        <li>
          <a href="https://github.com/thecodepixi">
            <img id="github-icon" src={GitHub} alt="Twitter Icon" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/thecodepixi">
            <img id="twitter-icon" src={Twitter} alt="Twitter Icon" />
          </a>
        </li>
      </ul>
    </nav>
  )
}
