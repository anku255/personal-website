import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ArrowLink from '../components/ArrowLink';
import FlexGrid from '../components/FlexGrid';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

const Container = styled.div`
  background: ${props => props.theme.cBackground};
  min-height: 100vh;
  padding: 9rem 15rem;
  padding-bottom: 0;

  @media ${props => props.theme.device.lg} {
    padding: 7.2rem 8rem 0 8rem;
  }

  @media ${props => props.theme.device.sm} {
    padding: 7.2rem 2rem 0 2rem;
  }
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 5.6rem;
  line-height: 64px;
  padding-bottom: 3.2rem;
  padding-left: 1.5rem;

  @media ${props => props.theme.device.md} {
    font-size: 4.4rem;
    padding: 0 1rem;
  }
`;

const Projects = ({ data }) => {
  const { edges: folioItems } = data.allMarkdownRemark;

  return (
    <Layout>
      <SEO title="Projects" />
      <Container>
        <Title>Projects</Title>
        <FlexGrid gutter="1.5rem">
          {folioItems.map(({ node: { frontmatter: { url, title, github, tech }, html } }) => (
            <ProjectCard url={url} title={title} tech={tech} github={github} html={html} />
          ))}
        </FlexGrid>
        <ArrowLink position="left" to="/" label="Home" />
        <ArrowLink position="right" to="/blog/1" label="Blogs" />
        <Footer />
      </Container>
    </Layout>
  );
};

export default Projects;

export const projectsPageQuery = graphql`
  query projectsPageQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            url
            github
            tech
            cover {
              publicURL
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
