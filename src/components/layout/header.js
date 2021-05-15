import React from "react"
import styled from "styled-components"
import { GoogleFont } from "react-typography"
import { typography } from "utils/typography"
import { PlainLink } from "../link"

const TitleElement = ({ h1, children }) =>
  h1 ? <h1>{children}</h1> : <h2>{children}</h2>

export const Header = ({ h1 = false, title }) => {
  return (
    <header>
      <GoogleFont typography={typography} />

      <TitleElement h1={h1}>
        <PlainLink to={`/`}>{title}</PlainLink>
      </TitleElement>
    </header>
  )
}
