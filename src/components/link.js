import React from "react"
import styled from "styled-components"
import { Link as GatsbyLink } from "gatsby"

const applyLinkStyle = Component => styled(Component)`
  color: #333;
`

const InternalLink = applyLinkStyle(GatsbyLink)
const ExternalLink = applyLinkStyle(props => <a {...props} />)

export const Link = props => {
  if (props.href) return <ExternalLink {...props} />
  return <InternalLink {...props} />
}
