import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import mq from "../Utilities/MediaQuery"

var StyledTitle = styled.div`
  font-size: 1.3rem;
  text-align: center;
  margin-top: var(--space-xlarge);
  margin-bottom: var(--space-xlarge);
  h1 {
    font-size: 4.8rem;
    font-family: "GT-Pressura-Pro-Mono-Trial-Regular";
    letter-spacing: -0.025em;
    span {
      text-transform: capitalize;
    }
  }
  h3 {
    font-size: 1.6rem;
    font-family: "Calibre-Medium";
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--accent-primary);
    margin-bottom: var(--space-xsmall);
  }
`

const ListTitle = props => {
  return (
    <StyledTitle className="col-6">
      <h3>found {props.postAmount} articles</h3>
      <h1>
        Articles Tagged with <span>{props.pageTitle}</span>
      </h1>
    </StyledTitle>
  )
}

export default ListTitle
