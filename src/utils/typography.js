import Typography from "typography"

const googleFonts = ["Anonymous Pro", "Katibeh", "Corben", "Chonburi"]

const typography = new Typography({
  baseFontSize: "22px",
  baseLineHeight: 1.666,
  scaleRatio: 5,
  googleFonts: googleFonts.map(name => ({ name, styles: ["400", "700"] })),
  headerFontFamily: ["Katibeh"],
  bodyFontFamily: ["Anonymous Pro"],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
