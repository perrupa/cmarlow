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
  transition: 0.15s;

  // pseudo-underline
  :before {
    z-index: -1;
    content: "";
    position: absolute;
    top: 90%;
    left: -0%;
    right: -0%;
    bottom: 8%;
    transition: 0.15s;
    background-color: ${darken(0.2, Palette.brand)};
  }

  &:visited {
    :before {
      // background-color: ${darken(0.2, Palette.brand)};
    }
  }

  &:hover {
    :before {
      top: -2%;
      bottom: -2%;
      left: -2%;
      right: -2%;
    }
    color: #fff;
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
