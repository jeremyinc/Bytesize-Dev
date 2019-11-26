import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout.js"
import SEO from "../components/SEO.js"
import PostList from "../components/Post/PostList.js"
import ListTitle from "../components/Post/ListTitle.js"

const PostListTemplate = props => {
  var pageTitle = props.pageContext.tags[0]
  var {
    allMdx: { edges },
  } = props.data
  console.log("POST EDGES", edges)
  return (
    <Layout>
      <SEO title={`${pageTitle}`} />

      <PostList posts={edges} pageTitle={pageTitle} />
    </Layout>
  )
}

export const query = graphql`
  query PostByTags($tags: [String]) {
    allMdx(filter: { frontmatter: { tags: { in: $tags } } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            tags
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 600, maxHeight: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default PostListTemplate
