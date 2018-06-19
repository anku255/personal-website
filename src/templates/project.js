import React from 'react';
import Link from 'gatsby-link';
import Footer from '../layouts/footer';

const ProjectTemplate = ({ data }) => {
  const {
    markdownRemark: {
      html,
      frontmatter: { title, url }
    }
  } = data;

  return (
    <div className="single-post page-wrap">
      <div className="post-card">
        <h1 className="post-title">{title}</h1>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <Link to="/projects" className="back-to-blog">
          Back to Projects
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectTemplate;

export const projectQuery = graphql`
  query ProjecttBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        url
      }
    }
  }
`;
