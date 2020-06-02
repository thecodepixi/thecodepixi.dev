import baseTheme from "gatsby-theme-blog/src/gatsby-plugin-theme-ui"

export default {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    text: "#333",
    background: "linear-gradient(130deg, #e7f1f2, #bfc7d0)",
    primary: "teal",
    modes: {
      dark: {
        background: "#333",
        text: "ghostwhite",
        primary: "turquoise",
      },
    },
  },
  fonts: {
    body: "Montserrat, sans-serif",
    heading: "Raleway, sans-serif",
  },
}
