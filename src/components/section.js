import styled from "styled-components"
import { Palette } from "utils/theme"

export const SectionTitle = styled.h2`
  position: relative;
  font-size: 2.5em;
  // color: ${Palette.white};
  // padding: 1em 0;
  margin-bottom: 1em;

  // ::before {
  //   position: absolute;
  //   content: "";
  //   top: 0;
  //   left: 50%;
  //   bottom: 0;
  //   width: 100vw;
  //   margin-left: -50vw;
  //   background-color: ${Palette.brand};
  //   z-index: -1;
  // }
`

export const Section = styled.section`
  display: border-box;
  margin: 5em auto 5em;
  padding: 1em;
`
