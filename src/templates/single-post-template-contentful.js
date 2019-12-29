import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout.js"
import SEO from "../components/SEO.js"
import PostList from "../components/Posts/PostList.js"
import ListTitle from "../components/Posts/ListTitle.js"
import SinglePost from "../components/SinglePost/SinglePost"
import styled from "@emotion/styled"

const SinglePostTemplate = props => {
  // var {
  //   contentfulBlogPost: { post },
  // } = props.data
  var post = props.data.contentfulBlogPost
  var pageTitle = post.postTitle
  console.log("POST EDGES", props.data.contentfulBlogPost)
  return (
    // <Layout>
    //   <SEO title={`${pageTitle}`} />

    //   <PostList posts={edges} pageTitle={pageTitle} />
    // </Layout>
    <Layout>
      <SEO title={`${pageTitle}`} />
      <SinglePost post={post} />
    </Layout>
  )
}

export default SinglePostTemplate

export const query = graphql`
  query($slug: String) {
    contentfulBlogPost(slug: { eq: $slug }) {
      postTitle
      slug
      postTags
      postDescription {
        postDescription
      }
      postContent {
        postContent
      }
      postCoverImage {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`
