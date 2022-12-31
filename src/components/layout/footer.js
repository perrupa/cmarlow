import React from "react"

import { Link } from "../link"
import styled from "styled-components"
import { Palette } from "utils/theme"

const PageFooter = styled.footer`
  padding: 1em;
  text-align: center;
  color: ${Palette.white};
  background-color: ${Palette.brand};
`

export const Footer = () => (
  <PageFooter>
    <p>
      © {new Date().getFullYear()}, Built with ❤️ and{" "}
      <Link inverted href="https://www.gatsbyjs.org">
        Gatsby
      </Link>
      .
    </p>
  </PageFooter>
)
