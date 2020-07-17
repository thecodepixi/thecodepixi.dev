/* @jsx jsx */
import React from "react"
import { Styled, jsx } from "theme-ui"
import { Link } from "gatsby"
import LinkClick from "../link-click"

export default props => {
  return (
    <nav id="navbar">
      <Styled.h2 as={Link} to="/" onClick={e => LinkClick(e)}>
        TheCodePixi
      </Styled.h2>
      <ul>
        <li>
          <Styled.h4 as={Link} to="/blog" onClick={e => LinkClick(e)}>
            Blog
          </Styled.h4>
        </li>
        <li>
          <Styled.h4 as={Link} to="/portfolio" onClick={e => LinkClick(e)}>
            Portfolio
          </Styled.h4>
        </li>
        <li>
          <Styled.h4
            as="a"
            href="https://shop.thecodepixi.dev"
            onClick={e => LinkClick(e)}
          >
            Shop
          </Styled.h4>
        </li>
        <li>
          <Styled.h4 as={Link} to="#contact" onClick={e => LinkClick(e)}>
            Contact
          </Styled.h4>
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
