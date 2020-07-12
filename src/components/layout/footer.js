import React from "react"

import { Link } from "../link"
import styled from "styled-components"

const PageFooter = styled.footer`
  padding: 1em;
  text-align: center;
`

export const Footer = () => (
  <PageFooter>
    <p>
      © {new Date().getFullYear()}, Built with
      {` `}
      🎔 and <Link href="https://www.gatsbyjs.org">Gatsby</Link>
    </p>
  </PageFooter>
)
