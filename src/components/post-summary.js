import React from "react"
import styled from "styled-components"
import { PlainLink } from "components/link"

const Wrapper = styled.article`
  margin-bottom: 4em;
`

const PostTitle = styled.h2`
  font-size: 1.7em;
`

const PostDate = styled.small`
  margin-bottom: -0.5em;
  display: block;
  text-align: right;
`

const PostDescription = ({ content }) => (
  <p
    dangerouslySetInnerHTML={{
      __html: content,
    }}
  />
)

export const PostSummary = ({ node }) => {
  const post = {
    title: node.frontmatter.title || node.fields.slug,
    description: node.frontmatter.description || node.excerpt,
    url: node.fields.slug,
    date: node.frontmatter.date,
  }

  // debugger
  return (
    <Wrapper>
      <PostDate>{post.date}</PostDate>

      <PostTitle>
        <PlainLink to={post.url}>{post.title}</PlainLink>
      </PostTitle>

      <PostDescription content={post.description} />
    </Wrapper>
  )
}

export default PostSummary
