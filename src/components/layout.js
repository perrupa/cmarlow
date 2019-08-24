import React from "react"

import { Header } from "./header"
import { Container } from "./container"

const Footer = () => (
  <footer>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
)

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  return (
    <Container>
      <Header title={title} root={location.pathname === rootPath} />
      <main>{children}</main>
      <Footer />
    </Container>
  )
}

export default Layout
