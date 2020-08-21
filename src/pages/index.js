import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Link } from "components/link"
import Layout from "components/layout"
import SEO from "components/seo"
import { PostSummary } from "components/post-summary"
import { Palette } from "utils/theme"

const Section = styled.section`
  display: border-box;
  margin: 5em auto 5em;
  padding: 1em;
`

const MainHeader = styled.section`
  display: flex;
  height: 40vh;
  justify-content: flex-end;
  align-items: flex-end;
  background-color: ${Palette.brand};
`

const SiteTitle = styled.h1`
  font-family: "DM Mono";
  font-size: 5em;
  color: #fff;
  margin: 0.2em;
`

const SectionTitle = styled.h2`
  font-size: 2em;
`

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} fullWidth>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />

      <MainHeader>
        <SiteTitle>C:\Marlow</SiteTitle>
      </MainHeader>

      <Section>
        <SectionTitle>Ruthless simplicity and wholistic design</SectionTitle>
        <p>
          Understanding how systems function as a whole is crucial to being most
          effective in those environments. The fewer concepts contained in that
          system, the easier is to understate how they relate to each other.
        </p>

        <p>
          You can see my side-projects on my{" "}
          <Link href="https://github.com/perrupa/">GitHub profile</Link>, and my
          photographs <Link href="https://instagram.com/perrupa">@perrupa</Link>
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
