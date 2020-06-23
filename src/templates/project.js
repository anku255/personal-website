import React from 'react';
import { graphql } from 'gatsby';
// import Link from 'gatsby-link';
// import Footer from '../layouts/footer';

const ProjectTemplate = ({ data }) => <div className="single-post page-wrap">{JSON.stringify(data, null, 2)}</div>;

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
