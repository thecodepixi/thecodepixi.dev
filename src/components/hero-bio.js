import React from "react"
import { Image, Styled, Container } from "theme-ui"
import headshot from "../../content/assets/images/headshot.jpg"

export default () => {
  return (
    <section id="bio">
      <div id="bio-header">
        <Styled.h1 style={{ fontWeight: 400, marginBottom: 0 }}>
          Hi! I'm Emily,
        </Styled.h1>
        <Styled.h2 style={{ marginTop: 0, fontWeight: 400 }}>
          but you can call me Pixi...
        </Styled.h2>
      </div>
      <Image src={headshot} variant="standard" />
    </section>
  )
}
