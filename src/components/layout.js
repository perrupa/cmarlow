import React from "react"
import { GoogleFont } from "react-typography"

import { Header } from "./header"
import { Container } from "./container"
import typography from "utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  return (
    <Container>
      <header>
        <GoogleFont typography={typography} />
        <Header title={title} root={location.pathname === rootPath} />
      </header>

      <main>{children}</main>

      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </Container>
  )
}

export default Layout
