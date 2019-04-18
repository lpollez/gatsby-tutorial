const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      products: allContentfulProduct {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `)
    .then(result => {
      result.data.products.edges.forEach(({ node }) => {
        createPage({
          path: `products/${node.title}`,
          component: path.resolve(`./src/templates/product-template.js`),
          context: {
            id: node.id,
          },
        })
      })
    })
    .catch(err => console.log(err))
}
