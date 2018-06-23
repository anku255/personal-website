import React from 'react';

import Link from 'gatsby-link';
import ClockIcon from 'react-icons/lib/fa/clock-o';
import format from 'date-fns/format';

export default ({ slug, title, date, excerpt }) => {
  return (
    <div key={slug} className="post">
      <Link to={`/blog/${slug}`}>
        <h3 className="post-title">{title}</h3>
      </Link>
      <div className="divider" />
      <div className="date-wrap">
        <Link to={`/blog/${slug}`}>
          <ClockIcon />
          <div className="date">{format(new Date(date), 'MMM DD, YYYY')}</div>
        </Link>
      </div>
      <div className="excerpt" dangerouslySetInnerHTML={{ __html: excerpt }} />
    </div>
  );
};
