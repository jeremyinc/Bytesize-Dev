import React from "react"
import ReactMarkdown from "react-markdown"
import CodeBlock from "./CodeBlock.js"
import styled from "@emotion/styled"
import PostIntro from "./PostIntro.js"
import PostBody from "./PostBody.js"
import { color, spacing, typography } from "../../constants/styles.js"
import mq from "../Utilities/MediaQuery"

const CustomRenderers = {
  code: CodeBlock,
}

var StyledPost = styled.div`
  margin: auto;
  margin-top: calc(1.25 * ${spacing.padding.xxxlarge}px);
  /* this width of 760 would be used if I did not use the StyledTips */
  /* width: 760px; */
  width: calc(60% - 10%);
  ${mq[3]} {
    width: 760px;
  }
`

var StyledTips = styled.div`
  width: 250px;
  background-color: #f3f2fe;
  height: 300px;
  margin-top: 560px;
  border-radius: ${spacing.borderRadius.medium}px;
  &.left {
    visibility: hidden;
  }
  ${mq[3]} {
    display: none;
  }
  &.right {
    margin-right: 4%;
    margin-left: 0;
  }
`

const SinglePost = ({ post }) => {
  console.log("YOUR SINGLE POST", post)
  return (
    <div className="site__container">
      <StyledTips className="col-1 left" />
      <StyledPost className="col-4">
        <PostIntro
          postTitle={post.postTitle}
          postDescription={post.postDescription.postDescription}
          postImage={post.postCoverImage.fluid}
        />
        <PostBody post={post} />
      </StyledPost>
      <StyledTips className="col-1 right" />
    </div>
  )
}

export default SinglePost
