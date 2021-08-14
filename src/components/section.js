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

export const SectionContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
`

export const Section = styled.section`
  flex: 1 1 500px;
  margin: 1em auto 5em;
  padding: 1em;

  @media only screen and (min-width: 1200px) {
    flex: 1 1 40vw;
    padding: 1em 5vw;
  }
`
