import baseTheme from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/index"

export default {
  useColorSchemeMediaQuery: true,
  ...baseTheme,
  fonts: {
    body: '"Nanum Gothic", Helvetica, sans-serif',
    headings: '"Lora", Times, serif',
  },
  fontWeights: {
    body: 400,
    headings: 700,
    bold: 700,
  },
  colors: {
    ...baseTheme.colors,
    primary: "#553d41",
    text: "#3b4550",
    background: "#eee",
    secondary: "#294c7c",
    heading: "#294c7c",
    highlight: "#bbd9db",
    modes: {
      ...baseTheme.colors.modes,
      dark: {
        ...baseTheme.colors.modes.dark,
        primary: "#e4b691",
        text: "#eee0d7",
        secondary: "#bbd9db",
        background: "#333",
        highlight: "#294c7c",
      },
    },
  },
  styles: {
    ...baseTheme.styles,
    h1: {
      ...baseTheme.styles.h1,
      color: "secondary",
    },
    h2: {
      ...baseTheme.styles.h2,
      color: "secondary",
    },
    h3: {
      ...baseTheme.styles.h3,
      color: "secondary",
      fontWeight: 700,
    },
    h4: {
      ...baseTheme.styles.h4,
      color: "secondary",
    },
    h5: {
      ...baseTheme.styles.h5,
      color: "secondary",
    },
    h6: {
      ...baseTheme.styles.h6,
      color: "secondary",
    },
    blockquote: {
      ...baseTheme.styles.blockquote,
      padding: "0 1em",
    },
    a: {
      ...baseTheme.styles.a,
      color: "secondary",
    },
    p: {
      ...baseTheme.styles.p,
      fontSize: "16px",
    },
  },
}
