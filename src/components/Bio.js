import React from "react"
import { Styled, Container, Divider } from "theme-ui"
import headshot from "../assets/headshot.jpg"

export default () => {
  return (
    <Container id="homepage-bio">
      <div id="headshot">
        <img src={headshot} alt="Emily Harber headshot" />
      </div>
      <Styled.p>
        Former Barista, Cafe Manager, and beverage-industry beacon turned
        Software Engineer.{" "}
      </Styled.p>{" "}
      <Styled.p>
        I first dabbled in code in 2015, and became convinced that the tech
        industry wasn't for "people like me". After much encouragement from
        friends and colleagues, I got back to it in 2018, started with the
        freeCodeCamp "Responsive Web Design" certification and never looked
        back. I recently completed the Flatiron School Software Engineering
        Certificate program.
      </Styled.p>{" "}
      <Styled.p>
        Programming has become the thing I am *most* passionate about, and the
        thing I now cannot imagine *not* doing. I love working with diverse
        teams to solve complex problems that help people live better lives
        through tech.
      </Styled.p>
      <Divider />
    </Container>
  )
}
