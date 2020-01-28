import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import { navigate } from "gatsby"
import Img from "gatsby-image"
import mq from "../Utilities/MediaQuery"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import ReactMarkdown from "react-markdown"
import {
  color,
  spacing,
  typography,
  transitions,
} from "../../constants/styles.js"

var { useEffect, useState, useLayoutEffect } = React

var StyledPost = styled.div`
  font-size: ${typography.size.m1}rem;
  .post__image {
    margin-bottom: ${spacing.padding.small}px;
    border-radius: ${spacing.borderRadius.xsmall}px;
    transition: 0.45s ease-in-out;
    cursor: pointer;
    :hover {
      transition: 0.45s ease-in-out;
      box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
    }
  }
  h1 {
    font-size: 2.6rem;
    font-family: "GT-Pressura-Pro-Mono-Trial-Regular";
    margin-bottom: ${spacing.padding.xsmall}px;
    letter-spacing: -0.025em;
  }
  p {
    color: var(--grey-secondary);
    margin-bottom: ${spacing.padding.small}px;
    line-height: 1.4em;
  }
  .post__tags {
    display: flex;
    flex-flow: row wrap;
    font-family: "Calibre-Medium";
    font-size: ${typography.size.s1}rem;
    text-transform: uppercase;
    align-items: center;
    letter-spacing: 0.15em;
    a {
      padding: ${spacing.padding.xxsmall}px ${spacing.padding.small}px;
      color: ${color.primary};
      border: 1px solid ${color.primary};
      background: transparent;
      border-radius: 20px;
      margin-right: 15px;
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
    h3 {
      color: ${color.gray8};
    }
  }
`

const PostCard = props => {
  var post = props.post
  console.log("POST MONEY", post)
  function goToArticle() {
    console.log("You clicked for this article", post.slug)
    // navigate(`${props.pageTitle}/${post.fields.slug}`)
    navigate(`${post.slug}`)
  }

  var imageRef = React.createRef()

  useEffect(() => {
    // can't store imageRef in Gatsby Image or safari doesn't initialize it. Have to wrap image in div for it to work
    console.log(imageRef.current)
    // imageRef.current.addEventListener("click", () => {
    //   goToArticle()
    // })
  }, [])

  return (
    <StyledPost className="col-3">
      <div ref={imageRef}>
        <AniLink fade to={post.slug} duration={transitions.page}>
          <Img className="post__image" fluid={post.postCoverImage.fluid} />
        </AniLink>
      </div>
      <h1>{post.postTitle}</h1>
      <p>{post.postDescription.postDescription}</p>
      <div className="post__tags">
        {post.postTags.map((tag, index) => {
          if (index <= 1) {
            return (
              <AniLink fade to={`tag/${tag}`} duration={transitions.page}>
                {tag}
              </AniLink>
            )
          } else {
            var extraTags = []
            extraTags.push(index)
            return <h3>+ {extraTags.length} more</h3>
          }
        })}
      </div>
    </StyledPost>
  )
}

export default PostCard

// if (index <= 1) {
//   return <Link to={`tag/${tag}`}>{tag}</Link>
// } else {
//   var extraTags = []
//   extraTags.push(index)
//   return <h3>+ {extraTags.length} more</h3>
// }

// return index <= 1 ? <Link to={`tag/${tag}`}>{tag}</Link> : null
