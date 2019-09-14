import styled from "styled-components"

const containerWidth = "590px"
export const Container = styled.section`
  max-width: ${containerWidth};
  margin: 2em auto;

  // is there a better place to put this?
  pre[class*="language-"] {
    font-size: 90%;
    border-radius: 0;
    border: 0;
  }

  .gatsby-resp-image-link {
    @media only screen and (min-width: 600px) {
      margin: 1em calc((100vw - ${containerWidth}) / 2 * -1) 1em;
    }

    padding: 1em 0;
  }

  .gatsby-resp-image-wrapper {
    max-height: 90vh;
  }
`
