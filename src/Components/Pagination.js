import React from 'react';
import Link from 'gatsby-link';

export default ({ page, pages, count }) => {
  return (
    <div className="pagination">
      <div className="pagination__prev">
        {page > 1 ? <Link to={`/blog/${page - 1}`}>Prev</Link> : null}
      </div>
      <div className="pagination__text">
        Page {page} of {pages} - {count} total 📝
      </div>
      <div className="pagination__next">
        {page < pages ? <Link to={`/blog/${page + 1}`}>Next</Link> : null}
      </div>
    </div>
  );
};
