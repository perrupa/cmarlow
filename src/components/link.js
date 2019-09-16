import React from "react"
import styled from "styled-components"
import { Palette } from "utils/theme"
import { Link as GatsbyLink } from "gatsby"

const applyLinkStyle = Component => styled(Component)`
  color: ${Palette.neutral};
  text-decoration: none;
  position: relative;
  z-index: 1;

  // pseudo-underline
  :before {
    z-index: -1;
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0em;
    height: 3px;
    background-color: ${Palette.brand};
    transition: 0.3s;
  }

  &:hover {
    :before {
      left: -2%;
      right: -2%;
      bottom: 0.2em;
    }
  }
`

const InternalLink = applyLinkStyle(GatsbyLink)
const ExternalLink = applyLinkStyle(props => <a {...props} />)

export const Link = props => {
  if (props.href) return <ExternalLink {...props} />
  return <InternalLink {...props} />
}

export const PlainLink = styled(Link)`
  :before {
    content: none;
  }
`
