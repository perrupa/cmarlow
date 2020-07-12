import Typography from "typography"

const googleFonts = ["DM Mono", "Karla"]

export const typography = new Typography({
  baseFontSize: "20px",
  baseLineHeight: 1.6,
  scaleRatio: 3,
  googleFonts: googleFonts.map(name => ({ name, styles: ["400", "700"] })),
  headerFontFamily: ["Karla"],
  bodyFontFamily: ["DM Mono"],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
