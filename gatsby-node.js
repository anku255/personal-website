const path = require('path');
const _ = require('lodash');
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
  const tagTemplate = path.resolve('src/templates/tags.js');
  const projectTemplate = path.resolve('src/templates/project.js');

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/posts/" } }) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                tags
              }
            }
          }
        }
      }
    `)
      .then(res => {
        if (res.errors) {
          return reject(res.errors);
        }

        const posts = res.data.allMarkdownRemark.edges;

        posts.forEach(({ node }) => {
          createPage({
            path: `blog/${node.fields.slug}`,
            component: postTemplate,
            context: {
              slug: node.fields.slug
            }
          });

          // Tag pages:
          let tags = [];
          // Iterate through each post, putting all found tags into `tags`
          _.each(posts, edge => {
            if (_.get(edge, 'node.frontmatter.tags')) {
              tags = tags.concat(edge.node.frontmatter.tags);
            }
          });
          // Eliminate duplicate tags
          tags = _.uniq(tags);

          // Make tag pages
          tags.forEach(tag => {
            createPage({
              path: `/tags/${_.kebabCase(tag)}/`,
              component: tagTemplate,
              context: {
                tag
              }
            });
          });
        });
      })
      .then(() => {
        graphql(`
          {
            allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/projects/" } }
            ) {
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
              path: `project/${node.fields.slug}`,
              component: projectTemplate,
              context: {
                slug: node.fields.slug
              }
            });
          });
          resolve();
        });
      });
  });
};
