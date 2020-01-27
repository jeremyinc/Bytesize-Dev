import React from "react"
import PostCard from "./PostCard"
import styled from "@emotion/styled"
import { color, spacing, typography } from "../../../constants/styles.js"

var StyledList = styled.div`
  display: flex;
  flex-flow: column wrap;
  .related__border {
    height: 1px;
    background-color: rgba(0, 0, 0, 0.1);
    width: 92%;
    margin: auto;
  }
  .related__title {
    text-align: center;
    text-transform: uppercase;
    font-family: "Calibre-Medium";
    font-size: ${typography.size.m1}rem;
    letter-spacing: 0.025em;
    color: ${color.primary};
    margin-top: ${spacing.padding.large}px;
    margin-bottom: ${spacing.padding.large}px;
  }
  .related__articles {
    display: flex;
    flex-flow: row wrap;
    margin-bottom: ${spacing.padding.xxlarge}px;
  }
`

const PostList = props => {
  var post = props.post
  return (
    <StyledList>
      <span className="related__border"></span>
      <h1 className="related__title">Related Posts You May Enjoy</h1>
      <div className="related__articles">
        {post.relatedPosts[1].relatedPosts.map(post => {
          return <PostCard post={post} />
        })}
      </div>
    </StyledList>
  )
}

export default PostList
