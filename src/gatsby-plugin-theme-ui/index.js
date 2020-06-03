import baseTheme from "gatsby-theme-blog/src/gatsby-plugin-theme-ui"

export default {
  useColorSchemeMediaQuery: true,
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    primary: "#553d41",
    text: "#3b4550",
    background: "#f1ded7",
    secondary: "#294c7c",
    modes: {
      ...baseTheme.colors.modes,
      dark: {
        ...baseTheme.colors.modes.dark,
        primary: "#e4b691",
        text: "#f1ded7",
        secondary: "#bbd9db",
        background: "#3b4550",
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
