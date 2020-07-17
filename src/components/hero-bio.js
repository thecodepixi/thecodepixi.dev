/* @jsx jsx */
import React from "react"
import { Image, Styled, jsx } from "theme-ui"
import headshot from "../../content/assets/images/headshot.jpg"

export default () => {
  return (
    <section id="bio">
      <div id="bio-header">
        <Styled.h1 sx={{ fontWeight: 400 }}>
          Hi! I'm Emily,
          <br />
          but you can call me Pixi...
        </Styled.h1>
        <Styled.p sx={{ fontSize: [1, 3, 4] }}>
          I'm a Software Engineer and Web Developer, Community Organizer,
          Bootcamp Grad, Life-long Learner, Woman In Tech, Former Barista,
          Coffee and Tea Connoisseur, Consummate Crafter, and so much more...
        </Styled.p>
      </div>
      <Image src={headshot} variant="standard" id="headshot" />
    </section>
  )
}
