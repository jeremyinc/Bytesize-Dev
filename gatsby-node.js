const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  console.log("NODE TYPES", node.internal.type)
  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `postscool` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async function({ actions, graphql }) {
  // find Post Data
  const { data } = await graphql(`
    query AllPosts {
      allMdx {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  // Create Individual Post Pages
  data.allMdx.edges.forEach(edge => {
    const slug = edge.node.fields.slug
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/blog-post-template.js`),
      context: { slug: slug },
    })
  })
  // create a page for React;
  // create pages are concerned with the amount of pages and any additional data.
  // but ultimately do not control the content. that is up to the template to leverage and make use of.
  createTagPage("react", actions)
  createTagPage("styled-components", actions)
  createTagPage("javascript", actions)
  createTagPage("node-js", actions)
  createTagPage("style", actions)
}

function createTagPage(tagName, actions) {
  // create the number of pages you wish to generate for a given tag
  var TagPage = [1]
  // loop through that array and pass the context for that tag to the post list.
  TagPage.forEach((page, index) => {
    const tag = []
    tag.push(tagName)
    actions.createPage({
      path: `tag/${tagName}`,
      component: require.resolve(`./src/templates/post-list-template.js`),
      context: { tags: tag },
    })
  })
}
