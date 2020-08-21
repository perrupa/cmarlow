import React from "react"
import styled from "styled-components"
import "../../style/style.scss"

const containerWidth = "790px"

export const PageLayout = styled.section`
  max-width: 100vw;
  overflow: hidden;
`

export const Content = styled.section`
  pre[class*="language-"] {
    font-size: 90%;
    border-radius: 0;
    border: 0;
  }

  .gatsby-resp-image-link {
    @media only screen and (min-width: 600px) {
      // margin: 1em inherit 1em;
    }

    padding: 1em 0;
  }
`

export const Container = ({ children, fullWidth = false }) => (
  <PageLayout>
    {fullWidth ? children : <Content>{children}</Content>}
  </PageLayout>
)
