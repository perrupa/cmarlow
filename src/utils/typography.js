import Typography from "typography"

const googleFonts = [
  "Anonymous Pro",
  // "Katibeh",
  // "Corben",
  // "Chonburi",
  "Staatliches",
]

export const typography = new Typography({
  baseFontSize: "20px",
  baseLineHeight: 1.5,
  scaleRatio: 2,
  googleFonts: googleFonts.map(name => ({ name, styles: ["400", "700"] })),
  headerFontFamily: ["Staatliches"],
  bodyFontFamily: ["Anonymous Pro"],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
