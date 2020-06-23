import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { FaClock } from 'react-icons/fa';
import format from 'date-fns/format';

const StyledPostCard = styled.div`
  position: relative;
  box-shadow: 0 10px 30px -15px ${props => props.theme.cShadowNavy};
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  &:hover,
  &:focus {
    box-shadow: 0 20px 30px -15px ${props => props.theme.cShadowNavy};
    transform: translateY(-5px);
  }

  border-radius: 3px;
  background-color: ${props => props.theme.cLightNavy};
  color: ${props => props.theme.cBlack};
  padding: 3.2rem 1.75rem;
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 3.2rem;
  }

  a {
    color: unset;
  }
`;

const StyledPostTitle = styled.h3`
  font-size: 2.8rem;
  text-align: center;

  &:hover,
  &:focus {
    color: ${props => props.theme.cGreen};
  }
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
  margin-bottom: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  color: ${props => props.theme.cGreen};

  @media ${props => props.theme.device.minSm} {
    position: absolute;
    right: -7rem;
    top: 9.2rem;
    transform: rotate(90deg);
  }
  svg {
    width: 1.4rem;
    height: 1.4rem;
    margin-right: 0.5rem;
    transform: translateY(-2px);
  }
`;

const Excerpt = styled.p`
  text-align: center;
  font-size: 2rem;
  line-height: 1.2;
`;

const PostCard = ({ slug, title, date, excerpt }) => (
  <StyledPostCard key={slug}>
    <Link to={`/blog/${slug}`}>
      <StyledPostTitle>{title}</StyledPostTitle>
      <Divider />
      <StyledDate>
        <FaClock /> <span>{format(new Date(date), 'MMM dd, yyyy')}</span>
      </StyledDate>
      <Excerpt dangerouslySetInnerHTML={{ __html: excerpt }}></Excerpt>
    </Link>
  </StyledPostCard>
);

export default PostCard;
