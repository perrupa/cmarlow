import React from "react"
import { GoogleFont } from "react-typography"
import typography from "utils/typography"
import { Link } from "./link"

const TitleElement = ({ root, children }) => {
  const props = { id: "title", style: { margin: 0 } }
  return root ? <h1 {...props}>{children}</h1> : <h2 {...props}>{children}</h2>
}

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
