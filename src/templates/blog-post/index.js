import React from "react"
import { graphql } from "gatsby"
import Layout from "components/layout"
import SEO from "components/seo"
import { BoldTitle } from "components/bold-title"
import { MainHeader } from "components/main-header"
import { BlogContainer } from "components/BlogContainer"
import { Links } from "./links"

const Post = ({ post }) => (
  <>
    <MainHeader>
      <BoldTitle>{post.frontmatter.title}</BoldTitle>
    </MainHeader>

    <BlogContainer>
      <p>{post.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </BlogContainer>
  </>
)

function BlogPostTemplate({ pageContext, data }) {
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
