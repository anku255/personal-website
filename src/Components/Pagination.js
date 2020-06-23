import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const StyledPagination = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.cLightNavy};
  color: ${props => props.theme.cBlack};
  font-size: 1.8rem;
  margin: 3.2rem 0;
  padding: 1.8rem;
  box-shadow: 0 10px 30px -15px ${props => props.theme.cShadowNavy};

  a:hover,
  a:focus {
    color: ${props => props.theme.cGreen};
  }

  .pagination__next {
    flex: 0 0 auto;
    padding: 1rem 2rem 1rem 1rem;
    a:after {
      margin-left: 0.8rem;
      content: '→';
    }
  }
  .pagination__prev {
    flex: 0 0 auto;
    padding: 1rem 1rem 1rem 2rem;
    a:before {
      margin-right: 0.8rem;
      content: '←';
    }
  }
  .pagination__text {
    flex: 3 0 auto;
    padding: 1rem;
    text-align: center;
  }
`;

const Pagination = ({ page, pages, count }) => (
  <StyledPagination>
    <div className="pagination__prev">{page > 1 ? <Link to={`/blog/${page - 1}`}>Prev</Link> : null}</div>
    <div className="pagination__text">
      Page {page} of {pages} - {count} total 📝
    </div>
    <div className="pagination__next">{page < pages ? <Link to={`/blog/${page + 1}`}>Next</Link> : null}</div>
  </StyledPagination>
);

export default Pagination;
