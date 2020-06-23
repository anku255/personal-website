import React from 'react';
import styled from 'styled-components';

const StyledTags = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  margin-bottom: 0.4rem;
  flex-wrap: wrap;
`;

const StyledTag = styled.li`
  display: block;
  margin-right: 1rem;

  div {
    background: ${props => props.theme.cBlue};
    color: ${props => props.theme.cBlack};
    display: flex;
    padding-left: 10px;
    clip-path: polygon(10px 0%, 100% 1%, 100% 100%, 10px 100%, 0% 50%);
  }

  span {
    padding: 0.8rem;
    font-size: 1.6rem;
    transform: translateY(2px);
  }
`;

const Tags = ({ tags }) => (
  <StyledTags>
    {tags.map(tag => (
      <StyledTag key={tag}>
        <div className="tag__link">
          <span>{tag}</span>
        </div>
      </StyledTag>
    ))}
  </StyledTags>
);

export default Tags;
