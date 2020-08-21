import Typography from "typography"

const headerFontFamily = "Neuton"
const bodyFontFamily = "Alegreya"
const googleFonts = [bodyFontFamily, "Karla", "DM Mono"]

export const typography = new Typography({
  baseFontSize: "20px",
  baseLineHeight: 1.6,
  scaleRatio: 3,
  googleFonts: googleFonts.map(name => ({ name, styles: ["400", "700"] })),
  headerFontFamily: ["Karla"],
  bodyFontFamily: [bodyFontFamily],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
