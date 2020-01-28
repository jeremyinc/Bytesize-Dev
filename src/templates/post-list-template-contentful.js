import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout.js"
import SEO from "../components/SEO.js"
import PostList from "../components/Posts/PostList.js"
import ListTitle from "../components/Posts/ListTitle.js"

var { useEffect } = React

const PostListTemplate = props => {
  var pageTitle = props.pageContext.tags[0]
  var {
    allContentfulBlogPost: { edges },
  } = props.data
  console.log("POST LIST POST EDGES", edges)

  return (
    <>
      <SEO title={`${pageTitle}`} />

      <PostList posts={edges} pageTitle={pageTitle} />
    </>
  )
}

export default PostListTemplate

export const query = graphql`
  query($tags: [String!]) {
    allContentfulBlogPost(filter: { postTags: { in: $tags } }) {
      edges {
        node {
          postTitle
          slug
          postTags
          postDescription {
            postDescription
          }
          postContent {
            postContent
            childMdx {
              body
            }
          }
          postCoverImage {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`
