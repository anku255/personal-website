const path = require('path');
const _ = require('lodash');
const removeMd = require('remove-markdown');
const { createFilePath } = require(`gatsby-source-filesystem`);

// Helper functions
const paginationPath = (path, page, totalPages) => {
  if (page < 0 || page >= totalPages) {
    return '';
  } else {
    return `${path}/${page + 1}`;
  }
};

const getExcerpt = html => {
  return removeMd(html)
    .substr(0, 250)
    .concat('[..]');
};

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
    createNodeField({
      node,
      name: 'excerpt',
      value: getExcerpt(node.rawMarkdownBody)
    });
  }
};

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const postTemplate = path.resolve('src/templates/post.js');
  const tagTemplate = path.resolve('src/templates/tags.js');
  const projectTemplate = path.resolve('src/templates/project.js');
  const blogPageTemplate = path.resolve('src/templates/blog.js');

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
      // Create page for each blog post
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

          // Create page for each tag

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

          // Create page for each blog page`blog/{pageno}`

          const blogPostsCount = posts.length;
          const blogPostsPerPaginatedPage = 5;
          const paginatedPagesCount = Math.ceil(
            blogPostsCount / blogPostsPerPaginatedPage
          );

          // Create each paginated page
          _.times(paginatedPagesCount, index => {
            createPage({
              // Calculate the path for this page like `/blog`, `/blog/2`
              path: paginationPath('/blog', index, paginatedPagesCount),
              // Set the component as normal
              component: blogPageTemplate,
              // Pass the following context to the component
              context: {
                // Skip this number of posts from the beginning
                skip: index * blogPostsPerPaginatedPage,
                // How many posts to show on this paginated page
                limit: blogPostsPerPaginatedPage,
                // How many pages there are in total
                pages: paginatedPagesCount,
                // Total number of blog posts
                count: blogPostsCount,
                // Current page no
                page: index + 1
              }
            });
          });
        });
      })
      // create page for each project
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
