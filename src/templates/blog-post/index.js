import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "components/layout"
import SEO from "components/seo"
import { rhythm, scale } from "utils/typography"
import { Links } from "./links"
import { BoldTitle } from "../../components/bold-title"
import { MainHeader } from "../../components/main-header"

const BlogContainer = styled.article`
  margin: 3em auto;
  padding: 1em;
`

const Post = ({ post }) => (
  <BlogContainer key={post.frontmatter.title}>
    <MainHeader>
      <BoldTitle>{post.frontmatter.title}</BoldTitle>
    </MainHeader>

    <p
      style={{
        ...scale(-1 / 5),
        display: `block`,
        marginBottom: rhythm(1),
        marginTop: rhythm(-1),
      }}
    >
      {post.frontmatter.date}
    </p>
    <div dangerouslySetInnerHTML={{ __html: post.html }} />
  </BlogContainer>
)

function BlogPostTemplate({ pageContext, data, props }) {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout fullWidth title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <Post post={post} />

      <Links next={next} previous={previous} />
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        # description
      }
    }
  }
`
