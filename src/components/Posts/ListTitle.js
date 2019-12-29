import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import mq from "../Utilities/MediaQuery"
import { color, spacing, typography } from "../../constants/styles.js"

var StyledTitle = styled.div`
  font-size: 1.3rem;
  text-align: center;
  margin-top: calc(1.25 * ${spacing.padding.xxxlarge}px);
  margin-bottom: ${spacing.padding.medium}px;

  h1 {
    font-size: 4.8rem;
    font-family: "GT-Pressura-Pro-Mono-Bold";
    letter-spacing: -0.025em;
    span {
      text-transform: capitalize;
      width: 100%;
    }
  }
  h3 {
    font-size: 1.6rem;
    font-family: "Calibre-Medium";
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: ${color.primary};
    margin-bottom: ${spacing.padding.xsmall}px;
  }
`

const ListTitle = props => {
  return (
    <StyledTitle className="col-6">
      <h3>found {props.postAmount} articles</h3>
      <h1>
        Tagged with <span>{props.pageTitle}</span>
      </h1>
    </StyledTitle>
  )
}

export default ListTitle
