import React from "react"

import { Link } from "../link"
import styled from "styled-components"

export const Footer = () => (
  <footer>
    © {new Date().getFullYear()}, Built with
    {` `}
    🎔 and <Link href="https://www.gatsbyjs.org">Gatsby</Link>
  </footer>
)
