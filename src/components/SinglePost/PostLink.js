import React from "react"
import styled from "@emotion/styled"
import { color, spacing, typography } from "../../constants/styles.js"

var StyledLink = styled.a`
  /* must position the parent as relative */
  position: relative;
  font-family: "Calibre-Medium";
  color: ${color.primary};
  cursor: pointer;
  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: -2px;
    left: 0;
    background-color: ${color.primary};
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.2s ease-in-out 0s;
    transition: all 0.2s ease-in-out 0s;
  }
  :hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
`

const PostLink = props => {
  console.log("postlink props", props)
  return (
    <StyledLink href={props.href}>
      {props.children[0].props.children}
    </StyledLink>
  )
}

export default PostLink
