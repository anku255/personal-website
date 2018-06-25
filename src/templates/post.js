import React from 'react';
import Link from 'gatsby-link';
import ClockIcon from 'react-icons/lib/fa/clock-o';
import Footer from '../layouts/footer';
import Tags from '../Components/Tags';

import format from 'date-fns/format';

const PostTemplate = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <div className="single-post page-wrap">
      <div className="post-card">
        <h1 className="post-title">{post.frontmatter.title}</h1>
        <div className="divider" />
        {post.frontmatter.tags ? <Tags tags={post.frontmatter.tags} /> : null}
        <div className="date-wrap">
          <ClockIcon />
          <div className="date">
            {format(new Date(post.frontmatter.date), 'MMM DD, YYYY')}
          </div>
        </div>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <Link to="/blog/1" className="back-to-blog">
          Back to Blog
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default PostTemplate;

export const postQuery = graphql`
  query BlogPostByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        tags
      }
    }
  }
`;
