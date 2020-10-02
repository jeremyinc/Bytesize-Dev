import React from "react"
import styled from "@emotion/styled"
import { color, spacing, typography, shadows } from "../../constants/styles.js"
import Img from "gatsby-image"
import { AiOutlineRead } from "react-icons/ai"

var contentWidths = {
  medium: 80,
  large: 100,
}

var StyledIntro = styled.div`
  display: flex;
  flex-flow: column nowrap;
  h1 {
    width: ${contentWidths.medium}%;
    margin: auto;
    font-size: ${typography.size.l3}rem;
    font-family: "GT-Pressura-Pro-Mono-Bold";
    letter-spacing: -0.05em;
    margin-bottom: ${spacing.padding.medium}px;
    color: ${color.black};
  }
  p {
    width: ${contentWidths.medium}%;
    margin: auto;
    font-size: ${typography.size.m2}rem;
    color: ${color.gray8};
    line-height: 1.35em;
    margin-bottom: ${spacing.padding.small}px;
  }
  .postIntro__details {
    width: ${contentWidths.medium}%;
    margin: auto;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    margin-bottom: ${spacing.padding.medium}px;
    .details__read {
      margin-left: auto;
      display: flex;
      align-items: center;
      h3 {
        color: ${color.black};
      }
      .icon__read {
        font-size: 3rem;
        color: ${color.black};
        margin-right: ${spacing.padding.xsmall}px;
      }
    }
    h3 {
      font-size: ${typography.size.s3}rem;
      font-family: "Calibre-Medium";
      color: ${color.primary};
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    svg {
      stroke: ${color.primary};
    }
  }
  .gatsby-image-wrapper {
    width: ${contentWidths.large}%;
    margin: auto;
    border-radius: ${spacing.borderRadius.small}px;
    margin-bottom: ${spacing.padding.xlarge}px;
    box-shadow: ${shadows.xlarge};
  }
`

const PostIntro = ({ postTitle, postDescription, postImage }) => {
  return (
    <StyledIntro>
      <h1>{postTitle}</h1>
      <p>{postDescription}</p>
      <div className="postIntro__details">
        <h3>View On Codepen</h3>
        <RightArrow />
        <div className="details__read">
          <AiOutlineRead className="icon__read" />
          <h3>10 min read</h3>
        </div>
      </div>
      <Img fluid={postImage} />
    </StyledIntro>
  )
}

export default PostIntro

var RightArrow = () => {
  return (
    <svg width="60px" height="60px">
      <defs>
        <marker
          id="niceArrow"
          markerWidth="8"
          markerHeight="8"
          refX="4"
          refY="4"
          orient="auto"
        >
          <path d="M0,0 L4,4 L0,8" fill="none" />
        </marker>
      </defs>
      <line
        x1="20"
        y1="30"
        x2="46"
        y2="30"
        stroke-width="2"
        marker-end="url(#niceArrow)"
      />
    </svg>
  )
}

var arrow = () => {
  return (
    <svg width="200px" height="200px">
      <defs>
        <marker
          id="niceArrow"
          markerWidth="10"
          markerHeight="10"
          refX="6"
          refY="5"
          orient="auto"
        >
          <path d="M0,0 L6,5 L0,10" fill="none" stroke="black" />
        </marker>
      </defs>
      <line
        x1="20"
        y1="100"
        x2="20"
        y2="50"
        stroke="#000"
        stroke-width="2"
        marker-end="url(#niceArrow)"
      />
    </svg>
  )
}
