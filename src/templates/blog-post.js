import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "components/layout"
import { Link } from "components/link"
import SEO from "components/seo"
import { rhythm, scale } from "utils/typography"

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3em auto;
`

const Links = ({ next, previous }) => {
  return (
    <LinkContainer>
      <span>
        {previous && (
          <Link to={previous.fields.slug} rel="prev">
            ← {previous.frontmatter.title}
          </Link>
        )}
      </span>
      <span>
        {next && (
          <Link to={next.fields.slug} rel="next">
            {next.frontmatter.title} →
          </Link>
        )}
      </span>
    </LinkContainer>
  )
}

const Post = ({ post }) => {
  return (
    <section>
      <h1>{post.frontmatter.title}</h1>
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
    </section>
  )
}
class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <Post post={post} />
        <Links next={next} previous={previous} />
      </Layout>
    )
  }
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
