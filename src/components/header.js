import React from "react"
import { Link } from "gatsby"

const TitleElement = ({ root, children }) =>
  root ? <h1>{children}</h1> : <h2>{children}</h2>

export const Header = ({ root = false, title }) => {
  return (
    <TitleElement root={root}>
      <Link to={`/`}>{title}</Link>
    </TitleElement>
  )
}
