import React from "react"
import { GoogleFont } from "react-typography"
import typography from "utils/typography"
import { Link } from "./link"

const TitleElement = ({ root, children }) =>
  root ? (
    <h1 style={{ margin: 0 }}>{children}</h1>
  ) : (
    <h2 style={{ margin: 0 }}>{children}</h2>
  )

export const Header = ({ root = false, title }) => {
  return (
    <header style={{ padding: "1em" }}>
      <GoogleFont typography={typography} />
      <TitleElement root={root}>
        <Link to={`/`}>{title}</Link>
      </TitleElement>
    </header>
  )
}
