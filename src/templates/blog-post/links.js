import React from "react"
import styled from "styled-components"
import { PlainLink } from "components/link"

const LinkContainer = styled.h3`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 3em auto;
  text-align: center;

  * {
    margin-bottom: 1em;
  }
`

export const Links = ({ next, previous }) => {
  return (
    <LinkContainer>
      <span>
        {previous && (
          <PlainLink to={previous.fields.slug} rel="prev">
            ← {previous.frontmatter.title}
          </PlainLink>
        )}
      </span>
      <span>
        {next && (
          <PlainLink to={next.fields.slug} rel="next">
            {next.frontmatter.title} →
          </PlainLink>
        )}
      </span>
    </LinkContainer>
  )
}
