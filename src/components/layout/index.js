import React from "react"

import { Header } from "./header"
import { Container } from "./container"
import { Footer } from "./footer"

export const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  return (
    <Container>
      {title && <Header title={title} root={location.pathname === rootPath} />}

      <main>{children}</main>

      <Footer />
    </Container>
  )
}

export default Layout
