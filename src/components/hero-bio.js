import React from "react"
import { Image, Styled } from "theme-ui"
import headshot from "../../content/assets/images/headshot.jpg"

export default () => {
  return (
    <section id="bio">
      <div id="bio-header">
        <Styled.h1 style={{ fontWeight: 400, marginBottom: 0 }}>
          Hi! I'm Emily,
        </Styled.h1>
        <Styled.h1 style={{ marginTop: 0, fontWeight: 400 }}>
          but you can call me Pixi...
        </Styled.h1>
        <Styled.p
          style={{ fontSize: "1.75em", lineHeight: "2em", fontWeight: 300 }}
        >
          I'm a Software Engineer and Web Developer, Community Organizer,
          Bootcamp Grad, Life-long Learner, Woman In Tech, Former Barista,
          Coffee and Tea Connoisseur, Consummate Crafter, and so much more...
        </Styled.p>
      </div>
      <Image src={headshot} variant="standard" id="headshot" />
    </section>
  )
}
