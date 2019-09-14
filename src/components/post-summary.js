import React from "react"
import { Link } from "components/link"

export const PostSummary = ({ node, key }) => {
  const title = node.frontmatter.title || node.fields.slug
  return (
    <div key={key}>
      <h3>
        <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
          {title}
        </Link>
      </h3>
      <small>{node.frontmatter.date}</small>
      <p
        dangerouslySetInnerHTML={{
          __html: node.frontmatter.description || node.excerpt,
        }}
      />
    </div>
  )
}

export default PostSummary
