import React from "react"
import { GoogleFont } from "react-typography"

import { Header } from "./header"
import typography from "utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    return (
      <div>
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
      </div>
    )
  }
}

export default Layout
