import React from "react"
import styled from "@emotion/styled"
import {
  color,
  spacing,
  typography,
  transitions,
} from "../../constants/styles.js"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

var StyledTags = styled.div`
  display: flex;
  flex-flow: row wrap;
  font-family: "Calibre-Medium";
  font-size: ${typography.size.s1}rem;
  text-transform: uppercase;
  align-items: center;
  letter-spacing: 0.15em;
  margin-bottom: ${spacing.padding.large}px;
  a {
    padding: ${spacing.padding.xxsmall}px ${spacing.padding.small}px;
    color: ${color.primary};
    border: 1px solid ${color.primary};
    background: transparent;
    border-radius: 20px;
    margin-right: ${spacing.padding.xsmall}px;
    transition: 0.25s ease-in-out;
    cursor: pointer;
    :visited {
    }
    :hover {
      background: ${color.primary};
      transition: 0.25s ease-in-out;
      cursor: pointer;
      color: white;
      transition: 0.25s ease-in-out;
    }
  }
`

const PostTags = props => {
  return (
    <StyledTags>
      {props.tags.map(tag => {
        return (
          <AniLink fade to={`tag/${tag}`} duration={transitions.page}>
            {tag}
          </AniLink>
        )
      })}
    </StyledTags>
  )
}

export default PostTags
