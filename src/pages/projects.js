import React from 'react';
import Footer from '../layouts/footer';
import Img from 'gatsby-image';

const Projects = ({ data }) => {
  const { edges: folioItems } = data.allMarkdownRemark;

  return (
    <div className="projects-page page-wrap">
      <h1 className="page-title">Projects</h1>
      <div className="page-content">
        Below are some of the projects I have worked on recently. Click on a
        project to get more details.
      </div>
      <div className="folio-items-wrap">
        {folioItems.map(({ node: { frontmatter: { title, url, cover } } }) => (
          <div key={title} className="folio-item">
            <a href={url} target="_blank">
              <Img className="item-image" sizes={cover.childImageSharp.sizes} />
              <div className="item-title-wrap">
                <div className="item-title">{title}</div>
              </div>
            </a>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Projects;

// Pull the project page content from Wordpress
export const projectsPageQuery = graphql`
  query projectsPageQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
      edges {
        node {
          frontmatter {
            title
            url
            cover {
              publicURL
              childImageSharp {
                sizes(maxWidth: 406) {
                  srcSet
                }
              }
            }
          }
        }
      }
    }
  }
`;
