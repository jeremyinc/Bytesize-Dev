import React from "react"
import ReactMarkdown from "react-markdown"
import CodeBlock from "./CodeBlock.js"
import styled from "@emotion/styled"
import PostIntro from "./PostIntro.js"
import PostBody from "./PostBody.js"
import { color, spacing, typography } from "../../constants/styles.js"
import mq from "../Utilities/MediaQuery"
import PostList from "./RelatedPosts/PostList"
import CodePen from "./Codepen"

const CustomRenderers = {
  code: CodeBlock,
}

var StyledPost = styled.div`
  margin: auto;
  margin-top: calc(1.25 * ${spacing.padding.xxxlarge}px);
  width: 960px;
`

var { useEffect, useState } = React

const SinglePost = ({ post }) => {
  console.log("YOUR SINGLE POST", post)
  // need to get height of the StyledPost, e.g. body, so I can target the visibility of codepen icon
  // based off of scroll position;
  var StyledPostRef = React.createRef()
  var [state, setState] = useState(0)
  useEffect(() => {
    setState(() => (state = StyledPostRef.current.getBoundingClientRect()))
  }, [])
  return (
    <>
      <div className="site__container">
        <StyledPost ref={StyledPostRef}>
          <PostIntro
            postTitle={post.postTitle}
            postDescription={post.postDescription.postDescription}
            postImage={post.postCoverImage.fluid}
          />
          <PostBody post={post} />
        </StyledPost>
        <PostList post={post} />
      </div>
      <CodePen postHeight={state} />
    </>
  )
}

export default SinglePost
