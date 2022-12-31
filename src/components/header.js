import React from "react"
import { GoogleFont } from "react-typography"
import typography from "utils/typography"
import { Link } from "./link"
import { Palette } from "utils/theme"
import styled from "styled-components"

const TitleElement = ({ root, children }) => {
  const props = { id: "title", style: { margin: 0 } }
  return root ? <h1 {...props}>{children}</h1> : <h2 {...props}>{children}</h2>
}

const HeaderContainer = styled.header`
  padding: 2em;
  color: ${Palette.white};
  background-color: ${Palette.brand};
`

export const Header = ({ root = false, title }) => {
  return (
    <HeaderContainer>
      <GoogleFont typography={typography} />
      <TitleElement root={root}>
        <Link inverted to={`/`}>
          {title}
        </Link>
      </TitleElement>
    </HeaderContainer>
  )
}
