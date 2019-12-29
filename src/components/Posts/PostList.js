import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import mq from "../Utilities/MediaQuery"
import Img from "gatsby-image"
import PostCard from "./PostCard.js"
import ListTitle from "./ListTitle.js"
import { spacing } from "../../constants/styles.js"

var StyledList = styled.div`
  margin-bottom: ${spacing.padding.xxxlarge}px;
`

const PostList = props => {
  var posts = props.posts
  var postAmount = posts.length
  return (
    <StyledList className="site__container">
      <ListTitle postAmount={postAmount} pageTitle={props.pageTitle} />
      {posts.map(({ node }) => {
        return <PostCard post={node} pageTitle={props.pageTitle} />
      })}
    </StyledList>
  )
}

export default PostList
