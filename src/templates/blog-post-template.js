// import React from "react"
// import { graphql } from "gatsby"
// import Layout from "../components/Layout.js"
// import SEO from "../components/SEO.js"

// const BlogPost = props => {
//   console.log(props)
//   var pageTitle = props.data.mdx.frontmatter.title
//   return (
//     <Layout>
//       <SEO title={`${pageTitle}`} />
//       <div>working away!</div>
//     </Layout>
//   )
// }

// export const query = graphql`
//   query SinglePost($slug: String) {
//     mdx(fields: { slug: { eq: $slug } }) {
//       fields {
//         slug
//       }
//       frontmatter {
//         title
//         tags
//       }
//     }
//   }
// `

// export default BlogPost
