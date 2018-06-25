import React from 'react';

import PostCard from '../Components/PostCard';
import Pagination from '../Components/Pagination';
import Footer from '../layouts/footer';

const Blog = ({ data, pathContext }) => {
  const { page, pages, count } = pathContext;

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
              fields: { slug, excerpt },
              frontmatter: { title, date }
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
      <Pagination page={page} pages={pages} count={count} />
      <Footer />
    </div>
  );
};

export default Blog;

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
            excerpt
          }
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`;
