import React from "react"
import styled from "styled-components"
import { Palette } from "utils/theme"
import { Link as GatsbyLink } from "gatsby"

const StyledLink = styled(GatsbyLink)`
  display: inline-block;
  color: ${props => (props.inverted ? Palette.white : Palette.neutral)};
  text-decoration: none;
  position: relative;
  z-index: 1;
  transition: 0.15s cubic-bezier(0, 0, 0, 1.48);

  // pseudo-underline
  & ::before {
    z-index: -1;
    content: "";
    position: absolute;
    height: 4px;
    bottom: 0;
    left: -0.1em;
    right: -0.1em;
    transition: 0.2s cubic-bezier(0, 0, 0, 1.48);
    background-color: ${props =>
      props.inverted ? Palette.white : Palette.brand};
  }

  &:target,
  &:focus,
  &:hover {
    outline: none;
    color: ${props => (props.inverted ? Palette.brand : Palette.white)};

    * {
      color: ${props => (props.inverted ? Palette.brand : Palette.white)};
    }

    & ::before {
      line-height: 1.3;
      height: 150%;
      bottom: -25%;
      left: -0.4em;
      right: -0.4em;
    }
  }
`

export const Link = props => {
  if (props.href) return <StyledLink as="a" {...props} />
  return <StyledLink {...props} />
}

export const PlainLink = styled(Link)``
