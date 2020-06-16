import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "components/layout"
import SEO from "components/seo"
import { PostSummary } from "components/post-summary"

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
            description
          }
        }
      }
    }
  }
`

const Section = styled.section`
  margin: 5em auto 5em;
`

const SectionTitle = styled.h2`
  font-size: 2em;
`

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />

      <Section>
        <SectionTitle>Ruthless simplicity and wholistic design</SectionTitle>
        <p>
          Understanding how systems function as a whole is crucial to being most
          effective in those environments. The fewer concepts contained in that
          system, the easier is to understate how they relate to each other.
        </p>
      </Section>

      <Section>
        <SectionTitle>Articles and Posts</SectionTitle>
        {posts.map(({ node }) => (
          <PostSummary key={node.fields.slug} node={node} />
        ))}
      </Section>
    </Layout>
  )
}

export default BlogIndex
