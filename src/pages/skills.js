import React from "react"
import Layout from "components/layout"
import SEO from "components/seo"
import { BoldTitle } from "../components/bold-title"
import { MainHeader } from "../components/main-header"
import { Section, SectionTitle } from "../components/section"

export const Skills = () => {
  return (
    <Layout isHomepage fullWidth>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />

      <MainHeader>
        <BoldTitle>Skills/Learnins</BoldTitle>
      </MainHeader>

      <Section>
        <SectionTitle>Ruthless simplicity and wholistic design</SectionTitle>

        <p>
          Understanding how systems function as a whole is crucial to being most
          effective in those environments. The fewer concepts contained in that
          system, the easier is to understate how they relate to each other.
        </p>

        <dl>
          <dt>Front-end tech</dt>
          <dd>
            <ul>
              <li>Semantic and accessible HTML</li>
              <li>Javascript and DOM APIs</li>
              <li>Typescript</li>
            </ul>
          </dd>
        </dl>
      </Section>
    </Layout>
  )
}

export default Skills
