import React from "react"
import styled from "styled-components"
import { GoogleFont } from "react-typography"
import { typography } from "utils/typography"
import { PlainLink } from "../link"

const TitleElement = ({ root, children }) =>
  root ? <h1>{children}</h1> : <h2>{children}</h2>

export const Header = ({ root = false, title }) => {
  return (
    <header>
      <GoogleFont typography={typography} />

      <TitleElement root={root}>
        <PlainLink to={`/`}>{title}</PlainLink>
      </TitleElement>
    </header>
  )
}
