import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Footer from '../components/Footer';
import ArrowLink from '../components/ArrowLink';
import Pagination from '../components/Pagination';
import PostCard from '../components/PostCard';

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

  @media ${props => props.theme.device.md} {
    font-size: 4.4rem;
    padding: 0 1rem;
  }
`;

const PostContainer = styled.div``;

const Blog = ({ data, pageContext }) => {
  const { page, pages, count } = pageContext;

  const {
    allMarkdownRemark: { edges: posts },
  } = data;

  return (
    <Layout>
      <SEO title="Blogs" />
      <Container>
        <Title>Blogs</Title>
        <PostContainer>
          {posts.map(({ node: { fields: { slug, excerpt }, frontmatter: { title, date } } }) => (
            <PostCard key={slug} slug={slug} title={title} date={date} excerpt={excerpt} />
          ))}
        </PostContainer>
        <Pagination page={page} pages={pages} count={count} />
        <ArrowLink position="left" to="/projects" label="Projects" />
        <Footer />
      </Container>
    </Layout>
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
