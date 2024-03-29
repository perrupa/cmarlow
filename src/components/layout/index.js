import React from "react"

import { Header } from "../header"
import { Container } from "./container"
import { Footer } from "./footer"

export const Layout = ({ title, children, isHomepage = false }) => {
  return (
    <Container>
      {title && <Header title={title} h1={isHomepage} />}

      <main>{children}</main>

      <Footer />
    </Container>
  )
}

export default Layout
