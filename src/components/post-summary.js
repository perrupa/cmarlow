import React from "react"
import styled from "styled-components"
import { PlainLink } from "components/link"

const PostTitle = styled.h3`
  font-size: 3em;
`

const PostDate = styled.small`
  margin-top: -3.5em;
  margin-bottom: 1em;
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

  return (
    <div>
      <PostTitle>
        <PlainLink style={{ boxShadow: `none` }} to={post.url}>
          {post.title}
        </PlainLink>
      </PostTitle>

      <PostDate>{post.date}</PostDate>

      <PostDescription content={post.description} />
    </div>
  )
}

export default PostSummary
