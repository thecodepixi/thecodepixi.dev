import React from "react"
import { Link } from "gatsby"
import { useColorMode, Styled, Container } from "theme-ui"
import Switch from "gatsby-theme-blog/src/components/switch"
import sun from "gatsby-theme-blog/assets/sun.png"
import moon from "gatsby-theme-blog/assets/moon.png"
import useBlogThemeConfig from "gatsby-theme-blog/src/hooks/configOptions"

const iconCss = [{ pointerEvents: `none`, margin: 4 }]

const checkedIcon = (
  <img
    alt="moon indicating dark mode"
    src={moon}
    width="16"
    height="16"
    role="presentation"
    css={iconCss}
  />
)

const uncheckedIcon = (
  <img
    alt="sun indicating light mode"
    src={sun}
    width="16"
    height="16"
    role="presentation"
    css={iconCss}
  />
)

export default ({ children, title, ...props }) => {
  const blogThemeConfig = useBlogThemeConfig()

  const { disableThemeUiStyling } = blogThemeConfig

  var switchToggle
  if (!disableThemeUiStyling) {
    const [colorMode, setColorMode] = useColorMode()
    const isDark = colorMode === `dark`
    const toggleColorMode = e => {
      setColorMode(isDark ? `light` : `dark`)
    }
    switchToggle = (
      <Switch
        aria-label={`Toggle dark mode ${isDark ? `off` : `on`}`}
        checkedIcon={checkedIcon}
        uncheckedIcon={uncheckedIcon}
        checked={isDark}
        onChange={toggleColorMode}
      />
    )
  } else {
    switchToggle = null
  }
  return (
    <Container>
      <header id="header-nav">
        <Styled.h1 as={Link} href="/">
          TheCodePixi
        </Styled.h1>
        <nav>
          <Styled.a as={Link} href="/blog">
            Blog
          </Styled.a>
          <Styled.a as={Link} href="#projects">
            Portfolio
          </Styled.a>
          <Styled.a as={Link} href="#community">
            Community
          </Styled.a>
          <Styled.a as={Link} href="#contact">
            Contact
          </Styled.a>
        </nav>
        {children}
        {switchToggle}
      </header>
    </Container>
  )
}
