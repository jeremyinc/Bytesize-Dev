const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async function({ actions, graphql }) {
  // find Post Data
  const { data } = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  // Create Individual Post Pages
  data.allContentfulBlogPost.edges.forEach(edge => {
    const slug = edge.node.slug
    actions.createPage({
      path: slug,
      component: require.resolve(
        `./src/templates/single-post-template-contentful.js`
      ),
      context: { slug: slug },
    })
  })
  // create a page for React;
  // create pages are concerned with the amount of pages and any additional data.
  // but ultimately do not control the content. that is up to the template to leverage and make use of.
  tags.forEach(tag => createTagPage(tag, actions))
}

var tags = ["react", "javascript", "node js"]

function createTagPage(tagName, actions) {
  // create the number of pages you wish to generate for a given tag
  var TagPage = [1]
  // loop through that array and pass the context for that tag to the post list.
  TagPage.forEach((page, index) => {
    const tag = []
    tag.push(tagName)
    actions.createPage({
      path: `tag/${tagName}`,
      component: require.resolve(
        `./src/templates/post-list-template-contentful.js`
      ),
      context: { tags: tag },
    })
    console.log("PASSING IN A TAG ARRAY", tag)
  })
}
