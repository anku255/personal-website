import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { FaClock } from 'react-icons/fa';
import format from 'date-fns/format';

import Footer from '../Components/Footer';
import SEO from '../Components/seo';
import Layout from '../Components/layout';
import Tags from '../Components/Tags';

const Container = styled.div`
  background: ${props => props.theme.cBackground};
  min-height: 100vh;
  padding: 9rem 15rem;
  padding-bottom: 0;

  @media ${props => props.theme.device.lg} {
    padding: 7.2rem 8rem 0 8rem;
  }

  @media ${props => props.theme.device.sm} {
    padding: 7.2rem 0;
    background: ${props => props.theme.cLightNavy};
  }
`;

const StyledPost = styled.div`
  box-shadow: 0 10px 30px -15px ${props => props.theme.cShadowNavy};

  border-radius: 3px;
  background-color: ${props => props.theme.cLightNavy};
  color: ${props => props.theme.cBlack};
  padding: 3.2rem 1.75rem;
`;

const StyledPostTitle = styled.h3`
  font-size: 2.8rem;
  text-align: center;
`;

const Divider = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100px;
  height: 14px;
  border-top: 1px solid ${props => props.theme.cGreen};
  border-bottom: 1px solid ${props => props.theme.cGreen};
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
`;

const StyledDate = styled.div`
  font-size: 1.8rem;
  margin: 1.6rem 0;
  height: 2rem;
  color: ${props => props.theme.cGreen};

  svg {
    width: 1.4rem;
    height: 1.4rem;
    margin-right: 0.5rem;
    transform: translateY(-2px);
  }
`;

const StyledPostContent = styled.div`
  font-size: 2.2rem;
  line-height: 1.7;

  .intro {
    font-size: 2.4rem;
    line-height: 1.5;
  }

  figure {
    margin: 3rem 0;

    figcaption {
      text-align: center;
      font-size: 0.9em;
      font-style: italic;
      color: ${props => props.theme.cLightestSlate};
    }

    img {
      margin: 0 auto;
      display: block;
    }
  }

  pre {
    margin: 0 0 1.45rem;
  }
`;

const PostTemplate = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <Container>
        <StyledPost>
          <StyledPostTitle>{post.frontmatter.title}</StyledPostTitle>
          <Divider />
          {post.frontmatter.tags ? <Tags tags={post.frontmatter.tags} /> : null}
          <StyledDate>
            <FaClock /> <span>{format(new Date(post.frontmatter.date), 'MMM dd, yyyy')}</span>
          </StyledDate>
          <StyledPostContent dangerouslySetInnerHTML={{ __html: post.html }} />
        </StyledPost>
        <Footer />
      </Container>
    </Layout>
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
