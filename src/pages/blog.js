import React from 'react';
import Link from 'gatsby-link';
import ClockIcon from 'react-icons/lib/fa/clock-o';
import Footer from '../layouts/footer';

import format from 'date-fns/format';

const Blog = ({ data }) => {
  return (
    <div className="blog page-wrap">
      <h1 className="page-title">Blog</h1>
      <div className="blog-post-list">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.frontmatter.slug} className="post">
            <Link to={`/blog/${node.frontmatter.path}`}>
              <h3 className="post-title">{node.frontmatter.title}</h3>
            </Link>
            <div className="divider" />
            <div className="date-wrap">
              <Link to={`/blog/${node.frontmatter.slug}`}>
                <ClockIcon />
                <div className="date">
                  {format(new Date(node.frontmatter.date), 'MMM DD, YYYY')}
                </div>
              </Link>
            </div>
            <div
              className="excerpt"
              dangerouslySetInnerHTML={{ __html: node.excerpt }}
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Blog;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: {regex : "\/posts/"} },
      sort:{fields: [frontmatter___date], order: DESC}
    )
    {
      edges {
        node {
          frontmatter {
            path
            title
            date
          }
          excerpt
        }
      }
    }
  }
`;
