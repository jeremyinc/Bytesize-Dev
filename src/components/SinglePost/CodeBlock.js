import React from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
//  atomOneLight, xcode, a11yLight,  atelierSeasideLight, foundation
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs"
import styled from "@emotion/styled"
import { color, spacing, typography, shadows } from "../../constants/styles.js"

var StyledCode = styled.div`
  font-family: "IBM Plex Mono", monospace;
  font-size: ${typography.size.s3}rem;
  line-height: 1.6em;
  margin-bottom: ${spacing.padding.medium}px;
  pre {
    /* have to use bang important to overwrite existing highlighter styles */
    padding: ${spacing.padding.small}px !important;
    background-color: #f5f5fc !important;
    /* background-color: #f3f3fa !important; */
    border-radius: 8px;
  }
`

const CodeBlock = props => {
  console.log("codeblock props", props)
  return (
    <StyledCode>
      <SyntaxHighlighter language="javascript" style={atomOneLight}>
        {props.value}
      </SyntaxHighlighter>
    </StyledCode>
  )
}

export default CodeBlock
