import React from 'react';

import PostCard from '../Components/PostCard';
import Footer from '../layouts/footer';

const Blog = ({ data }) => {
  const {
    allMarkdownRemark: { edges: posts }
  } = data;

  return (
    <div className="blog page-wrap">
      <h1 className="page-title">Blog</h1>
      <div className="blog-post-list">
        {posts.map(
          ({
            node: {
              fields: { slug },
              frontmatter: { title, date },
              excerpt
            }
          }) => (
            <PostCard
              key={slug}
              slug={slug}
              title={title}
              date={date}
              excerpt={excerpt}
            />
          )
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Blog;

// export const pageQuery = graphql`
//   query IndexQuery {
//     allMarkdownRemark(
//       filter: { fileAbsolutePath: { regex: "/posts/" } }
//       sort: { fields: [frontmatter___date], order: DESC }
//     ) {
//       edges {
//         node {
//           fields {
//             slug
//           }
//           frontmatter {
//             title
//             date
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `;

export const BlogQuery = graphql`
  query BlogQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
          excerpt
        }
      }
    }
  }
`;
