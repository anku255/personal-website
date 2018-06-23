import React from 'react';
import PropTypes from 'prop-types';

// Components
import PostCard from '../Components/PostCard';
import Footer from '../layouts/footer';
import Link from 'gatsby-link';

const Tags = ({ pathContext, data }) => {
  const { tag } = pathContext;
  const { edges } = data.allMarkdownRemark;

  return (
    <div className="blog page-wrap">
      <h1 className="page-title">{`Tag: ${tag}`}</h1>
      <div className="blog-post-list">
        {edges.map(
          ({
            node: {
              fields: { slug },
              frontmatter: { title, date },
              excerpt
            }
          }) => (
            <PostCard slug={slug} title={title} date={date} excerpt={excerpt} />
          )
        )}
      </div>

      <Link to="/tags">All tags</Link>
      <Footer />
    </div>
  );
};

Tags.propTypes = {
  pathContext: PropTypes.shape({
    tag: PropTypes.string.isRequired
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired
            }),
            excerpt: PropTypes.string.isRequired
          })
        }).isRequired
      )
    })
  })
};

export default Tags;

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/posts/" }
        frontmatter: { tags: { in: [$tag] } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 10
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
