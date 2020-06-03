import baseTheme from "gatsby-theme-blog/src/gatsby-plugin-theme-ui"

export default {
  useColorSchemeMediaQuery: true,
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    primary: "teal",
    text: "black",
    background: "#FDFCFB",
    secondary: "#c5a111",
    modes: {
      ...baseTheme.colors.modes,
      dark: {
        ...baseTheme.colors.modes.dark,
        primary: "turquoise",
        text: "antiquewhite",
        secondary: "yellow",
      },
    },
  },
  styles: {
    ...baseTheme.styles,
    h1: {
      ...baseTheme.styles.h1,
      color: "secondary",
    },
  },
}
