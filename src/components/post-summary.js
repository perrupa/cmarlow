import React from "react"
import styled from "styled-components"
import { Link } from "components/link"
import { Palette } from "utils/theme"

const Wrapper = styled.article`
  margin-bottom: 3em;
`

const PostTitle = styled.h2`
  font-size: 1.7em;
  margin-bottom: 0;
`

const PostDate = styled.small`
  margin: 0.5em 0.5em 1em;
  display: block;
`

export const Subtext = styled.span`
  color: ${Palette.brand};
  font-size: 0.7em;
  position: relative;
  bottom: -7px;
`

const PublishedDate = ({ date }) => {
  if (!date) return null

  date = new Date(date)
  let day = date.getDate()
  const text = [
    date.getFullYear(),
    date.getMonth() + 1,
    day < 10 ? "0" + day : day,
  ].join("/")

  return <Subtext>{text}</Subtext>
}

const PostDescription = ({ content }) => (
  <p
    dangerouslySetInnerHTML={{
      __html: content,
    }}
  />
)

export const PostSummary = ({ node, index }) => {
  const post = {
    title: node.frontmatter.title || node.fields.slug,
    description: node.frontmatter.description || node.excerpt,
    url: node.fields.slug,
    date: node.frontmatter.date,
  }

  // debugger

  console.log(node, index)

  return (
    <Wrapper>
      <PostTitle>
        <Link to={post.url}>
          <PublishedDate date={node.frontmatter.date} /> {post.title}
        </Link>
      </PostTitle>

      <PostDate>{post.date}</PostDate>

      <PostDescription content={post.description} />
    </Wrapper>
  )
}
