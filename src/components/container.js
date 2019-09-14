import styled from "styled-components"

export const Container = styled.section`
  max-width: 590px;
  margin: 2em auto;

  // is there a better place to put this?
  pre[class*="language-"] {
    font-size: 90%;
    border-radius: 0;
    border: 0;
  }
`
