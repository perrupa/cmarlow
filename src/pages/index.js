import React from "react"
import { graphql } from "gatsby"
import Layout from "components/layout"
import SEO from "components/seo"
import PostSummary from "components/post-summary"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <PostList posts={posts} />
      </Layout>
    )
  }
}

const PostList = ({ posts }) => (
  <>
    {posts.map(({ node }) => (
      <PostSummary key={node.fields.slug} node={node} />
    ))}
  </>
)

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            # description
          }
        }
      }
    }
  }
`
