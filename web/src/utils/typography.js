import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.666,
  headerFontFamily: ["Roslindale", "serif"],
  headerWeight: 500,
  bodyFontFamily: ["Cabin", "sans-serif"],
  overrideStyles: ({ rhythm }) => ({
    "h3, h6": {
      margin: 0,
    },
    ul: {
      margin: 0,
    },
  }),
})

export default typography
