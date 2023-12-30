import React from "react"
import { graphql } from "gatsby"
import { Link } from "components/link"
import Layout from "components/layout"
import SEO from "components/seo"
import { PostSummary } from "components/post-summary"
import { BoldTitle } from "../components/bold-title"
import { MainHeader } from "../components/main-header"
import { Section, SectionContainer, SectionTitle } from "../components/section"

export const Index = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout isHomepage fullWidth>
      <SEO title="Home" keywords={["blog", "gatsby", "javascript", "react"]} />

      <MainHeader>
        <BoldTitle>
          <span style={{position: "relative", right: "-0.2em"}}>C:</span>\Marlow<span className="blink">_</span>
        </BoldTitle>
      </MainHeader>

      <SectionContainer>
        <Section>
          <SectionTitle>Ruthless simplicity and wholistic design</SectionTitle>
          <p>
            Understanding how systems function as a whole is crucial to being
            most effective in those environments. The fewer concepts contained
            in that system, the easier it is to understand how they relate to
            each other.
          </p>

          <p>
            You can see my side-projects on my{" "}
            <Link href="https://github.com/perrupa/">GitHub profile</Link>, and
            my <Link href="https://instagram.com/perrupa">IG @perrupa</Link>.
          </p>
        </Section>

        <Section>
          <SectionTitle>Articles and Posts</SectionTitle>
          {posts.map(({ node }) => (
            <PostSummary key={node.fields.slug} node={node} />
          ))}
        </Section>
      </SectionContainer>
    </Layout>
  )
}

export default Index

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
