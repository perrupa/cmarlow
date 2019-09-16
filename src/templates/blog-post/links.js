import React from "react"
import styled from "styled-components"
import { PlainLink } from "components/link"

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 3em auto;
`

const PostLink = ({ link, next = false, prev = false }) => {
  if (!link) return null
  return (
    <LinkHeader>
      <PlainLink to={link.fields.slug} rel="prev">
        {prev && "←"} {link.frontmatter.title} {next && "→"}
      </PlainLink>
    </LinkHeader>
  )
}

const LinkHeader = styled.h3`
  text-align: center;
  margin-bottom: 1em;
`

export const Links = ({ next, previous }) => {
  return (
    <LinkContainer>
      <PostLink link={previous} prev />
      <PostLink link={next} next />
    </LinkContainer>
  )
}
