import React from "react"
import { GoogleFont } from "react-typography"
import typography from "utils/typography"
import { Link } from "gatsby"

const TitleElement = ({ root, children }) =>
  root ? <h1>{children}</h1> : <h2>{children}</h2>

export const Header = ({ root = false, title }) => {
  return (
    <header>
      <GoogleFont typography={typography} />
      <TitleElement root={root}>
        <Link to={`/`}>{title}</Link>
      </TitleElement>
    </header>
  )
}
