import React from "react"
import styled from "styled-components"
import { darken } from "polished"
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
    bottom: -0.2em;
    height: 3px;
    transition: 0.3s;
    background-color: ${Palette.brand};
  }

  &:visited {
    :before {
      background-color: ${darken(0.2, Palette.brand)};
    }
  }

  &:hover {
    :before {
      left: -2%;
      right: -2%;
      height: 5px;
      bottom: -0.3em;
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
