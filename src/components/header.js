import React, { h1, h3 } from "react"
import { Link } from "gatsby"

const TitleElement = ({ root, children }) =>
  root ? <h1>{children}</h1> : <h3>{children}</h3>

export const Header = ({ root = false, title }) => {
  return (
    <TitleElement root={root}>
      <Link to={`/`}>{title}</Link>
    </TitleElement>
  )
}
