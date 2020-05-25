import React from "react"
import styled from "styled-components"
import { Link } from "components/link"

const Wrapper = styled.article`
  margin-bottom: 3em;
`

const PostTitle = styled.h2`
  font-size: 1.7em;
  margin-bottom: 0;
`

const PostDate = styled.small`
  margin-left: 0.5em;
  margin-bottom: 1em;
  display: block;
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
      <PostTitle>
        <Link to={post.url}>{post.title}</Link>
      </PostTitle>

      <PostDate>{post.date}</PostDate>

      <PostDescription content={post.description} />
    </Wrapper>
  )
}

export default PostSummary
