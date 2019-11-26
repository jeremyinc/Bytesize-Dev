import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import { navigate } from "gatsby"
import Img from "gatsby-image"
import mq from "../Utilities/MediaQuery"

var { useEffect } = React

var StyledPost = styled.div`
  font-size: 1.8rem;
  .post__image {
    margin-bottom: var(--space-xsmall);
    transition: 0.45s ease-in-out;
    cursor: pointer;
    :hover {
      transition: 0.45s ease-in-out;
      box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
    }
  }
  h1 {
    font-size: 2.4rem;
    font-family: "GT-Pressura-Pro-Mono-Trial-Regular";
    margin-bottom: var(--space-xsmall);
  }
  p {
    color: var(--grey-secondary);
    margin-bottom: var(--space-small);
    line-height: 1.4em;
  }
  .post__tags {
    display: flex;
    flex-flow: row wrap;
    font-size: 1.3rem;
    text-transform: uppercase;
    a {
      padding: var(--space-xxsmall) var(--space-small);
      color: var(--accent-primary);
      border: 1px solid var(--accent-primary);
      letter-spacing: 0.15em;
      font-family: "Calibre-Medium";
      background: transparent;
      border-radius: 20px;
      margin-right: 15px;
      transition: 0.25s ease-in-out;
      cursor: pointer;
      :visited {
      }
      :hover {
        background: var(--accent-primary);
        transition: 0.25s ease-in-out;
        cursor: pointer;
        color: white;
        transition: 0.25s ease-in-out;
      }
    }
  }
`

const PostCard = props => {
  var post = props.post
  console.log("YOUR FM", post.frontmatter)
  function goToArticle() {
    console.log("You clicked for this article", post.fields.slug)
    // navigate(`${props.pageTitle}/${post.fields.slug}`)
    navigate(`${post.fields.slug}`)
  }
  var imageRef = React.createRef()

  useEffect(() => {
    var CoverImage = imageRef.current.imageRef.current
    CoverImage.addEventListener("click", () => {
      goToArticle()
    })
    // console.log("YOU LOADED YOUR PAGE!", imageRef.current.imageRef.current)
  }, [])

  return (
    <StyledPost className="col-3">
      <Img
        className="post__image"
        fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
        ref={imageRef}
      />
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.description}</p>
      <div className="post__tags">
        {post.frontmatter.tags.map((tag, index) => {
          return index <= 1 ? <Link to={`tag/${tag}`}>{tag}</Link> : null
        })}
      </div>
    </StyledPost>
  )
}

export default PostCard

// onClick={() => navigate(`/tag/javascript`)}
