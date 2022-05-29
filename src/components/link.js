import React from "react"
import styled from "styled-components"
import { Palette } from "utils/theme"
import { Link as GatsbyLink } from "gatsby"

const StyledLink = styled(GatsbyLink)`
  display: inline-block;
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
    height: 4px;
    bottom: 0;
    left: 0;
    right: 0;
    transition: 0.15s;
    background-color: ${Palette.brand};
  }

  &:target,
  &:focus,
  &:hover {
    outline: none;
    color: ${Palette.white};

    * {
      color: ${Palette.white};
    }

    :before {
      height: 120%;
      bottom: -10%;
      left: -0.5em;
      right: -0.5em;
    }
  }
`

export const Link = props => {
  if (props.href) return <StyledLink as="a" {...props} />
  return <StyledLink {...props} />
}

export const PlainLink = styled(Link)``
