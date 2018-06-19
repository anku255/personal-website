const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

// Create slug for all posts
exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === 'MarkdownRemark') {
    const filePath = createFilePath({ node, getNode });
    const slug = filePath.split('/')[2];
    createNodeField({
      node,
      name: 'slug',
      value: slug
    });
  }
};

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const postTemplate = path.resolve('src/templates/post.js');

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/posts/" } }) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(res => {
      if (res.errors) {
        return reject(res.errors);
      }

      res.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: `blog/${node.fields.slug}`,
          component: postTemplate,
          context: {
            slug: node.fields.slug
          }
        });
      });
      resolve();
    });
  });
};
