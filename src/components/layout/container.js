import React from "react"
import styled from "styled-components"
import "../../style/style.scss"

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
`

export const Container = ({ children, fullWidth = false }) => (
  <PageLayout>
    {fullWidth ? children : <Content>{children}</Content>}
  </PageLayout>
)
