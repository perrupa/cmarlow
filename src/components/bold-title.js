import { Palette } from "utils/theme"
import styled from "styled-components"

export const BoldTitle = styled.h1`
  font-family: "DM Mono";
  font-size: 5em;
  color: ${props => (props.inverted ? Palette.neutral : Palette.white)};
  margin: 0.2em;

  @media only screen and (max-width: 600px) {
    font-size: 2em;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  .blink {
    animation: blink 1s step-start 0s infinite;
  }
`
