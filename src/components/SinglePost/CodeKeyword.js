import React from "react"
import styled from "@emotion/styled"
import { color, spacing, typography } from "../../constants/styles.js"

var StyledKeyword = styled.span`
  background-color: #f1f0fa;
  /* color: #564cbf; */
  padding: 2px 8px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-family: "IBM Plex Mono";
  font-size: 1.7rem;
`

const CodeKeyword = props => {
  console.log("CODE KEYWORD", props)
  return <StyledKeyword>{props.children[0].props.children}</StyledKeyword>
}

export default CodeKeyword
